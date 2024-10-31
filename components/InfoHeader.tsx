import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Logo from './Logo';
import Icons4 from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native'

function InfoHeader(): React.JSX.Element {
    const navigation = useNavigation();
    return(
        <View style={styles.header}>
            <View>
            <TouchableOpacity
            onPress={() => navigation.goBack()}>
                <Icons4 name="arrow-back-circle-outline" size={30} color={"black"}/>
            </TouchableOpacity>
            </View>
            <View>
            <Logo fontSize={28}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems:'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 80,
    }
})

export default InfoHeader;