import React, { useState } from 'react';

import {
    Text, 
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';

import InfoHeader from '../components/InfoHeader';

import {NativeStackScreenProps, NativeStackNavigationProp} from "@react-navigation/native-stack"
import {RootStackParameterList} from '../App'
import cred from '../assets/backend/cred.json'
import data from '../assets/backend/data.json'

type LoginProps = NativeStackScreenProps<RootStackParameterList, 'Login'>

function Login({navigation}: LoginProps) : React.JSX.Element{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(!email.trim()){
            Alert.alert('Error', 'Email cannot be empty.');
            return;
        }
        if (!password) {
            Alert.alert('Error', 'Password cannot be empty.');
            return;
        }
        const user = cred.find(user => user.email === email);
        if(!user){
            Alert.alert('Error', 'Email does not exist. Please Sign Up.');
        } else if(user.password !== password){
            Alert.alert('Error', 'Wrong Password');
        } else {
            const userData = data.users.find(u => u.email === email);
            if(!userData){
                Alert.alert('Error', 'User data not found');
                return;
            }
            navigation.push('Tabs', {userId: userData.id});
        }
    }

    return(
        <View>
            <InfoHeader/>
            <View style={[styles.content, {flexDirection: 'column'}]}>
                <Text style={styles.title}>Login</Text>
                <View style={{marginTop: 54, marginBottom:50}}>
                    <TextInput style={styles.input} placeholder='Mail ID'  placeholderTextColor="rgba(0,0,0,0.4)"
                    value={email}
                    onChangeText={setEmail}/>
                    <TextInput style={styles.input} placeholder='Password' placeholderTextColor="rgba(0,0,0,0.4)"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}/>
                </View>
            </View>
            <View style={styles.alignButton}>
            <TouchableOpacity style={styles.customButton}
            onPress={handleLogin}>
                <Text style={styles.buttonText}>LogIn</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        top: 50,
        margin: 20,
        padding: 15,
    },
    input: {
        height: 52,
        paddingHorizontal: 15,
        marginBottom: 28,
        fontSize:18,
        borderRadius:6,
        backgroundColor: '#F4CDE0',
    },
    title: {
        color: 'black', 
        fontSize: 24, 
        fontFamily: 'Scada'
    },
    customButton: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 48,
        width:240,
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

export default Login;