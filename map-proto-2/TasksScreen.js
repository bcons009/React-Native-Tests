import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

const TaskScreen = props => {

  

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

});

export default TaskScreen;
