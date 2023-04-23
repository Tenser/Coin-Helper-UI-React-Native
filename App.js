import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
//import MainTabNavigator from './navigation/MainTabNavigator';
import { HomeScreen, PremiumScreen } from './screens';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Premium" component={PremiumScreen} />
      
    </Tab.Navigator>
    </NavigationContainer>
  );
}


