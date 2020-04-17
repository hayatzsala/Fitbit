import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image
} from 'react-native'
import styles from './styles.js';
export default class Forget extends React.Component {
  
 
  render() {
    return (
     

      <ImageBackground source={require('../login.jpg')} style={styles.backgroundImage} >
      <View style={styles.signUpview}>
      <Image source={require('../logo.png') } style={styles.logoImage} />
        
        <TextInput
          style={styles.textStyle}
          placeholder='New Password'
          secureTextEntry={true}
          onChangeText={val => this.onChangeText('password', val)}
        />
        
        <TextInput
          style={styles.textStyle}
          placeholder='Re-Enter Password'
          secureTextEntry={true}
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <View style={styles.loginButton}>
        <Button
          title='Change Password '
          color="#003333"
          
        />
       </View>
      </View>
      </ImageBackground>
    )
  }
}

