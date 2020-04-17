import 'react-native-gesture-handler';
import React, { Component,useEffect } from 'react';
import {StyleSheet,ScrollView,View,Text,AppRegistry,Button,Platform,TouchableOpacity,}from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';
import Forget from './pages/Forget';
import Request from './pages/ReqPass';
import Setting from './pages/Setting';
import Units from './pages/Units';
import Noti from './pages/Noti';
import About from './pages/About';
import Ache  from './pages/Ache';
import Profile  from './pages/Profile';
import Home  from './pages/Home';
export default class ReactNativeCommonScreens extends Component {
 
  render() {
   
    return (
      <Login/>
    );
  }
 
}
 
AppRegistry.registerComponent('ReactNativeCommonScreens', () => ReactNativeCommonScreens);
