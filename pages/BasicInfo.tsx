import {Text, 
    View, 
    Button, 
    TextInput, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import React, {useState} from 'react';

import AMLLoading from '../components/AMLLoading';
import InfoHeader from '../components/InfoHeader';

import {NativeStackScreenProps, NativeStackNavigationProp} from "@react-navigation/native-stack"
import {RootStackParameterList} from '../App'
import {useNavigation} from '@react-navigation/native'
import Icons from 'react-native-vector-icons/Ionicons'

type BasicInfoProps = NativeStackScreenProps<RootStackParameterList, 'BasicInfo'>

function BasicInfo({navigation} : BasicInfoProps): React.JSX.Element{

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [dob, setDob] = useState('');
    const [focusedField, setFocusedField] = useState('');

    const isAllFieldsFilled = name && mail && password && rePassword && dob;

    const handleFocus = (field: string) => {
        setFocusedField(field);
    };

    const handleBlur = () => {
        setFocusedField('');
    };

    return(
        <View >
            <InfoHeader/>
            <AMLLoading currentpage={1}/>
            <View style={[styles.content, {flexDirection: 'column'}]}>
                <Text style={styles.title}>Help us get to know you better</Text>
                <View style={{marginTop: 54, marginBottom:50}}>
                    <TextInput style={styles.input} placeholder='Name'  placeholderTextColor="rgba(0,0,0,0.4)"/>
                    <TextInput style={styles.input} placeholder='Mail ID' placeholderTextColor="rgba(0,0,0,0.4)"/>
                    <TextInput style={styles.input} placeholder='Password' placeholderTextColor="rgba(0,0,0,0.4)"/>
                    <TextInput style={styles.input} placeholder='Re-enter Password' placeholderTextColor="rgba(0,0,0,0.4)"/>
                    <TextInput style={styles.input} placeholder='Date of Birth' placeholderTextColor="rgba(0,0,0,0.4)"/>
                </View>
            </View>
            <View style={styles.alignButton}>
            <TouchableOpacity style={styles.customButton}
            onPress={() => navigation.push('AvgPeriodLen')}>
                <Text style={styles.buttonText}>NEXT</Text>
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
});

export default BasicInfo;