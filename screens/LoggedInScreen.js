import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { db } from '../constants/Firebase';

const LoggedInScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.titletext}>
                Welcome, {}!
            </Text>
            <View style={styles.signOutContainer}>
                <Text 
                    style={styles.signOutText}
                    onPress={() => console.log("Pressed log out!")}
                >
                    Sign Out
                </Text>
            </View>            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10,
    },
    titletext: {
        textAlign: 'center',
        fontSize: 28
    },
    signOutContainer: {
        alignItems: 'center'
    },
    signOutText: {
        textAlign: 'center',
        color: "red"
    }
});

export default LoggedInScreen;