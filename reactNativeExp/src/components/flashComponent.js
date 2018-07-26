import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AccessToken, LoginManager, LoginButton } from 'react-native-fbsdk';

export default class FlashComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> This is flash component </Text>
                {firebase.messaging.nativeModuleExists && <Text>Cloud Messaging</Text>}
                {firebase.notifications.nativeModuleExists && <Text>Notification Module</Text>}
                {firebase.firestore.nativeModuleExists && <Text>Firestore Module</Text>}
                {firebase.auth.nativeModuleExists && <Text>Authentication</Text>}
                <Button
                    title="Show local notification"
                    onPress={() => {
                        let notif = new firebase.notifications.Notification();
                        notif.setTitle('Title');
                        notif.setBody('Body content');
                        notif.android.setChannelId('default');

                        firebase.notifications().displayNotification(notif).then(value => {
                            console.log(value);
                        }).catch(error => {
                            console.log(error);
                        });
                    }}
                />
                <Button
                    title="Sign in with Google"
                    onPress={() => this.handleGoggleAuth()}
                    color="#eee"
                />
                <Button
                    title="Sign in with Facebook"
                    onPress={() => this.handleFacebookAuth()}
                    color="#ccc"
                />
                <LoginButton
                    publishPermissions={["email"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("Login failed with error: " + error.message);
                            } else if (result.isCancelled) {
                                alert("Login was cancelled");
                            } else {
                                alert("Login was successful with permissions: " + result.grantedPermissions)
                            }
                        }
                    }
                    onLogoutFinished={() => alert("User logged out")} />
                <Button
                    title="Sign in with Phone Number"
                    onPress={() => this.handlePhoneNumber()}
                    color="#aaa"
                />
            </View>
        );
    }

    handlePhoneNumber() {
        
    }

    componentDidMount() {
        // ... do something
        console.log('Firebase ::: ', firebase.messaging.name);
        console.log('Firebase exists ::: ', firebase.messaging.nativeModuleExists);
        this.registerPermission();

        // Create chanel https://rnfirebase.io/docs/v4.2.x/notifications/android-channels
        const chanel = new firebase.notifications.Android.Channel('test-chanel', 'Test chanel', firebase.notifications.Android.Importance.Max)
            .setDescription('My chanel');
        // .setLockScreenVisibility(firebase.notifications.Android.Visibility.Private)
        firebase.notifications().android.createChannel(chanel);

    }

    registerPermission() {
        firebase.messaging().hasPermission().then(enable => {
            if (!enable) {
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
    handleGoggleAuth() {
        let provider = firebase.auth.GoogleAuthProvider.credential(null, null);
        firebase.auth().signInAndRetrieveDataWithCredential(provider).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    }

    handleFacebookAuth() {
        LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(result => {
            if (result.isCancelled) {
                return Promise.reject(new Error('The user cancelled the request'));
            }
            // Retrieve the access token
            return AccessToken.getCurrentAccessToken();
        }).then(data => {
            // Create a new Firebase credential with the token
            const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
            // Login with credential
            return firebase.auth().signInWithCredential(credential);
        }).then(user => {
            console.log(user);
            alert('Login success');
        }).catch(error => {
            const { code, message } = error;
            console.log(error);
        })
    }

    _facebookLogin = async () => {
        try {
            const result = await LoginManager.logInWithReadPermissions(['public_profile']);

            if (result.isCancelled) {
                throw new Error('User cancelled request'); // Handle this however fits the flow of your app
            }

            console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

            // get the access token
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
                throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
            }

            // create a new firebase credential with the token
            const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

            // login with credential
            await firebase.auth().signInAndRetrieveDataWithCredential(credential);

        } catch (e) {
            console.error(e);
        }
    };
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
