import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function BackButton(): React.JSX.Element{
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Icon name="close" size={30} color="black"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 10,
        left: 30,
    }
})

export default BackButton;