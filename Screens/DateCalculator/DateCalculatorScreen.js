import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, Button, TouchableOpacity,fontFamily, View, Image, SafeAreaView, Platform  } from 'react-native';
import {styles} from './styles'
import { CommonActions } from '@react-navigation/native'
import DatePicker from 'react-native-modern-datepicker';


const dateCalculator =({navigation}) => {
  const [selectedDate, setSelectedDate] = useState('');

/*          
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: 'DateCalculator' }
      ],
    })
  );
*/
  
  return (
    
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.dateButton}>
      <DatePicker //style={styles.dateRoller}
      onSelectedChange={date => setSelectedDate(date)}
      options={{
        backgroundColor: '#090C08',
        textHeaderColor: '#FFA25B',
        textDefaultColor: '#F6E7C1',
        selectedTextColor: '#fff',
        mainColor: '#F4722B',
        textSecondaryColor: '#D6C7A1',
        borderColor: 'rgba(122, 146, 165, 0.1)',
      }}
      current="2020-07-13"
      selected="2020-07-23"
      mode="calendar"
      minuteInterval={30}
      style={{ borderRadius: 10 }}
    />
      </SafeAreaView>
    </SafeAreaView>

    
    
    
  )
}

export default dateCalculator