// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash'
import ChooseLanguage from './src/screens/ChooseLanguage';
import {MobileLogin} from './src/screens/MobileLogin';
import SignUp from '../Mowuta/src/screens/SignUp';
import SignUpPersonalInfo from '../Mowuta/src/screens/SignUpPersonalInfo';
import Login from './src/screens/Login';
// import Something from '../'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="ChooseLanguage" component={ChooseLanguage} />
        <Stack.Screen name="MobileLogin" component={MobileLogin}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="SignUpPersonalInfo" component={SignUpPersonalInfo}/>
        <Stack.Screen name = "Login" component={Login}/>
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;