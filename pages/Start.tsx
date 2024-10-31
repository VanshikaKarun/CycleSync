import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Logo from '../components/Logo';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icons2 from 'react-native-vector-icons/Entypo'
import Icons3 from 'react-native-vector-icons/FontAwesome5'

import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParameterList} from '../App'

type StartProps = NativeStackScreenProps<RootStackParameterList, 'Start'>

function Start({navigation} : StartProps) : React.JSX.Element{
    return(
        <View>
            <View style={styles.box}>
                <Logo fontSize={70}/>
            </View>
            <View>
                <TouchableOpacity style={styles.nextArrow}
                onPress={() => navigation.push("StartPage", {userid: "21BPS1196"})}>
                    <Icons3 name="arrow-right" size = {60} color={"white"} style={styles.arrow}/>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Periods Tracker</Text>
                <Text style={styles.content}>Make self care a priority</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    box: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      marginTop: 120,
      marginBottom: 80,
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    nextArrow: {
      backgroundColor: '#FF5DAB',
      width: 300,
      height: 300,
      borderRadius: 150,
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'center',
      right: -130,
    },
    arrow: {
      left: -30,
    },
    title: {
      color: '#E82B8E', 
      fontSize: 27, 
      fontFamily: 'tahoma', 
      padding: 5
    },
    content: {
      color: 'black', 
      fontSize: 20, 
      padding: 5
    }
})
  
export default Start;
  