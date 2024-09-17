import {Text, View, StyleSheet} from 'react-native';

type AMLLoadingProps = {
    currentpage? : number;
};

function AMLLoading({currentpage = 0} : AMLLoadingProps): React.JSX.Element{
    return(
        <View style={styles.circleContainer}>
            <View style={[styles.circle, currentpage>=1 ? styles.filledCircle:styles.defaultCircle]} />
            <View style={[styles.circle, currentpage>=2 ? styles.filledCircle:styles.defaultCircle]} />
            <View style={[styles.circle, currentpage>=3 ? styles.filledCircle:styles.defaultCircle]} />
            <View style={[styles.circle, currentpage>=4 ? styles.filledCircle:styles.defaultCircle]} />
            <View style={[styles.circle, currentpage>=5 ? styles.filledCircle:styles.defaultCircle]} />
            <View style={[styles.circle, currentpage>=6 ? styles.filledCircle:styles.defaultCircle]} />
        </View>
    )
}

const styles = StyleSheet.create({
    circleContainer: {
        position: 'absolute',
        right: '50%',
        left: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    circle: {
        height: 18,
        width: 18,
        borderRadius: 25
    },
    filledCircle: {
        backgroundColor: '#FF59A9'
    },
    defaultCircle: {
        backgroundColor: '#F4CDE0',
    }
})

export default AMLLoading;