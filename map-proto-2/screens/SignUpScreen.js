import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { db } from '../constants/Firebase';

const SignUpScreen = props => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFName] = useState('');
  const [errorText, setErrorText] = useState('');

  // Handler for when user selects "Sign Up"
  const handleSignUp = (fname, email, password) => {
    try {
      // Create user using inputted info
      firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
        // Store user's first name into Firestore document associated with user
        return db.collection('users').doc(cred.user.uid).set({
          fname: fname
        });
      }).then(() => {
        props.navigation.navigate("Logged In");
      }).catch(error => {
        // Rudimentary error handler for Firebase errors
        setErrorText(error.message);
      })
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
            <Label>First Name</Label>
            <Input 
              autoCorrect={false}
              autoCapitalize="words"
              blurOnSubmit
              onChangeText={(fname) => setFName(fname)}
              value={fname}
              maxLength={20}
            />
          </Item>

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
            primary
            onPress={() => handleSignUp(fname, email, password)}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </Button>

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
  }
});

export default SignUpScreen;
