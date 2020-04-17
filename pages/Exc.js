import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View,AppRegistry}from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Weight from '../Excercises/Weight';
import Running from '../Excercises/Running';
import Build from '../Excercises/BuildM';
import Balance from '../Excercises/Balance';
import Yoga from '../Excercises/Yoga';
import Together from '../Excercises/Together';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Noti"
      tabBarOptions={{
        activeTintColor: '#003333',
        labelStyle: { fontSize: 14 },
        pressColor:'#003333',
        scrollEnabled:true,
        style: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen
        name="Weight"
        component={Weight}
        options={{ tabBarLabel: 'Weight Loss' }}
      />
      <Tab.Screen
        name="Running"
        component={Running}
        options={{ tabBarLabel: 'Running' }}
      />
     <Tab.Screen
        name="Build"
        component={Build}
        options={{ tabBarLabel: 'Build Muscels' }}
      />
      <Tab.Screen
        name="Balance"
        component={Balance}
        options={{ tabBarLabel: 'Balance Training' }}
      />
      <Tab.Screen
        name="Yoga"
        component={Yoga}
        options={{ tabBarLabel: 'Yoga' }}
      />
      <Tab.Screen
        name="Together"
        component={Together}
        options={{ tabBarLabel: 'Together' }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;