import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
//import MainTabNavigator from './navigation/MainTabNavigator';
import { HomeScreen, PremiumScreen, Search, Detail } from './screens';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();


const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

function PremiumStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Premium" component={PremiumScreen} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Premium" component={PremiumScreen} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


