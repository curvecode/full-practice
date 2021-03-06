import firebase from 'react-native-firebase';

const notificationService = {

    initApp() {
        // alert('Come here');
        // Check permission
        const channel = new firebase.notifications.Android.Channel('default', 'Default Channel', firebase.notifications.Android.Importance.Max);
        channel.setDescription('My default channel');
        firebase.messaging().hasPermission().then(permission => {
            if (!permission) {
                firebase.messaging().requestPermission().then(data => {
                    if (data) {
                        firebase.messaging().getToken().then(tokenId => {
                            console.log('Token : ' , tokenId);
                            // save to database
                            this.saveTokenNotification(tokenId);
                        });
                    }
                })
            } else {
                firebase.messaging().getToken().then(tokenId => {
                    console.log('Token : ' , tokenId);
                    // save to database
                    this.saveTokenNotification(tokenId);
                });
            }
            // this.listenMessage();
        }).catch(error => {
            console.log(error);
        });
        
    },

    saveTokenNotification(token) {
        firebase.firestore().collection('tokens').add({
            value: token,
            createdDate: new Date().toUTCString()
        });
    },

    listenMessage() {
        firebase.messaging().onMessage(message => {
            console.log(message);
        });

        firebase.notifications().onNotification(notification => {
            console.log('Notification ', notification);
            // firebase.notifications().displayNotification(notification);
        });

        firebase.notifications().onNotificationDisplayed(notification => {
            console.log('Notification displayed: ', notification);
        });

        firebase.notifications().onNotificationOpened(notification => {
            console.log('Notification displayed : ', notification);
        });
    }
}

export default notificationService;
