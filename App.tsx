/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {NavigationContainer, RouteProp} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Start from './pages/Start';
import Login from './pages/Login';
import StartPage from './pages/StartPage';
import BasicInfo from './pages/BasicInfo';
import AvgPeriodLen from './pages/AvgPeriodLen';
import AvgCycleLen from './pages/AvgCycleLen';
import PeriodStartDate from './pages/PeriodStartDate';
import ListDiscomfort from './pages/ListDiscomfort';
import ReproductiveDisorder from './pages/ReproductiveDisorder';
import MainTabs from './components/TabNavigator';
import ActivitiesTab from './pages/ActivitiesTab';
import CalendarTab from './pages/CalendarTab';
import SettingsTab from './pages/SettingsTab';

export type RootStackParameterList = {
  Start: undefined;
  Login: undefined;
  StartPage: {userid: string};
  BasicInfo: undefined;
  AvgPeriodLen: undefined;
  AvgCycleLen: undefined;
  PeriodStartDate: undefined;
  ListDiscomfort: undefined;
  ReproductiveDisorder: undefined;
  ActivitiesTab: undefined;
  Tabs: {userId: number};
};

// Data coming will be of this type
const Stack = createNativeStackNavigator<RootStackParameterList>()

function App(): React.JSX.Element {

  const [selectedTab, setSelectedTab] = useState('Activities');
  
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Start'>
          <Stack.Screen
          name='Start' component={Start}
          options={{headerShown: false}}/>
          <Stack.Screen
          name='StartPage' component={StartPage}
          options={{headerShown: false}}/>
          <Stack.Screen
          name='Login' component={Login}
          options={{headerShown: false}}/>
          <Stack.Screen
          name='BasicInfo' component={BasicInfo}
          options={{headerShown: false}}/>
          <Stack.Screen
          name='AvgPeriodLen' component={AvgPeriodLen}
          options={{headerShown: false}}/>
          <Stack.Screen
          name='AvgCycleLen' component={AvgCycleLen}
          options={{headerShown: false}}/>
          <Stack.Screen
          name='PeriodStartDate' component={PeriodStartDate}
          options={{headerShown: false}}/>
          <Stack.Screen
          name='ListDiscomfort' component={ListDiscomfort}
          options={{headerShown: false}}/>
          <Stack.Screen
          name='ReproductiveDisorder' component={ReproductiveDisorder}
          options={{headerShown: false}}/>
          <Stack.Screen 
          name='Tabs' 
          options={{ headerShown: false }}
          children={({route}:{route: RouteProp<RootStackParameterList, 'Tabs'>}) => {
            const {userId} = route.params;
            return <MainTabs selectedTab={selectedTab} onTabChange={handleTabChange} userId={userId}/>
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
