import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Logo from '../components/Logo';

import Icons from 'react-native-vector-icons/FontAwesome';
import Icons2 from 'react-native-vector-icons/Entypo';
import Icons3 from 'react-native-vector-icons/FontAwesome5';

import {NativeStackScreenProps, NativeStackNavigationProp} from "@react-navigation/native-stack"
import {RootStackParameterList} from '../App'

type StartPageProps = NativeStackScreenProps<RootStackParameterList, 'StartPage'>

function StartPage({route, navigation}: StartPageProps): React.JSX.Element{
    const {userid} = route.params;
    return(
        <View>
            <TouchableOpacity style={{ position: 'absolute', top: 15, right: 20}}
            onPress={() => navigation.goBack()}>
                <Icons2 name="cross" size={30}/>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={{color: 'black', fontSize: 34, padding: 6, fontFamily: 'Scada'}}>Restore your data with</Text>
                <Logo fontSize={45}/>
            </View>
            <View style={styles.login}>
                <TouchableOpacity style={styles.button} activeOpacity={0.6}
                onPress={() => navigation.push('Login')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.6}
                onPress={() => navigation.push('BasicInfo')}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 390,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    login: {
        marginTop: 50,
        paddingLeft: 40,
        paddingRight: 40,
        alignContent: 'center'
    },
    button: {
        margin: 8,
        backgroundColor: '#FFA7D1',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 50,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default StartPage;