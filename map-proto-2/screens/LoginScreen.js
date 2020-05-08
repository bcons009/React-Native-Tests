import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { db } from '../constants/Firebase';

const LoginScreen = props => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleLogin = (email, password) => {
    try {
      // Log in user using inputted info
      firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
        // Test message displaying info of logged in user
        console.log(cred);
        // Test case for updating information in Firestore associated with a user
        return db.collection('users').doc(cred.user.uid).collection('tasks').doc('Publix').set({
          tasks: ['null', 'switched it!']
        });
        
      }).then(() => {
        props.navigation.navigate("Logged In");
      }).catch(error => {
        // Rudimentary error handler for Firebase errors
        setErrorText(error.message);
      });
    }
    catch (error) { 
      // Handler for other, non-Firebase errors     
      setErrorText(error.message);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <Container style={styles.container} >
        <Form>

          <Item floatingLabel>
            <Label>Email</Label>
            <Input 
              autoCorrect={false}
              autoCapitalize="none"
              blurOnSubmit
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input 
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              blurOnSubmit
              onChangeText={(password) => setPassword(password)}
              value={password}
            />
          </Item>

          <Button 
            style={styles.button}
            full
            rounded
            success
            onPress={() => handleLogin(email, password) }
          >
            <Text style={styles.buttonText}>Login</Text>
          </Button>

          <View style={styles.signUpContainer}>
            <Text 
              style={styles.signUpText}
              onPress={() => {
                props.navigation.navigate("Sign Up");
              }}
            >
              Sign Up
            </Text>
          </View> 

          {/* Displays errors as an error message underneath "Sign Up" button */}
          <Text style={styles.errText}>{errorText}</Text>        

        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
  buttonText: {
    color: "white",
  },
  button: {
    marginTop: 20,
  },
  signUpContainer: {
    alignItems: 'center'
  },
  signUpText: {
    marginTop: 20,
    color: "blue",
    textAlign: 'center'
  },
  errText: {
    marginTop: 20,
    color: "red",
    textAlign: 'center'
  }
});

export default LoginScreen;
