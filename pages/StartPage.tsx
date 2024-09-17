import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Logo from '../components/Logo';
import Icon from 'react-native-vector-icons/MaterialIcons';

function StartPage(): React.JSX.Element{
    return(
        <View>
            <TouchableOpacity style={{ position: 'absolute', top: 10, right: 30}}>
                <Icon name="close" size={30} color="black"/>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={{color: 'black', fontSize: 34, padding: 6, fontFamily: 'Scada'}}>Restore your data with</Text>
                <Logo fontSize={45}/>
            </View>
            <View style={styles.login}>
                <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                    <Text style={styles.buttonText}>Login with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.6}>
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