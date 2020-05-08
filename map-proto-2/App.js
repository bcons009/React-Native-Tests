import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { db } from './constants/Firebase';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoggedInScreen from './screens/LoggedInScreen';

// Create Stack Navigator; used for navigating between screens
const Stack = createStackNavigator();

export default function App({ navigation }) {

  const [userCred, setUserCred] = useState();

  // Handler for signing user out (not yet implemented)
  /*
  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      show next screen / do whatever
    })
  }    
  */

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Logged In" component={LoggedInScreen} />
      </Stack.Navigator>
    </NavigationContainer>    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
});
