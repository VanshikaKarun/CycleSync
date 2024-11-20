import React, { useState, useEffect } from 'react';
import ActivitiesTab from '../pages/ActivitiesTab';
import CalendarTab from '../pages/CalendarTab';
import ReportTab from '../pages/ReportTab';
import SettingsTab from '../pages/SettingsTab';
import {View} from 'react-native';
import Footer from './Footer';

interface MainTabsProps {
    selectedTab: string;
    onTabChange: (tab: string) => void;
    userId: number;
  }
  
const MainTabs = ({ selectedTab, onTabChange, userId }: MainTabsProps) => {

    useEffect(() => {
        if(!selectedTab){
            onTabChange('Activities');
        }
    }, [selectedTab]);
  
    const renderContent = () => {
      switch (selectedTab) {
        case 'Calendar':
          return <CalendarTab />;
        case 'Reports':
          return <ReportTab />;
        case 'Settings':
          return <SettingsTab />;
        default:
          return <ActivitiesTab userId={userId}/>;
      }
    };
  
    return (
      <View style={{ flex: 1 }}>
        {renderContent()} 
        <Footer selectedTab={selectedTab} onTabPress={onTabChange} /> 
      </View>
    );
};

export default MainTabs;