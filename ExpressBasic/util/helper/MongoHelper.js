const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017';
const dbName = 'simpleDB';

// MongoClient.connect(url, function (err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);

//     client.close();
// });

// module.exports = MongoClient;
const MongoHelper = {
    connect: () => {
        MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
            if (!err) {
                console.log('Connected successfully to server');

                const db = client.db(dbName);

                // client.close();
                // db.close();
            }
        });
    },

    insertData: (collectionName, data) => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
                if (!err) {
                    const db = client.db(dbName);
                    const collection = db.collection(collectionName || 'products');
                    collection.insertOne(data, (err, result) => {
                        if (!err) {
                            console.log(data);
                            resolve(result.ops || data);
                        } else {
                            // db.close();
                            reject(err);
                        }     
                    });
                }
            });
        });
    },

    findData: (collectionName, search) => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
                const db = client.db(dbName);
                const collection = db.collection(collectionName || 'products');
                collection.find(search).toArray((err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        // db.close();
                        resolve(result);
                    }
                });
            })
        });
    }
}


module.exports = MongoHelper;
