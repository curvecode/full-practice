import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

export default class FlashComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> This is flash component </Text>
                {firebase.messaging.nativeModuleExists && <Text>Cloud Messaging</Text>}
            </View>
        );
    }

    componentDidMount() {
        // ... do something
        console.log('Firebase ::: ', firebase.messaging.name);
        console.log('Firebase exists ::: ', firebase.messaging.nativeModuleExists);
        this.registerPermission();
    }

    registerPermission() {
        firebase.messaging().hasPermission().then(enable => {
            if(!enable) {
                firebase.messaging().requestPermission().then(permission => {
                    if (!permission) {
                        console.log('No permission');
                    }
                }).catch(error => {
                    console.log('Has error when request permission', error);
                });
            }
        });

        firebase.messaging().getToken().then(token => {
            console.log('Your token is ::  ', token);
        }).catch(error => {
            console.log('Get token error :: ', error);
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
