import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import DateCalculator from '../Screens/DateCalculator/DateCalculatorScreen'
import Intro from '../Screens/Intro/IntroScreen'


const Stack = createNativeStackNavigator()

const FoxNavigator = () => {
    return(

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name ='Intro' component ={Intro}/>
            <Stack.Screen name ='DateCalculator' component ={DateCalculator} />    
        </Stack.Navigator>
    )
}

export default FoxNavigator;