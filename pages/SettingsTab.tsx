import {Text, View, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Switch} from 'react-native';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Icons from 'react-native-vector-icons/Ionicons';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons3 from 'react-native-vector-icons/Feather';
import React, { useState } from 'react';

function SettingsTab() : React.JSX.Element{
    const [isAppLockEnable, setIsAppLockEnable] = useState(false);

    const toggleAppLock = () => {
        setIsAppLockEnable(previousState => !previousState);
        console.log(`App Lock ${!isAppLockEnable}`);
    };

    const [isDailyNotificationEnable, setIsDailyNotificationEnable] = useState(false);

    const toggleDailyNotification = () => {
        setIsDailyNotificationEnable(previousState => !previousState);
        console.log(`Daily Notification ${!isDailyNotificationEnable}`);
    };

    const [isPeriodRemEnable, setIsPeriodRemEnable] = useState(true);

    const togglePeriodRem = () => {
        setIsPeriodRemEnable(previousState => !previousState);
        console.log(`Period Reminder ${!isPeriodRemEnable}`);
    };

    const [isFertilityRemEnable, setIsFertilityRemEnable] = useState(true);

    const toggleFertilityRem = () => {
        setIsFertilityRemEnable(previousState => !previousState);
        console.log(`Fertility Day Reminder ${!isFertilityRemEnable}`);
    };

    return(
        <View>
            <View style={styles.header}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icons name="settings-outline" size={30} color={'#FF007F'}/>
                    <View style={{flexDirection:'column', margin: 10}}>
                        <Text style={{color: 'black', fontSize: 18}}>Settings</Text>
                    </View>
                </View>
                <Logo fontSize={28}/>
            </View>
            <View style={styles.content}>
                <View style={styles.profileDetails}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.profile}/>
                    <View style={{flexDirection: 'column', marginLeft: 10}}>
                        <Text style={{fontSize: 18}}>Vanshika Karun</Text>
                        <Text style={{fontSize: 13}}>Edit Personal Details</Text>
                    </View>
                    </View>
                    <Icons name="chevron-forward-outline" size={20} color={'black'}/>
                </View>
                <TouchableOpacity style={[styles.tabs, {marginTop: 60}]}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icons2 name='calendar-edit' size={18} style={{height: 20, width: 24, paddingLeft: 5}} color={'#E83B8E'}/>
                            <Text style={styles.actions}>Edit Period Dates</Text>
                        </View>
                        <Icons name='chevron-forward-outline' size={18} style={{paddingRight: 5, }} color={'#E83B8E'}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.section}>
                    <Text style={styles.heading}>Privacy</Text>
                    <TouchableOpacity style={styles.tabs}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icons3 name='lock' size={18} style={{height: 20, width: 24, paddingLeft: 5}} color={'#E83B8E'}/>
                                <Text style={styles.actions}>App Lock</Text>
                            </View>
                            <Switch
                                value={isAppLockEnable}
                                onValueChange={toggleAppLock}
                                thumbColor={isAppLockEnable ? '#E83B8E' : '#f4f3f4'}
                                trackColor={{ false: '#767577', true: '#FFA1CE' }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.section}>
                    <Text style={styles.heading}>Notification</Text>
                    <TouchableOpacity style={styles.tabs}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icons name='notifications-outline' size={18} style={{height: 20, width: 24, paddingLeft: 5}} color={'#E83B8E'}/>
                                <Text style={styles.actions}>Daily Notification</Text>
                            </View>
                            <Switch
                                value={isDailyNotificationEnable}
                                onValueChange={toggleDailyNotification}
                                thumbColor={isDailyNotificationEnable ? '#E83B8E' : '#f4f3f4'}
                                trackColor={{ false: '#767577', true: '#FFA1CE' }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icons3 name='droplet' size={18} style={{height: 20, width: 24, paddingLeft: 5}} color={'#E83B8E'}/>
                                <Text style={styles.actions}>Periods Reminder</Text>
                            </View>
                            <Switch
                                value={isPeriodRemEnable}
                                onValueChange={togglePeriodRem}
                                thumbColor={isPeriodRemEnable ? '#E83B8E' : '#f4f3f4'}
                                trackColor={{ false: '#767577', true: '#FFA1CE' }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icons name='flower-outline' size={18} style={{height: 20, width: 24, paddingLeft: 5}} color={'#C355DC'}/>
                                <Text style={styles.actions}>Fertility Days Reminder</Text>
                            </View>
                            <Switch
                                value={isFertilityRemEnable}
                                onValueChange={toggleFertilityRem}
                                thumbColor={isFertilityRemEnable ? '#E83B8E' : '#f4f3f4'}
                                trackColor={{ false: '#767577', true: '#FFA1CE' }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer selectedTab='Settings' onTabPress={(tab) => {
                console.log('Tab pressed: ', tab);
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content: {
        height: '89%',
        padding: 20,
    },
    profile: {
        height: 50,
        width: 50,
        borderRadius: 30,
        backgroundColor: 'grey',
    },
    profileDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    section: {
        marginTop: 35,
    },
    heading: {
        fontSize: 18,
        color: 'black',
        marginBottom: 8
    },
    actions: {
        fontSize: 15, 
        color: 'black',
        paddingLeft: 8,
    },
    tabs: {
        backgroundColor: '#EAEAEA',
        marginBottom: 3,
        height: 26,
        justifyContent: 'center'
    }
})

export default SettingsTab;