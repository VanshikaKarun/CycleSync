import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons3 from 'react-native-vector-icons/AntDesign'

interface FooterProps {
    selectedTab: string;
    onTabPress: (tab: string) => void;
}

function Footer({selectedTab, onTabPress}: FooterProps): React.JSX.Element{
    return(
        <View style={styles.footer}>
            <TouchableOpacity 
            style={[styles.footerTab,
                selectedTab === 'Activities' && styles.activeTab,
            ]} 
            onPress={() => onTabPress('Activities')}>
                <Icons2 name="clock-outline" size={20} style={selectedTab === 'Activities' ? styles.activeText : styles.inactiveText}/>
                <Text style={selectedTab === 'Activities' ? styles.activeText : styles.inactiveText}>
                    Activites
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[styles.footerTab,
                selectedTab === 'Calendar' && styles.activeTab,
            ]} 
            onPress={() => onTabPress('Calendar')}>
                <Icons2 name="calendar-blank-outline" size={18} style={selectedTab === 'Calendar' ? styles.activeText : styles.inactiveText}/>
                <Text style={selectedTab === 'Calendar' ? styles.activeText : styles.inactiveText}>
                    Calendar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[styles.footerTab,
                selectedTab === 'Reports' && styles.activeTab,
            ]} 
            onPress={() => onTabPress('Reports')}> 
            <Icons3 name="file1" size={18} style={selectedTab === 'Reports' ? styles.activeText : styles.inactiveText}/>
                <Text style={selectedTab === 'Reports' ? styles.activeText : styles.inactiveText}>
                    Reports
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[styles.footerTab,
                selectedTab === 'Settings' && styles.activeTab,
            ]} 
            onPress={() => onTabPress('Settings')}>
                <Icons name="settings-outline" size={20} style={selectedTab === 'Settings' ? styles.activeText : styles.inactiveText}/>
                <Text style={selectedTab === 'Settings' ? styles.activeText : styles.inactiveText}>
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