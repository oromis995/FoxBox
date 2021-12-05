//App created by Lorenzo Basili
//Sources 
//https://www.youtube.com/watch?v=0-S5a0eXPoc //basic setup
//https://www.youtube.com/watch?v=l8nY4Alk70Q //file structure and basic navigator
//https://www.youtube.com/watch?v=gPaBicMaib4 //bottom tab navigator
//https://www.youtube.com/watch?v=ayxRtBHw754 //drawer navigator
//https://www.youtube.com/watch?v=Imkw-xFFLeE //DateTimePicker


import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import  FoxNavigator from './Navigation/FoxNavigator'


function App() {

  return (
    
    <NavigationContainer>
        <FoxNavigator/>
    </NavigationContainer>
 
  )
}

export default App