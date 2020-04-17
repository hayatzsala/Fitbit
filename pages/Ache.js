import 'react-native-gesture-handler';
import React, { Component} from 'react';
import {StyleSheet,ScrollView,View,Text,AppRegistry,Button,Image,TouchableOpacity,}from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../pages/styles.js';

import SettingsList from 'react-native-settings-list';
const Stack = createStackNavigator();
class Ache extends Component{
	render() {
  return (
    
   
      
 <View style={styles.AcheStyle}>
  <View style={{marginTop:50,}}>

     
         <TouchableOpacity style={styles.buttonStyle}>
        <Image source={require('../steps.png')} style={{width:60,height:60}} /> 
        <Text style={styles.labelText}> Steps </Text>
       </TouchableOpacity>
    


        <TouchableOpacity style={styles.buttonStyle}>
        <Image source={require('../sleep.png')} style={{width:60,height:60}} /> 
        <Text style={styles.labelText}> Sleep </Text>
       </TouchableOpacity>
      
      
        <TouchableOpacity style={styles.buttonStyle}>
        <Image source={require('../map.png')} style={{width:60,height:60}} /> 
        <Text style={styles.labelText}> Tracks </Text>
       </TouchableOpacity>
        
        
       
         <TouchableOpacity style={styles.buttonStyle}>
        <Image source={require('../water.png')} style={{width:40,height:40}} /> 
        <Text style={styles.labelText}>   Water </Text>
       </TouchableOpacity>
        

       
         <TouchableOpacity style={styles.buttonStyle}>
        <Image source={require('../food.jpg')} style={{width:60,height:60}} /> 
        <Text style={styles.labelText}> Calories </Text>
       </TouchableOpacity>
        
        

   </View>
  </View>

  
  );
}
}

 
export default Ache;