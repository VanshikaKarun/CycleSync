import {Text, View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import CircularCalendar from '../components/CircularCalendar';

import data from '../assets/backend/data.json';

interface ActivitiesTabProps {
    userId: number;
}

function checkMenstrualHealth(user:any){
    const periodLen = user?.periodCycle[user.periodCycle.length - 1].periodLen;
    const cycleLen = user?.periodCycle[user.periodCycle.length - 1].cycleLen;
    const periodStatus = periodLen > 7 ? "Irregular" : "Normal";
    const cycleStatus = cycleLen > 30 ? "Irregular" : "Normal";
    let gynec = "Eat Healthy, Stay Positive";
    if(periodStatus==="Irregular" || cycleStatus==="Irregular"){
        gynec = "May consult gynecologist";
    }
    return [periodStatus, cycleStatus, gynec];
}

function ActivitiesTab({userId}:ActivitiesTabProps): React.JSX.Element{
    const user = data.users.find((user) => user.id === userId);
    const periodLen = user?.periodCycle[user.periodCycle.length - 1].periodLen;
    const cycleLen = user?.periodCycle[user.periodCycle.length - 1].cycleLen;
    const [periodStatus, cycleStatus, gynec] = checkMenstrualHealth(user);
    return(
        <View style={{flexDirection: 'column'}}>
            <View style={styles.header}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity style={styles.profile}>
                    </TouchableOpacity> 
                    <View style={{flexDirection:'column', margin: 10}}>
                        <Text>Welcome</Text>
                        <Text style={{color:'#FF59A9', fontWeight: 'bold'}}>{user?.name}</Text>
                    </View>
                </View>
                <Logo fontSize={28}/>
            </View>
            <View style={styles.contentHeight}>
            <ScrollView style={styles.scrollContent}>
                <CircularCalendar userId={user?.id}/>
                <TouchableOpacity style={styles.logPeriods}>
                    <Text style={{color:'white', fontSize:17}}>Log Period</Text>
                </TouchableOpacity>
                <View style={styles.myCycleContainer}>
                    <Text style={{color:'black', fontSize: 18, fontWeight: 'bold'}}>My Cycle</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.cycleLenContainer}>
                            <Text style={{color:'#FF6B18', fontSize:15}}>{cycleStatus}</Text>
                            <Text style={{color: 'black'}}>{cycleLen} Days</Text>
                            <Text style={{color: 'black', fontSize: 12}}>Cycle Length</Text>
                        </View>
                        <View style={styles.periodLenContainer}>
                            <Text style={{color:'#1DB623', fontSize:15}}>{periodStatus}</Text>
                            <Text style={{color: 'black'}}>{periodLen} Days</Text>
                            <Text style={{color: 'black', fontSize: 12}}>Period Length</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 14}}>
                <Text style={{color: 'black', fontSize: 15, textAlign: 'center'}}>{gynec}</Text>
                </View>
                <TouchableOpacity style={[styles.rating, {backgroundColor: '#FF59A9', marginTop: 50}]}>
                    <Text style={{color: 'white', fontSize: 16}}>Rate Us Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.rating, {borderColor: '#E83B8E', borderWidth: 2}]}>
                    <Text style={{color: '#E83B8E', fontSize: 16}}>Feedback</Text>
                </TouchableOpacity>
                <View style={styles.extraSpace}/>
            </ScrollView>
            </View>
            <Footer selectedTab='Activites' onTabPress={(tab) => {
                console.log('Tab pressed: ', tab);
            }}/>
        </View>
    );
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
    profile: {
        height: 60,
        width: 60,
        borderRadius: 35,
        backgroundColor: 'grey'
    },
    contentHeight: {
        height: '89%',
    },
    scrollContent: {
        padding: 20,
    },
    calendarTrack: {
        marginTop: 10,
        height: 300,
        width: 300,
        alignSelf: 'center',
        backgroundColor: 'pink',
        borderRadius: 150
    },
    logPeriods: {
        marginTop: 45,
        backgroundColor: '#FF59A9',
        height: 35,
        width: 140,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    myCycleContainer: {
        marginTop: 30,
        borderWidth: 2,
        paddingTop: 8,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 12,
        borderColor: '#FFA1CE',
        borderRadius: 10,
    },
    cycleLenContainer: {
        height: 65,
        width: 150,
        borderWidth: 2,
        borderColor: '#FA955D',
        borderRadius: 5,
        backgroundColor: '#FFD6BF',
        justifyContent: 'center',
        padding: 10,
        marginTop: 20,
    },
    periodLenContainer: {
        height: 65,
        width: 150,
        borderWidth: 2,
        borderColor: '#30C359',
        borderRadius: 5,
        backgroundColor: '#B3FFC8',
        justifyContent: 'center',
        padding: 10,
        marginTop: 20,
    },
    rating: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 25,
        width: 240,
        height: 35,
        borderRadius: 50
    },
})

export default ActivitiesTab;