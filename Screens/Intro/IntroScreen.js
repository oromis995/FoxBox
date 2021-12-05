import React from 'react';
import { StyleSheet, Text, TouchableOpacity,fontFamily, View, Image, SafeAreaView, Platform, na  } from 'react-native';
import {styles} from './styles'


function intro ({navigation}){

    const handlePress = () => console.log("Image Pressed")
  
  
    
  

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>FoxBox </Text> 
        <TouchableOpacity onPress={() => handlePress(),() => navigation.navigate('DateCalculator')}>
          <Image style={styles.logo} source={require('./FoxBoxLogo3.png')}/>
        </TouchableOpacity>
      </SafeAreaView>
    )
}

export default intro