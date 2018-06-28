import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import firebase from 'react-native-firebase';

export default class HomeScreenComponent extends Component {
    constructor(props) {
        super(props);
        this.initFirebase();
    }

    initFirebase() {
        // Check permission
        firebase.messaging().hasPermission().then(enable => {
            if (enable) {
                console.log('Got permission');
            } else {
                // Request permission
                firebase.messaging().requestPermission().then(() => {
                    console.log('Got permission');
                }).catch(error => {
                    console.log('You dont have permission', error);
                });
            }
        });

        firebase.messaging().getToken().then(token => {
            console.log('Your token is : ', token);
        }).catch(error => {
            console.log('Have error when get token: ', error);
        })

        // Create chanel https://rnfirebase.io/docs/v4.2.x/notifications/android-channels
        const chanel = new firebase.notifications.Android.Channel('test-chanel', 'Test chanel', firebase.notifications.Android.Importance.Max)
            .setDescription('My chanel');
            // .setLockScreenVisibility(firebase.notifications.Android.Visibility.Private)
        firebase.notifications().android.createChannel(chanel);
    }

    componentDidMount() {
        // this.initFirebase();
        this.handleNotification();
        this.handleDisplayNotification();
        this.handleOpenNotification();
    }
    componentWillUnmount() {
        this.handleNotification();
    }

    handleNotification() {
        firebase.messaging().onMessage(message => {
            console.log('message ', message);
        });

        // When app is 
        firebase.notifications().onNotification(notif => {
            notif.android.setChannelId('default');
            console.log('On notification ', notif);

            // Build an Action, we can set it with data received
            const action = new firebase.notifications.Android.Action('test_action', 'ic_launcher', 'Clear');
            notif.android.addAction(action);
            
            firebase.notifications().displayNotification(notif);
        });
        // When App closed
        firebase.notifications().getInitialNotification(notif => {
            if (notif) {
                console.log(notif);
            }
        });
    }

    handleDisplayNotification() {
        firebase.notifications().onNotificationDisplayed(notif => {
            console.log('On notification displayed: ', notif);
        });
    }

    /**
     * Handle when open a notification with action and more
     */
    handleOpenNotification() {
        firebase.notifications().onNotificationOpened(notif => {
            console.log('Open notification ', notif);
            firebase.notifications().removeDeliveredNotification(notif.notification.notificationId);
            this.props.navigation.navigate('Product');
        });
    }

    setScheduleNotification() {
        // Read more carefully from here https://rnfirebase.io/docs/v4.2.x/notifications/android-actions#Performing-the-action-in-the-background
        const notif = new firebase.notifications.Notification();
        notif.setTitle('Schedule');
        notif.setBody('Schedule content');
        notif.setSubtitle('Schedule sub title');
        notif.android.setColor('green');
        notif.android.setVibrate(1);
        notif.android.setChannelId('default');
        const date = new Date();
        date.setSeconds(date.getSeconds() + 10);
        firebase.notifications().scheduleNotification(notif, {
            fireDate: date.getTime()
        });
    }

    showLocalNotification(time) {
        const notif = new firebase.notifications.Notification();
        notif.setTitle('Local');
        notif.setBody('Local content');
        notif.setSubtitle('Local sub title');
        notif.android.setChannelId('default');
        
        firebase.notifications().displayNotification(notif);
    }
    
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Button 
                    title="Show local notification"
                    color="#841584"
                    onPress={() => this.showLocalNotification()}
                />
                <Button 
                    title="Schedule local notification"
                    onPress={() => this.setScheduleNotification(5)}
                />
            </View>
        );
    }
}
