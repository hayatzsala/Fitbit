
import React, { Component } from 'react';
import {
  Image,
  View,
  Text
} from 'react-native';
 import styles from './styles.js';


export default class Dashboard{
  	render(){
    return (
       <View style={styles.welcomeStyle}>
         <Text>Dashboard screen</Text>
	     </View>
     
    );
 }
}
//export default Dashboard;