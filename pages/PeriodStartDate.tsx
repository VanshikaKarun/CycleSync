import React, {useState} from 'react';

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

function PeriodStartDate(): React.JSX.Element{
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

    return(
        <View>
            <InfoHeader/>
            <AMLLoading currentpage={4}/>
            <View style={styles.content}>
                <Text style={styles.title}>When did your last Period start?</Text>
                <View style={styles.calendarContainer}>
                <Calendar style={styles.calStyle} onDayPress={(date: any) => console.log(date)}
                    initialDate={todayFormatted}
                    minDate={firstDayOfMonth}
                    maxDate={todayFormatted}
                    hideExtraDays={true} //hides the extra days of another month showing
                    hideArrows={true} //forward and backward arrow to change month
                    // disableArrowLeft={true}
                    // disableArrowRight={true} //Disables the arrow that side

                    // single selection on the date
                    markedDates={{
                        '2024-09-03': {
                            // marked: true,
                            // dotColor: 'red',
                            selected: true,
                            selectedColor: 'pink', selectedTextColor: 'white'
                        }
                    }}

                    // multi-dot to show multi dots on a date
                    
                    // use Periods to select a period of dates
                />
                </View>
            </View>
            <View style={styles.alignButton}>
                <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        top: 150,
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