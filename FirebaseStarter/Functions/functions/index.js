const functions = require('firebase-functions');
// const express = require('express');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

var db = admin.firestore();


// const app = express();

// app.get('/', (request, response) => {
//     console.log('APPPPPPPP');
//     response.send('Express isrunning...');
// });

// app.get('/posts', (request, response) => {
//     console.log('ABC et');
//     db.collection('posts').get().then(snapshot => {
//         response.json(snapshot).end();
//     });
//     // response.send('Another router from express');
// });

// const api_v1 = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.getPosts = functions.https.onRequest((request, response) => {
    var docs = [];
    db.collection('posts').get().then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc);
            console.log(doc.data);
            docs.push(doc.data); // _fieldsProto
        });
        response.send(docs);
    }).catch(error => {
        console.log(error);
        response.send('Error getting posts...');
    })
})

exports.addPost = functions.https.onRequest((request, response) => {
    console.log('Add post ....');
    let data = request.body;

    db.collection('posts').add(data).then(docRef => {
        response.send(docRef);
    }).catch(error => {
        response.send('Error ' + error);
    })
})

exports.addCitizen = functions.https.onRequest((request, response) => {
    console.log('Add citizen');

    var citiesRef = db.collection('cities');
    citiesRef.add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
    }).then(docRef => {
        response.send(docRef);
    }).catch(error => {
        res.send('Error add citizen ' + error);
    })

});

exports.getCitizen = functions.https.onRequest((request, response) => {
    console.log('Get citizen');

    db.collection('cities').get().then(snapshot => {
        response.send(snapshot);
    }).catch(error => {
        response.send('Error ' + error);
    })
})
// module.exports = { api_v1 };