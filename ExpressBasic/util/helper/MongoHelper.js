const MongoClient = require('mongodb').MongoClient;

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
        MongoClient.connect(url, (err, client) => {
            if (!err) {
                console.log('Connected successfully to server');

                const db = client.db(dbName);

                // client.close();
            }
        });
    },

    insertData: (collectionName, data) => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, (err, client) => {
                if (!err) {
                    const db = client.db(dbName);
                    const collection = db.collection(collectionName || 'products');
                    collection.insertOne(data, (err, result) => {
                        if (!err) {
                            console.log(data);
                            resolve(result.ops || data);
                        } else {
                            reject(err);
                        }     
                    });
                }
            });
        });
    },

    findData: (collectionName, search) => {
        return new Promise((resolve, reject) => {
            const db = client.db(dbName);
            const collection = db.collection(collectionName || 'products');
        });
    }
}


module.exports = MongoHelper;
