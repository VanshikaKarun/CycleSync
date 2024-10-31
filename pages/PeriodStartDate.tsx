import React, {useState, useEffect} from 'react';

import {View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Modal
} from 'react-native';

import { Calendar } from 'react-native-calendars';

import InfoHeader from '../components/InfoHeader';
import AMLLoading from '../components/AMLLoading';

import {NativeStackScreenProps, NativeStackNavigationProp} from "@react-navigation/native-stack"
import {RootStackParameterList} from '../App'

type PeriodStartDateProp = NativeStackScreenProps<RootStackParameterList, 'PeriodStartDate'>

function PeriodStartDate({navigation}: PeriodStartDateProp): React.JSX.Element{
    const today = new Date();

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // months are 0-based, so add 1
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const getFirstDayOfMonth = () => {
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
        return formatDate(firstDay);
    };

    const todayFormatted = formatDate(today);
    const firstDayOfMonth = getFirstDayOfMonth();

    const [selectedDay, setSelectedDay] = useState(todayFormatted);

    const onDayPress = (day:any) => {
        const selectedDay = day.dateString;
        setSelectedDay(selectedDay);
        console.log(selectedDay);
    };

    const markedDates = {
        [selectedDay]: {
            selected: true,
            selectedColor: 'pink',
            selectedTextColor: 'white',
        }
    };

    return(
        <View>
            <InfoHeader/>
            <AMLLoading currentpage={4}/>
            <View style={styles.content}>
                <Text style={styles.title}>When did your last Period start?</Text>
                <View style={styles.calendarContainer}>
                <Calendar 
                    style={styles.calStyle} 
                    onDayPress={onDayPress}
                    initialDate={todayFormatted}
                    minDate={firstDayOfMonth}
                    maxDate={todayFormatted}
                    hideExtraDays={true} 
                    hideArrows={true} 
                    markedDates={markedDates}
                />
                </View>
            </View>
            <View style={styles.alignButton}>
                <TouchableOpacity style={styles.customButton}
                onPress={() => navigation.push('ListDiscomfort')}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    content: {
        top: 50,
        margin: 20,
        padding: 15,
    },
    calendarContainer: {
        marginTop: 70,
    },
    calStyle: {
        borderRadius: 10,
        elevation: 4,
    },
    title: {
        color: 'black', 
        fontSize: 24, 
        fontFamily: 'Seogoe UI'
    },
    customButton: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 48,
        width:145,
        marginHorizontal: 20,
        borderRadius:25,
        backgroundColor: '#BFBFBF'
    },
    buttonText: {
        color: 'white',
        fontSize:25,
        fontWeight: 'bold',
    },
    alignButton: {
        top: 720,
        right: '50%',
        left: '50%',
        position: 'absolute',
        justifyContent: 'center',
    }
})

export default PeriodStartDate;