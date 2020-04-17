import 'react-native-gesture-handler';
import React, { Component} from 'react';
import {StyleSheet,ScrollView,View,Text,AppRegistry,Button,Image}from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../pages/styles.js';
//import { faUser , faRuler ,faBell,faLeaf , faLock , faEraser , faInfo , faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import SettingsList from 'react-native-settings-list';
const Stack = createStackNavigator();
class About extends Component{
	render() {
  return (
    
    <View style={{backgroundColor:'#f6f6fd',flex:1}}>
      
      <View style={styles.welcomeStyle}>
         <Image source={require('../logo.png') } style={styles.welcomeLogo} />  
      
       
        <Text style={{fontSize:16, textAlign:'justify'}}>
          FitBit designed by GH Software Commpany. FitBit help you
          to take control about your health , and help you save your 
          time to training where ever you are .
          BE HEALTH , USE FITBIT. 
        </Text>
       </View>

    </View>
  );
}
}

 
export default About;