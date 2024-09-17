import {View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import AMLLoading from '../components/AMLLoading';
import InfoHeader from '../components/InfoHeader';

function AvgCycleLen(): React.JSX.Element{
    return(
        <View>
            <InfoHeader/>
            <AMLLoading currentpage={3}/>
            <View style={styles.content}>
                <Text style={styles.title}>Your Average Cycle Length?</Text>
                <Text style={styles.info}>If you are unsure of your cycle length or if it is irregular, then tap on "Not Sure" Button</Text>
                <View style={{marginTop: 54, marginBottom:50, top:'40%'}}>
                    <TextInput style={styles.input} placeholder='Number of Days'  placeholderTextColor="rgba(0,0,0,0.4)"/>
                </View>
            </View>
            <View style={styles.alignButton}>
                <TouchableOpacity style={[styles.customButton, {backgroundColor: '#FF59A9'}]}>
                    <Text style={styles.buttonText}>NOT SURE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        top: 150,
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
    info: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Playfair Display',
        textAlign: 'justify',
        marginTop: 15,
        lineHeight: 26,
    },
    title: {
        color: 'black', 
        fontSize: 24, 
        fontFamily: 'Seogoe UI'
    },
    customButton: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 48,
        width:145,
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
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default AvgCycleLen;