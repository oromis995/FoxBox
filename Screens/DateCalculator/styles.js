import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#701d0f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dateText: {
      fontWeight: 'bold',
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dateButton: {
      margin: 20
    },
    dateRoller: {
      backgroundColor: '#701d0f',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    }
  });
   
  export {styles}