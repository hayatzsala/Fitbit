import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {Text,ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Button,
  TextInput ,
  TouchableOpacity,
  TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Keyboard
} from 'react-native';
 import styles from '../pages/styles.js';
 import SignUp from '../pages/SignUp';
 const Stack = createStackNavigator();
 const handleEmail = (text) => {
      this.setState({ email: text })
   }
   const Create =()=>{
    return(
      <SignUp/>
      );
   }
 //import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
const Container = ({navigation}) => {
    return (
        <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       
        <ImageBackground source={require('../login.jpg')} style={styles.backgroundImage} >
           <View style={styles.form}>
                <Image source={require('../logo.png') } style={styles.logoImage} />

                <TextInput style={styles.textStyle} placeholder="Email" />
                 <TextInput style={styles.textStyle} placeholder="Password" secureTextEntry={true}/>
                 <View style={styles.loginButton}>
                <Button title="login" color="#003333" />
               </View>
               <TouchableOpacity style={styles.createStyle} onPress={() => navigation.navigate('Create')}><Text>Are you new ? Create account      </Text></TouchableOpacity>
                <View style={styles.hairline} />
                <Text  style={styles.orStyle}>OR   </Text>
                <View style={styles.hairline} />

             </View>
                
            </ImageBackground>
           
       
         </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
const mainContainer=()=>{
   return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Container}options={{ headerShown: false }} />
        <Stack.Screen name="Create" component={Create}options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

 
export default mainContainer;