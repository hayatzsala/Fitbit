import 'react-native-gesture-handler';
import React, { Component} from 'react';
import {StyleSheet,ScrollView,View,Text,AppRegistry,Button,Platform}from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import styles from '../pages/styles.js';
//import { faUser , faRuler ,faBell,faLeaf , faLock , faEraser , faInfo , faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import SettingsList from 'react-native-settings-list';
const Stack = createStackNavigator();
class Units extends Component{
	render() {
  return (
    
    <View style={{backgroundColor:'#f6f6fd',flex:1}}>
      
      <View style={{backgroundColor:'#f6f6fd',flex:1}}>
        <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
         <SettingsList.Header headerText='' headerStyle={{color:'#33cc66',fontSize:18,}}/>
          <SettingsList.Item 
            hasNavArrow={false}
           title='Metric'
            titleInfo='eg : cm , Km , Kg , m'
            hasSwitch={true}
            
            
          />
          <SettingsList.Item
             hasNavArrow={false}
            title='Imperial'
            titleInfo='eg : ft , in , lb , mi'
            hasSwitch={true}
          />
          
        </SettingsList>
      </View>
    </View>
  );
}
}

 
export default Units;