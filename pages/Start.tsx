import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Logo from '../components/Logo';

function Start() : React.JSX.Element{
    return(
        <View>
            <View style={styles.box}>
                <Logo fontSize={70}/>
            </View>
            <View>
                <TouchableOpacity style={styles.nextArrow}>
                    <Text style={styles.arrow}>→</Text>
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
      color: 'white',
      fontWeight: 'bold',
      fontSize: 100,
      left: -50,
      top: -15
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
  