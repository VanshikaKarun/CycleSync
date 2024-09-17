import {useState} from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import AMLLoading from '../components/AMLLoading';
import InfoHeader from '../components/InfoHeader';

function ReproductiveDisorder() : React.JSX.Element{
    const anyDisorder = [
        "I don't know",
        "Yes",
        "No",
        "No, but I used to"
    ];

    const [selectedOption, setSelectedOption] = useState();

    return(
        <View style={{flexDirection: 'column'}}>
            <InfoHeader/>
            <AMLLoading currentpage={6}/>
            <View style={styles.content}>
                <Text style={[styles.title, {marginBottom: 40}]}>Do you have any Reproductive Health Disorder?</Text>
                <View>
                    {anyDisorder.map((option, index)=>(
                        <TouchableOpacity
                            key = {index}
                            style = {styles.listButton}
                            onPress={()=>console.log(option)}>
                                <Text style={styles.listText}>{option}</Text>
                            </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.alignButton}>
            <TouchableOpacity style={styles.customButton}>
                <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    content: {
        top: 150,
        margin: 20,
        padding: 15,
    },
    title: {
        color: 'black', 
        fontSize: 24, 
        fontFamily: 'Scada'
    },
    listButton: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'pink',
        marginRight: 10,
        marginBottom: 10,
    },
    listText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
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
    },
})

export default ReproductiveDisorder;