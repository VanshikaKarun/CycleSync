import {Text, View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

function ReportTab() : React.JSX.Element{
    return(
        <View>
            <View style={styles.header}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={{flexDirection:'column', margin: 10}}>
                        <Text style={{color: 'black', fontSize: 18}}>Report</Text>
                    </View>
                </View>
                <Logo fontSize={28}/>
            </View>
            <View style={styles.contentHeight}>
            <ScrollView style={styles.scrollContent}>
            </ScrollView>
            </View>
            <Footer selectedTab='Reports' onTabPress={(tab) => {
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


export default ReportTab;