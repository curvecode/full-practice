let express = require('express');
let users = express.Router();
let mongoHelper = require('../util/helper/MongoHelper');

const USER_COLLECTION = 'users';

users.get('/', (req, res) => {
    let query = req.query;
    let search = query;
    // console.log(req);
    mongoHelper.findData(USER_COLLECTION, search).then((data) => {
        res.json(data);
        res.end();
    }).catch((error) => {
        // res.send(error);
        res.status(500).send(error);
        res.end();
    })
});

users.post('/add', (req, res) => {
    
    let data = req.body || null;
    if (data) {
        mongoHelper.insertData(USER_COLLECTION, data).then((data) => {
            res.send(data);
            res.end();
        }).catch((error) => {
            res.status(500).send(error);
            res.end();
        });
    } else {
        // res.send('Data is empty');
        res.status(500).send('Data is empty');
        res.end();
    }
})

users.post('/login', (req, res) => {
    
    let criteria = req.body || null;
    if (criteria) {
        // Check user is exists or not
        mongoHelper.findData(USER_COLLECTION, criteria).then((data) => {
            console.log(data);
            if (data && data.length) {
                res.send({
                    success: true,
                    message: 'Login success',
                    response: data
                });
            } else {
                res.send({
                    success: false,
                    message: 'User not found'
                });
            }
        }).catch((error) => {
            res.status(500).send({
                success: false,
                message: 'Your account is not exists'
            })
        })
    } else {
        res.status(404).send({
            success: false,
            message: 'Your email or password is wrong'
        });
        res.end();
    }
})

module.exports = users;