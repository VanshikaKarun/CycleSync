import {Text, View} from 'react-native';
import BackButton from './BackButton';
import Logo from './Logo';

function InfoHeader(): React.JSX.Element {
    return(
        <View>
            <View>
                <BackButton/>
            </View>
            <View style={{position:'absolute', top:10, right:30}}>
                <Logo fontSize={28}/>
            </View>
        </View>
    )
}

export default InfoHeader;