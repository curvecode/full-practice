/*jshint esversion: 6 */
let express = require('express');
let route = express.Router();


route.get('/', (req, res) => {
    let mongoHelper = require('../util/helper/MongoHelper');
    mongoHelper.findData('products', req.params.name ? { name: req.params.name } : {}).then((data) => {
        console.log(data);
        res.json(data);
    }).catch((error) => {
        // res.status(500).error({ message: error });
        res.send(error);
    });
});

route.post('', (req, res) => {
    let dataBody = req.body;
    let mongoHelper = require('../util/helper/MongoHelper');
    mongoHelper.insertData('product', dataBody).then((data) => {
        res.json(data);
    }).catch((error) => {
        res.send('Error insert failed');
        res.end();
    });

});

module.exports = route;
