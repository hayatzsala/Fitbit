import 'react-native-gesture-handler';
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
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default class SignUp extends React.Component {
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
     

      <ImageBackground source={require('../login.jpg')} style={styles.backgroundImage} >
      <View style={styles.signUpview}>
      <Image source={require('../logo.png') } style={styles.logoImage} />
        <TextInput
          style={styles.textStyle}
          placeholder='First name'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.textStyle}
          placeholder='Last name'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.textStyle}
          placeholder='Email'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.textStyle}
          placeholder='Password'
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
          title='Sign Up  '
          color="#003333"

          onPress={this.signUp}
        />
       </View>
      </View></ImageBackground>
    )
  }
}

// const styles = StyleSheet.create({
//   input: {
//     width: 350,
//     height: 55,
//     backgroundColor: '#42A5F5',
//     margin: 10,
//     padding: 8,
//     color: 'white',
//     borderRadius: 14,
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })