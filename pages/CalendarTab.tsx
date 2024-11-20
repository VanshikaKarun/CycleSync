import {Text, View, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { Calendar } from 'react-native-calendars';
import data from '../assets/backend/data.json';

interface CalendarTabProps {
    userId: number;
}

function CalendarTab({userId}:CalendarTabProps) : React.JSX.Element{
    const user = data.users.find((u) => u.id === userId) || data.users[0]; 
    let lastPeriod = user.periodCycle[user.periodCycle.length - 1];
    const lastPeriodStartDate = new Date(lastPeriod.lastPeriodStartDate);
    const cycleLen = lastPeriod.cycleLen;
    const periodLen = lastPeriod.periodLen;

    const periodStart = lastPeriodStartDate.getDate();
    const periodEnd = periodStart+periodLen-1;

    const ovulationEnd = Math.floor(periodStart+cycleLen/2);
    const ovulationStart = ovulationEnd-5;
    const fertilityStart = periodEnd+1;
    const fertilityEnd = ovulationStart-1;

    const today = new Date();
    const day = today.getDate();
    console.log(day);

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const getDaysInMonth = (year: number, month: number): number => {
        return new Date(year, month + 1, 0).getDate();
    };

    const daysInCurrentMonth: number = getDaysInMonth(today.getFullYear(), today.getMonth());

    const getMarkedDates = () => {
        const markedDates: {[key: string]: any} = {};
        for (let i = 1; i <= daysInCurrentMonth; i++) {
            const date = new Date(today.getFullYear(), today.getMonth(), i);
            const formattedDate = formatDate(date);
    
            // Marking different phases with custom colors
            if (i >= periodStart && i <= periodEnd) {
                markedDates[formattedDate] = {
                    customStyles: {
                        container: {
                            backgroundColor: '#FFC7E2',  // Period phase color
                            borderRadius: 2,
                            borderWidth: 1,
                            borderColor: '#FFC7E2',
                        },
                        text: {
                            color: 'black',
                        },
                    },
                };
            } else if (i >= fertilityStart && i <= fertilityEnd) {
                markedDates[formattedDate] = {
                    customStyles: {
                        container: {
                            backgroundColor: '#E9C1F3',  // Fertility phase color
                            borderRadius: 2,
                            borderWidth: 1,
                            borderColor: '#E9C1F3',
                        },
                        text: {
                            color: 'black',
                        },
                    },
                };
            } else if (i >= ovulationStart && i <= ovulationEnd) {
                markedDates[formattedDate] = {
                    customStyles: {
                        container: {
                            backgroundColor: '#FFC794',  // Ovulation phase color
                            borderRadius: 2,
                            borderWidth: 1,
                            borderColor: '#FFC794',
                        },
                        text: {
                            color: 'black',
                        },
                    },
                };
            } else {
                markedDates[formattedDate] = {
                    customStyles: {
                        container: {
                            backgroundColor: '#D9D9D9',  // Default day color
                            borderRadius: 2,
                            borderWidth: 1,
                            borderColor: '#D9D9D9',
                        },
                        text: {
                            color: 'black',
                        },
                    },
                };
            }
    
            // Check if it's today and apply the border color based on phase
            if (formattedDate === todayFormatted) {
                let borderColor = '#0000FF'; // Default to blue for non-phase days
                let bgColor = '#D9D9D9';     // Default background color for non-phase days
    
                // Set colors based on phase
                if (i >= periodStart && i <= periodEnd) {
                    borderColor = '#FF007F';  // Pink for period
                    bgColor = '#FFC7E2';      // Light pink background for period
                } else if (i >= fertilityStart && i <= fertilityEnd) {
                    borderColor = '#9B4DFF';  // Purple for fertility
                    bgColor = '#E9C1F3';      // Purple background for fertility
                } else if (i >= ovulationStart && i <= ovulationEnd) {
                    borderColor = '#FF8F50';  // Orange for ovulation
                    bgColor = '#FFC794';      // Light orange background for ovulation
                }
    
                markedDates[formattedDate] = {
                    customStyles: {
                        container: {
                            backgroundColor: bgColor,  // Background color based on phase
                            borderRadius: 2,
                            borderWidth: 2,           // Border width for today
                            borderColor: borderColor, // Border color based on phase
                        },
                        text: {
                            color: 'white',            // Text color for today
                            fontWeight: 'bold', 
                        },
                    },
                };
            }
        }
        return markedDates;
    };
    

    const getFirstDayOfMonth = () => {
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
        return formatDate(firstDay);
    };

    const todayFormatted = formatDate(today);
    const firstDayOfMonth = getFirstDayOfMonth();

    return(
        <View>
            <View style={styles.header}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icons2 name="calendar-blank-outline" size={30} color={'#FF007F'}/>
                    <View style={{flexDirection:'column', margin: 10}}>
                        <Text style={{color: 'black', fontSize: 18}}>Calendar</Text>
                    </View>
                </View>
                <Logo fontSize={28}/>
            </View>
            <View style={styles.contentHeight}>
                <TouchableOpacity style={styles.editDates}>
                    <Icons2 name="pencil-outline" color={'white'} size={16}/>
                    <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>Edit Dates</Text>
                </TouchableOpacity>
                <View style={styles.colorTheme}>
                    <View style={[styles.box, {backgroundColor: '#FF6EB3'}]}/>
                    <Text style={styles.boxText}>Periods</Text>
                    <View style={[styles.box, {backgroundColor: '#DC4FFF'}]}/>
                    <Text style={styles.boxText}>Fertility</Text>
                    <View style={[styles.box, {backgroundColor: '#FF8F50'}]}/>
                    <Text style={styles.boxText}>Ovulations</Text>
                </View>
                <SafeAreaView style={styles.calendarContainer}>
                    <Calendar
                        style={{borderRadius: 10, margin: 20}}
                        hideExtraDays={true}
                        markedDates={getMarkedDates()}
                        markingType={'custom'}
                    />
                </SafeAreaView>
            </View>
            <Footer selectedTab='Calendar' onTabPress={(tab) => {
                console.log('Tab pressed: ', tab);
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    extraSpace: {
        height:100,
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentHeight: {
        height: '89%',
        marginLeft: 10,
        marginRight: 10,
    },
    editDates: {
        backgroundColor: '#FF59A9',
        borderRadius: 20,
        alignSelf: 'flex-end',
        paddingHorizontal: 14,
        paddingVertical: 3,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    colorTheme: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 25,
        marginLeft: 10,
    },
    box: {
        height: 14,
        width: 14,
    },
    boxText: {
        color: 'black',
        paddingLeft: 2,
        paddingRight: 14,
    },
    calendarContainer: {
        flex: 1,
    },
    calendar: {
    }
})

export default CalendarTab;