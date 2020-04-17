
import React, { Component } from 'react';
 
import {
  Image,
  View
} from 'react-native';

 import styles from './styles.js';
//import Button from '../component/Button';
//import Label from '../component/Label';
//import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
  render() {
    return (
       <View style={styles.welcomeStyle}>
         <Image source={require('../logo.png') } style={styles.welcomeLogo} />	
	     </View>
     
    );
  }
}