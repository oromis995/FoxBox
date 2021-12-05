import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Platform } from 'react-native';




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#701d0f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      //flex:1,
      fontStyle:'normal',
      color: 'white',
      fontSize: 36,
      fontWeight:'bold',
      fontFamily: Platform.OS === 'ios' ? 'Bodoni 72 Oldstyle' : 'Roboto'
    },
    logo:{
        //flex: 1,
        width: 300,
        height: 300,
        resizeMode: 'contain'
    }
  });
   
  export {styles}