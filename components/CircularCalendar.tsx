import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Circle, G, Text as SvgText } from 'react-native-svg';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import data from '../assets/backend/data.json'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CircularCalendarProps {
    userId?: number;
}

function CircularCalendar({userId} : CircularCalendarProps): React.JSX.Element{
    const today = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const currentMonth = monthNames[today.getMonth()];
    const user = data.users.find((u) => u.id === userId) || data.users[0]; 
    let lastPeriod = user.periodCycle[user.periodCycle.length - 1];
    let lastPeriodDate = new Date(lastPeriod.lastPeriodStartDate);

    // if a new month has started and there is no data regarding this month in the JSON file
    if(today.getMonth() !== lastPeriodDate.getMonth()){
        const newformattedDate = lastPeriodDate.toISOString().split('T')[0];
        const newPeriod = {
            monthkey: today.getFullYear() + "_" + currentMonth,
            lastPeriodStartDate: newformattedDate,
            cycleLen: lastPeriod.cycleLen,
            periodLen: lastPeriod.periodLen
        }
        user.periodCycle.push(newPeriod);
        AsyncStorage.setItem('data', JSON.stringify(data));
        lastPeriod = newPeriod;
        lastPeriodDate = new Date(lastPeriod.lastPeriodStartDate);
    }
    const cycleLen = lastPeriod.cycleLen;
    const periodLen = lastPeriod.periodLen;
    const getDaysInMonth = (month:number, year:number) => {
        return new Date(year, month+1, 0).getDate();
    };
    const totalDays = getDaysInMonth(today.getMonth(), today.getFullYear());
    const radius = 45;
    const strokeWidth = 9;
    const circumference = 2 * Math.PI * radius;

    const periodStart = lastPeriodDate.getDate();
    const periodEnd = periodStart+periodLen-1;
    const ovulationEnd = Math.floor(periodStart+cycleLen/2);
    const ovulationStart = ovulationEnd-5;
    const fertilityStart = periodEnd+1;
    const fertilityEnd = ovulationStart-1;

    let dayType = "Normal Day";

    const calculateProgress = (startDate:number, endDate:number) => {
        if (endDate < startDate) {
            return ((totalDays - startDate + endDate + 1) / totalDays) * circumference;
        } else {
            return ((endDate - startDate + 1) / totalDays) * circumference;
        }
    };

    const day = today.getDate();

    const progressEmpty = calculateProgress(1, periodStart)
    const progressPeriod = calculateProgress(periodStart, periodEnd);
    const progressFertility = calculateProgress(fertilityStart, fertilityEnd);
    const progressOvulation = calculateProgress(ovulationStart, ovulationEnd-1);

    const createdayLabels = () => {
        const labels = [];
        for(let i=1; i<=totalDays; i++){
            const angle = (i/totalDays)*360;
            const x = 50 + radius * Math.cos((angle-90)*(Math.PI/180));
            const y = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180));

            let fillColor = "gray"; 
            if (i === day) {
                let borderColor = "gray";
                if (
                    (day >= periodStart && day <= periodEnd) ||
                    (periodEnd < periodStart && (day >= periodStart || day <= periodEnd))
                ) {
                    borderColor = "#FF59A9"; 
                    dayType = "Mensturation Day";
                } else if (
                    (day >= fertilityStart && day <= fertilityEnd) ||
                    (fertilityEnd < fertilityStart && (day >= fertilityStart || day <= fertilityEnd))
                ) {
                    borderColor = "purple"; 
                    dayType = "Fertility Day";
                } else if (
                    (day >= ovulationStart && day <= ovulationEnd) ||
                    (ovulationEnd < ovulationStart && (day >= ovulationStart || day <= ovulationEnd))
                ) {
                    borderColor = "orange"; 
                    dayType = "Ovulation Day";
                }

                labels.push(
                    <Circle
                        key={`border-${i}`}
                        cx={x}
                        cy={y}
                        r="6"
                        stroke={borderColor}
                        strokeWidth="1" 
                        fill="white"
                    />
                );
                fillColor = "black"; 
            } else if (
                (i>=periodStart && i<=periodEnd) ||
                (i>=fertilityStart && i<=fertilityEnd) || 
                (i>=ovulationStart && i<=ovulationEnd)
            ) {
                fillColor = "white";
            }

            labels.push(
                <SvgText
                    key={i}
                    x={x}
                    y={y}
                    fontSize="4"
                    fill={fillColor} 
                    textAnchor="middle"
                    dy="0.3em"
                >
                    {i}
                </SvgText>
            );
        }
        return labels;
    };

    return(
        <View style={styles.calendarContainer}>
            <Svg height="320" width="300" viewBox="0 0 100 100">
                <G rotation="-90" origin="50, 50">
                    <Circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="lightgray"
                        strokeWidth={strokeWidth}
                        fill="none"
                    />

                    {/* Empty Segment before the period */}
                    <Circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="lightgray"
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${progressEmpty}, ${circumference}`}
                        fill="none"
                        strokeLinecap="round"
                    />

                    {/* Period Segment */}
                    <Circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="#FF59A9"
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${progressPeriod}, ${circumference}`}
                        fill="none"
                        strokeDashoffset={-progressEmpty}
                        strokeLinecap="round"
                    />

                    {/* Fertility Segment */}
                    <Circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="purple"
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${progressFertility}, ${circumference}`}
                        fill="none"
                        strokeDashoffset={-(progressPeriod + progressEmpty)}
                        strokeLinecap="round"
                    />

                    {/* Ovulation Segment */}
                    <Circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="orange"
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${progressOvulation}, ${circumference}`}
                        fill="none"
                        strokeDashoffset={-(progressEmpty + progressPeriod + progressFertility)}
                        strokeLinecap="round"
                    />
                </G>
                {createdayLabels()}
                <View style={styles.calText}>
                    <View style={{flexDirection:'row', margin: 5}}>
                        <Icons2 name="calendar-blank-outline" size={20} style={{color: '#FF007F'}}/>
                        <Text style={{fontSize: 17, color: 'black'}}>
                            {currentMonth} {day}
                        </Text>
                    </View>
                    <Text style={{fontSize: 20, color: 'black'}}>{dayType}</Text>
                </View>
            </Svg>
        </View>
    )
}

const styles = StyleSheet.create({
    calendarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    calText: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 110,
        flexDirection: 'column'
    }
});

export default CircularCalendar;