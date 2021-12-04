import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity,fontFamily, View, Image, SafeAreaView, Platform } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text Pressed")

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => console.log("Image Tapped")}>
        <Image //style={styles.logo}
          source={require('./assets/FoxBoxLogo.png')}
          blurRadius={0.5}
        />
      </TouchableOpacity>
      <Text style={styles.title}>FoxBox </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#701d0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontStyle:'normal',
    color: 'white',
    fontSize: 36,
    fontWeight:'bold',
    fontFamily: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto'
  },
  logo:{
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  }
});
