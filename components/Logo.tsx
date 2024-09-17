import {Text, View, StyleSheet} from 'react-native';
import { fontFamily } from '../customFont';

type LogoProps = {
    fontSize?: number;
}

function Logo({fontSize=24}: LogoProps): React.JSX.Element {
    return (
        <View>
            <Text style={[styles.logoText, {fontSize}]}>CycleSync</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoText: {
        fontFamily: fontFamily.StyleScriptRegular,
        color: '#000',
    }
});

export default Logo;