import 'react-native-gesture-handler';
import React, { Component,useEffect } from 'react';
import {StyleSheet,ScrollView,View,Text,AppRegistry,Button,Platform}from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../pages/styles.js';
import { faUser , faRuler ,faBell,faLeaf , faLock , faEraser , faInfo , faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import SettingsList from 'react-native-settings-list';
import Notifications from './Noti';
import Units from './Units';
import About from './About';
const Stack = createStackNavigator();
const Setting = ({navigation}) => {
	
  return (
    
    <View style={{backgroundColor:'#f6f6fd',flex:1}}>
      
      <View style={{backgroundColor:'#f6f6fd',flex:1}}>
        <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
          <SettingsList.Header headerText='Generally' headerStyle={{color:'#33cc66',fontSize:18,}}/>
          <SettingsList.Item 
           // hasSwitch={true}
           title='FitBit account'
            hasNavArrow={true}
            icon={
            	<View style={styles.iconStyle}>
     			   <FontAwesomeIcon icon={ faUser } size={'20'} />
     			 </View>
            }
            
          />
          <SettingsList.Item
            
            title='Units of measurment'
            hasNavArrow={true}
            //titleInfo='Bill Wi The Science Fi'
            //titleInfoStyle={styles.titleInfoStyle}
            onPress={() => navigation.navigate('Units')}
            icon={
            	<View style={styles.iconStyle}>
     			   <FontAwesomeIcon icon={ faRuler } size={'20'} />
     			 </View>
            }
          />
          <SettingsList.Item
            
            title='Notifications'
            hasNavArrow={true}
            //titleInfo='Off'
            //titleInfoStyle={styles.titleInfoStyle}
            onPress={() => navigation.navigate('Notifications')}
            icon={
            	<View style={styles.iconStyle}>
     			   <FontAwesomeIcon icon={ faBell } size={'20'} />
     			 </View>
            }
          />
          <SettingsList.Item
           
            title='Goal'
            hasNavArrow={true}
            onPress={() => Alert.alert('Route To Cellular Page')}
            icon={
            	<View style={styles.iconStyle}>
     			   <FontAwesomeIcon icon={ faLeaf } size={'20'} />
     			 </View>
            }
          />
           <SettingsList.Header headerText='Data managment' headerStyle={{color:'#33cc66',fontSize:18,}}/>
          <SettingsList.Item
           
            title='Permission'
             hasNavArrow={true}

           // titleInfo='Off'
           // titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route To Hotspot Page')}
             icon={
            	<View style={styles.iconStyle}>
     			   <FontAwesomeIcon icon={ faLock } size={'20'} />
     			 </View>
            }
          />
          
          <SettingsList.Item
           
            title='Erase personal Data'
            hasNavArrow={true}
            onPress={() => Alert.alert('Route To Notifications Page')}
             icon={
            	<View style={styles.iconStyle}>
     			   <FontAwesomeIcon icon={ faEraser } size={'20'} />
     			 </View>
            }
          />
           <SettingsList.Header headerText='Information' headerStyle={{color:'#33cc66',fontSize:18,}}/>
          <SettingsList.Item
            
            title='About FitBit'
            hasNavArrow={true}
            onPress={() => navigation.navigate('About')}
             icon={
            	<View style={styles.iconStyle}>
     			   <FontAwesomeIcon icon={ faInfo } size={'20'} />
     			 </View>
            }
          />
          <SettingsList.Item
            
            title='Help'
            hasNavArrow={true}
            onPress={() => Alert.alert('Route To Do Not Disturb Page')}
             icon={
            	<View style={styles.iconStyle}>
     			   <FontAwesomeIcon icon={ faQuestionCircle } size={'20'} />
     			 </View>
            }
          />
          
        </SettingsList>
      </View>
    </View>
  );

}
const SettingPage=()=>{
   return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Setting" component={Setting} options={{
         title: 'FitBit Setting',
          headerStyle: {
            backgroundColor: '#003333',

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            //fontWeight: 'bold',
          }, }} />
       <Stack.Screen name="Notifications" component={Notifications} options={{
         title: 'Notifications',
          headerStyle: {
            backgroundColor: '#003333',

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            //fontWeight: 'bold',
          }, }}/>
          <Stack.Screen name="Units" component={Units} options={{
         title: 'Units of measurment',
          headerStyle: {
            backgroundColor: '#003333',

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            //fontWeight: 'bold',
          }, }}/>
          <Stack.Screen name="About" component={About} options={{
         title: 'About FitBit',
          headerStyle: {
            backgroundColor: '#003333',

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            //fontWeight: 'bold',
          }, }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}

 
export default SettingPage;