import {useState} from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import AMLLoading from '../components/AMLLoading';
import InfoHeader from '../components/InfoHeader';

function ListDiscomfort(): React.JSX.Element{
    const discomforts = [
        'Painful Menstrual Cramps',
        'PMS Symptoms',
        'Unusual Discharge',
        'Heavy Menstrual Flow',
        'Mood Swings',
        'Others',
        "Nothing, I'm totally fine"
    ];

    const [selectedDiscomfort, setSelectedDiscomfort] = useState<string[]>([]);

    const handlePress = (discomfort:string) => {
        // Remove the option if its already selected (deselect)
        if(selectedDiscomfort.includes(discomfort)){
            setSelectedDiscomfort(selectedDiscomfort.filter(option => option !== discomfort));
        }
        else{
            setSelectedDiscomfort([...selectedDiscomfort, discomfort]);
        }
    };

    return(
        <View>
            <InfoHeader/>
            <AMLLoading currentpage={5}/>
            <View style={styles.content}>
                <Text style={[styles.title, {marginBottom: 50}]}>Do you feel any Discomfort?</Text>
                <View style={styles.listContainer}>
                    {discomforts.map((discomfort, index)=>(
                        <TouchableOpacity
                            key={index}
                            style={styles.listButton}
                            onPress={()=>console.log(discomfort)}>
                            <Text style={styles.listText}>{discomfort}</Text>
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
    );
}

const styles = StyleSheet.create({
    content: {
        position: 'absolute',
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
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: 'center',
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
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
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
});

export default ListDiscomfort; 