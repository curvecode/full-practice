let express = require('express');
let route = express.Router();


route.get('', (req, res) => {
    res.send('Hello App');
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
