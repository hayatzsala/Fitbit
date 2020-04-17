import React, { Component} from 'react';
import {StyleSheet,ScrollView,View,Text,AppRegistry,Button,Image}from 'react-native';
import styles from '../pages/styles.js';

class Together extends Component{
	render() {
  return (
    
    
      
      <View style={styles.welcomeStyle}>
                 
        <Text style={{fontSize:16, textAlign:'justify'}}>
          Together page : for training and join challenges with groups around the world . 
        </Text>
       </View>

   
  );
}
}

 
export default Together;