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
    var criteria = request.query || null;
    // Get all document
    // let promise = db.collection('posts');
    // if (criteria) {
    //     promise = promise.where('title', == , "title").get();
    // } else {
    //     promise = promise.get();
    // }
    var arrData = [];
    db.collection('posts').get().then((snapshot) => {
        snapshot.forEach((doc) => {
            docs.push(doc.id);
            arrData.push(doc.data());
        });
        docs.forEach(element => {
            let tmp = db.collection('posts').doc(element);
            tmp.onSnapshot(docSnapshot => {
                console.log(`Received doc snapshot: ${docSnapshot.id} -- ${JSON.stringify(docSnapshot.data())}`);
            }, err => {
                console.log(`Encountered error: ${err}`);
            });
            // arrData.push(docSnapshot.data());
        });
        response.send(arrData);
        // Promise.all(arrPromise).then(values => {
        //     var arrData = [];
        //     if (values.length > 0) {
        //         values.forEach(snapData => {
        //             if (snapData.exists) {
        //                 arrData.push(snapData.data());
        //             }
        //         });
        //     }
        //     response.send(arrData);
        // }).catch(error => {
        //     response.send(error);
        // });
    }).catch((error) => {
        console.log(error);
        response.send('Error getting posts...');
    });
});

exports.addPost = functions.https.onRequest((request, response) => {
    console.log('Add post ....');
    let data = request.body;

    db.collection('posts').add(data).then(docRef => {
        console.log('Add document with id : ' + docRef.id);
        response.send('Added post success with id : ' + docRef.id);
    }).catch(error => {
        response.send('Error ' + error);
    });

    // var transaction = db.runTransaction(t => {
    //     return t.get(db.collection('posts').doc(''))
    // })
});

exports.deletePost = functions.https.onRequest((request, response) => {
    console.log('##### Delete the post...');
    // console.log(request.params['id']);
    // console.log(request.baseUrl);
    let id = request.query ? request.query.id : null;
    console.log(`The post will be deleted : ${id}`);
    if (id) {
        db.collection('posts').doc(id).delete().then(res => {
            console.log('Delete result: ' + JSON.stringify(res));
            response.statusCode = 200;
            response.statusMessage = 'Delete post success';
            response.send({
                message: 'The post was deleted'
            });
            // response.send(request);
        }).catch(err => {
            response.send(err);
        });
    } else {
        response.statusCode = 400;
        response.statusMessage = 'Bad request';
        response.send(request);
    }
});

exports.addCitizen = functions.https.onRequest((request, response) => {
    console.log('Add citizen');
    var data = request.body;

    var citiesRef = db.collection('cities');
    citiesRef.add(data).then(docRef => {
        response.send(docRef.id);
    }).catch(error => {
        res.send('Error add citizen ' + error);
    });

});

exports.getCitizen = functions.https.onRequest((request, response) => {
    console.log('Get citizen');

    db.collection('cities').get().then(snapshot => {
        var arrData = [];
        snapshot.forEach(citizen => {
            arrData.push(citizen.data());
        });
        response.send(arrData);
    }).catch(error => {
        response.send('Error ' + error);
    });

    // Listen change on collection when something changed
    db.collection('cities').onSnapshot(snapShot => {
        let arrDocChanged = snapShot.docChanges;
        if (arrDocChanged.length > 0) {
            arrDocChanged.forEach(docChanged => {
                console.log(`Something changed : ${JSON.stringify(docChanged.doc.data())} ::: ${docChanged.doc.exists}`);
            });
        }

    }, err => {

    });
});

// module.exports = { api_v1 };