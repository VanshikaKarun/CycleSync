import {Text, View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Logo from '../components/Logo';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ActivitiesPage(): React.JSX.Element{
    return(
        <View style={{flexDirection: 'column'}}>
            <View style={styles.header}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity style={styles.profile}>
                    </TouchableOpacity>
                    <View style={{flexDirection:'column', margin: 10}}>
                        <Text>Welcome</Text>
                        <Text>Vanshika</Text>
                    </View>
                </View>
                <Logo fontSize={28}/>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <TouchableOpacity style={styles.calendarTrack}></TouchableOpacity>
                <TouchableOpacity style={styles.logPeriods}>
                    <Text style={{color:'white', fontSize:17}}>Log Period</Text>
                </TouchableOpacity>
                <View style={styles.myCycleContainer}>
                    <Text style={{color:'black', fontSize: 18, fontWeight: 'bold'}}>My Cycle</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.cycleLenContainer}>
                            <Text style={{color:'#FF6B18', fontSize:15}}>Normal</Text>
                            <Text style={{color: 'black'}}>28 Days</Text>
                            <Text style={{color: 'black', fontSize: 12}}>Cycle Length</Text>
                        </View>
                        <View style={styles.periodLenContainer}>
                            <Text style={{color:'#1DB623', fontSize:15}}>Normal</Text>
                            <Text style={{color: 'black'}}>3 Days</Text>
                            <Text style={{color: 'black', fontSize: 12}}>Period Length</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.myCycleContainer}>
                    <Text style={{color:'black', fontSize: 18, fontWeight: 'bold'}}>My Cycle</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.cycleLenContainer}>
                            <Text style={{color:'#FF6B18', fontSize:15}}>Normal</Text>
                            <Text style={{color: 'black'}}>28 Days</Text>
                            <Text style={{color: 'black', fontSize: 12}}>Cycle Length</Text>
                        </View>
                        <View style={styles.periodLenContainer}>
                            <Text style={{color:'#1DB623', fontSize:15}}>Normal</Text>
                            <Text style={{color: 'black'}}>3 Days</Text>
                            <Text style={{color: 'black', fontSize: 12}}>Period Length</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={[styles.rating, {backgroundColor: '#FF59A9', marginTop: 50}]}>
                    <Text style={{color: 'white', fontSize: 16}}>Rate Us Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.rating, {borderColor: '#E83B8E', borderWidth: 2}]}>
                    <Text style={{color: '#E83B8E', fontSize: 16}}>Feedback</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerTab}>
                    <Text>Activites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerTab}>
                    <Text>Calendar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerTab}> 
                    <Text>Reports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerTab}>
                    <Text>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 90,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profile: {
        height: 60,
        width: 60,
        borderRadius: 35,
        backgroundColor: 'grey'
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
    scrollContent: {
        margin: 20,
        flexGrow: 1,
    },
    footer: {
        height: 60,
        flexDirection: 'row',
        borderColor: '#ccc',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
        alignItems: 'center',
        // position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    footerTab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default ActivitiesPage;