import React from 'react';
import { Image, Text, View, ScrollView, TextInput, Button, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import styles from './src/components/styles/common';
import notificationService from './src/service/notificationService';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('todos');
        this.unsubscribe = null;
        this.state = {
            title: '',
            loading: true,
            todos: [],
        };
        // this.bindingTodos();
    }

    updateTitle(text) {
        this.setState({
            title: text
        });
    }

    createTodo() {
        this.ref.add({
            title: this.state.title,
            completed: false,
            createdDate: new Date().toUTCString()
        });
        this.textInput.clear();
    }

    componentDidMount() {
        // firebase things?
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
        // notificationService.initApp();
        // notificationService.listenMessage();

        firebase.messaging().getToken()
            .then(fcmToken => {
                if (fcmToken) {
                    // user has a device token
                    console.log('Token: ', fcmToken);
                } else {
                    // user doesn't have a device token yet
                }
            });

        // CHECK PERMISSION
        firebase.messaging().hasPermission()
            .then(enabled => {
                if (enabled) {
                    // user has permissions
                    console.log('hasPermission', enabled)
                } else {
                    // user doesn't have permission
                    // REQUEST PERMISSION
                    firebase.messaging().requestPermission()
                        .then(() => {
                            // User has authorised  
                        })
                        .catch(error => {
                            // User has rejected permissions  
                            console.log('requestPermission', error)
                        });
                }
            });

        // DEFAULT CHANNEL
        const channel = new firebase.notifications.Android.Channel('default', 'Default Channel', firebase.notifications.Android.Importance.Max);
        channel.setDescription('My default channel');
        // Create the channel
        firebase.notifications().android.createChannel(channel);

        this.messageListener = firebase.messaging().onMessage((message) => {
            // Process your message as required
            console.log('onMessage', message);
        });

        // LOCAL NOTIFICATION: FOREGROUND
        this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
            // Process your notification as required
            // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
            console.log('onNotificationDisplayed', notification);
        });


        this.notificationListener = firebase.notifications().onNotification((notification) => {
            // Process your notification as required
            console.log('onNotification', notification);
            notification.android.setChannelId('default');
            firebase.notifications().displayNotification(notification);
        });

        // APP FOREGROUND / BACKGROUND
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
            // Get the action triggered by the notification being opened
            const action = notificationOpen.action;
            console.log('onNotificationOpened - action', action);
            // Get information about the notification that was opened
            const notification = notificationOpen.notification;
            console.log('onNotificationOpened - notification', notification)
        });

        // APP CLOSED
        firebase.notifications().getInitialNotification()
            .then((notificationOpen) => {
                if (notificationOpen) {
                    // App was opened by a notification
                    // Get the action triggered by the notification being opened
                    const action = notificationOpen.action;
                    console.log('getInitialNotification - action', action);
                    // Get information about the notification that was opened
                    const notification = notificationOpen.notification;
                    console.log('getInitialNotification - notification', notification);
                }
            });
    }

    componentWillUnmount() {
        this.unsubscribe = null;
        // notificationService.listenMessage();
        this.messageListener();

        this.notificationDisplayedListener();
        this.notificationListener();
    }

    bindingTodos() {
        let datas = [];
        this.ref.get().then((snapShot) => {
            snapShot.forEach(doc => {
                datas.push(doc.data());
            });
            // alert(JSON.stringify(datas));
            this.setState({
                todos: datas,
                loading: false
            });
        }).catch(error => {
            alert('Have error :', error);
            this.setState({
                loading: false
            });
        });
        // this.ref.onSnapshot(this.onCollectionUpdate);
    }



    onCollectionUpdate = (querySnapshot) => {
        const todos = [];
        querySnapshot.forEach((doc) => {
            const { title, completed, createdTime } = doc.data();
            todos.push({
                key: doc.id,
                doc, // DocumentSnapshot
                title,
                completed,
                createdTime
            });
            this.setState({
                todos: todos,
                loading: false,
            });
        });
        // const notification = new firebase.notifications.Notification();
        // notification.setTitle('Have new update data');
        // notification.setBody('You have a new todo');
        // notification.android.setChannelId('default');
        // notification.android.setColor('blue');
        // notification.setSound('default');
        // firebase.notifications().displayNotification(notification).then(result => {
        //     console.log(result);
        // }).catch(error => {
        //     console.log('Error :', error);
        // });
    }

    updateTaskCompleted(key, status) {
        // this.ref.up
        this.ref.doc(key).update({
            completed: !status
        }).then(result => {
            // alert(JSON.stringify(result));
            console.log(result);
        }).catch(error => {
            alert(JSON.stringify(error));
        })
    }

    deleteTask(key) {
        this.ref.doc(key).delete().then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        });
    }

    renderTodo(item) {
        return (
            // <View>
            //   <Text>{item.title}</Text>
            //   <TouchableOpacity onPress={() => { alert('Complete it!'); }}>
            //     <Text>Complete</Text>
            //   </TouchableOpacity>
            // </View>

            <View style={styles.wrapper}>
                <View style={styles.thumbnailView}>
                    <Text>{item.title}</Text>
                    <Image source={{ uri: item.imageUrl ? item.imageUrl : 'https://picsum.photos/200' }} style={styles.thumbnail} />
                </View>
                <View style={styles.detailsView}>
                    <Text>{item.key}</Text>
                    <Text>{item.createdTime}</Text>
                    <View style={styles.shipping}>
                        <TouchableOpacity onPress={() => this.updateTaskCompleted(item.key, item.completed)}>
                            <Text style={styles.shippingText}>{item.completed ? 'Completed' : 'Do it'}</Text>
                        </TouchableOpacity>
                    </View>
                    <Button
                        title="Delete task"
                        onPress={() => this.deleteTask(item.key)}
                    />
                </View>

            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        !this.state.loading &&
                        <FlatList
                            data={this.state.todos}
                            renderItem={(todos) => { return this.renderTodo(todos.item) }}
                            keyExtractor={(item) => String(item.key)}
                        />
                        ||
                        <View style={{ flex: 1 }}>
                            <ActivityIndicator size="large" color="#0000ff" />
                        </View>
                    }
                    <View>
                        <TextInput
                            ref={ref => {
                                this.textInput = ref
                            }}
                            placeholder="Enter your task"
                            onChangeText={(text) => this.updateTitle(text)}
                        />
                        <Button
                            title="Save"
                            disabled={!this.state.title.length}
                            onPress={() => this.createTodo()}
                        />
                        <Button
                            title="Show local notification"
                            onPress={() => {
                                const notification = new firebase.notifications.Notification();
                                notification.setTitle('Local notification');
                                notification.setBody('Body ne');
                                notification.setSound('default');
                                notification.android.setChannelId('default');

                                firebase.notifications().displayNotification(notification).then(result => {
                                    console.log('success', result);
                                }).catch(error => {
                                    console.log('Show error', error);
                                });
                            }}
                        />
                        <Button
                            title="Set schedule for notification"
                            onPress={() => {
                                try {
                                    const notification = new firebase.notifications.Notification();
    
                                    notification.setTitle('Schedule notification');
                                    notification.setBody('This is content');
                                    notification.setSound('default');
                                    notification.android.setChannelId('default');
    
                                    const date = new Date();
                                    date.setSeconds(date.getSeconds() + 10);
                                    firebase.notifications().scheduleNotification(notification, {
                                        fireDate: date.getTime()
                                    });
                                } catch (error) {
                                    console.log(error);
                                }
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
