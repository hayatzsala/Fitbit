import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
//import Slideshow from 'react-native-slideshow';
//import PropTypes from 'prop-types';
import {faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-native-fontawesome';
import styles from '../pages/styles.js';
export default class Profile extends Component {
  //   constructor(props) {
  //   super(props);
 
  //   this.state = {
  //     position: 1,
  //     interval: null,
  //     dataSource: [
  //       {
  //         //title: 'Title 1',
  //         //caption: 'Caption 1',
  //         url: '../sleep.png',
  //       }, {
  //         //title: 'Title 2',
  //         //caption: 'Caption 2',
  //         url: '../steps.png',
  //       }, {
  //         //title: 'Title 3',
  //         //caption: 'Caption 3',
  //         url: '../water.png',
  //       },
  //     ],
  //   };
  // }
  //  componentWillMount() {
  //   this.setState({
  //     interval: setInterval(() => {
  //       this.setState({
  //         position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
  //       });
  //     }, 2000)
  //   });
  // }
 
  // componentWillUnmount() {
  //   clearInterval(this.state.interval);
  // }
 
  render() {
    return (
      <ScrollView>
      <View styles={{backgroundColor:'white'}}>
          <View style={styles.header}>
              <Image source={require('../p1.jpg')} style={{width:'100%',height:200}} /> 
          </View>

          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
           <TouchableOpacity style={styles.nameContainer}>
                <Text>Your Name      </Text>
                <FontAwesomeIcon  icon={ faPen } size={'20'} />
              </TouchableOpacity>  
          <View style={styles.body}>
          
           
          
            <View style={styles.bodyContent}>
             <Text  style={styles.pStyle}>My Information _____________________________</Text>
          
              <TouchableOpacity style={styles.buttonContainer}>
                <Text> Gender </Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Date of birth </Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Weight</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Length</Text> 
              </TouchableOpacity>
              <Text  style={styles.pStyle}>My Health _______________________________</Text>
              <Text style={styles.BMIStyle}>BMI                                             </Text>
              <Text style={styles.valueStyle}>(Value)</Text>  

              <Text style={styles.BMIStyle}>Ideal weight                                </Text>
              <Text style={styles.valueStyle}>(Value)</Text>

              <Text style={styles.BMIStyle}>Recommended daily excersice</Text>
              <Text style={styles.valueStyle}>(Value)</Text>
              
            </View>

        </View>
      </View>
      </ScrollView>
    );
  }
}


 