import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons3 from 'react-native-vector-icons/AntDesign'

interface FooterProps {
    selectedTab: string;
    onTabPress: (tab: string) => void;
}

function Footer({selectedTab, onTabPress}: FooterProps): React.JSX.Element{
    const getTabStyle = (tab: string) => ({
        icon: selectedTab === tab ? styles.activeText : styles.inactiveText,
        text: selectedTab === tab ? styles.activeText : styles.inactiveText
    });

    return(
        <View style={styles.footer}>
            <TouchableOpacity 
            key="Activities"
            style={[styles.footerTab,
                selectedTab === 'Activities' && styles.activeTab,
            ]} 
            onPress={() => onTabPress('Activities')}>
                <Icons2 name="clock-outline" size={20} style={getTabStyle('Activities').icon}/>
                <Text style={getTabStyle('Activities').text}>
                    Activites
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            key="Calendar"
            style={[styles.footerTab,
                selectedTab === 'Calendar' && styles.activeTab,
            ]} 
            onPress={() => onTabPress('Calendar')}>
                <Icons2 name="calendar-blank-outline" size={18} style={getTabStyle('Calendar').icon}/>
                <Text style={getTabStyle('Calendar').text}>
                    Calendar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            key="Reports"
            style={[styles.footerTab,
                selectedTab === 'Reports' && styles.activeTab,
            ]} 
            onPress={() => onTabPress('Reports')}> 
            <Icons3 name="file1" size={18} style={getTabStyle('Reports').icon}/>
                <Text style={getTabStyle('Reports').text}>
                    Reports
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            key="Settings"
            style={[styles.footerTab,
                selectedTab === 'Settings' && styles.activeTab,
            ]} 
            onPress={() => onTabPress('Settings')}>
                <Icons name="settings-outline" size={20} style={getTabStyle('Settings').icon}/>
                <Text style={getTabStyle('Settings').text}>
                    Settings
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        borderColor: '#ccc',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: 'white',
    },
    footerTab: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },
    activeTab: {
        borderBottomColor: '#FF007F', 
        borderBottomWidth: 5,
    },
    activeText: {
        color: '#FF007F', 
        fontWeight: 'bold',
    },
    inactiveText: {
        color: '#000',
    }
})

export default Footer;