/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Start from './pages/Start';
import StartPage from './pages/StartPage';
import Logo from './components/Logo';
import BasicInfo from './pages/BasicInfo';
import ListDiscomfort from './pages/ListDiscomfort';
import AvgPeriodLen from './pages/AvgPeriodLen';
import AvgCycleLen from './pages/AvgCycleLen';
import PeriodStartDate from './pages/PeriodStartDate';
import ReproductiveDisorder from './pages/ReproductiveDisorder';
import ActivitiesPage from './pages/ActivitiesPage';

function App(): React.JSX.Element {
  return (
    <View>
      {/* <Start/> */}
      {/* <StartPage/> */}
      {/* <BasicInfo/> */}
      {/* <AvgPeriodLen/> */}
      {/* <AvgCycleLen/> */}
      {/* <PeriodStartDate/> */}
      {/* <ListDiscomfort/> */}
      {/* <ReproductiveDisorder/> */}
      <ActivitiesPage/>
    </View>
  );
}

export default App;
