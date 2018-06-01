// import ProductCategory from '../util/model/ProductCategory';
let express = require('express');
let products = express.Router();
let mongoHelper = require('../util/helper/MongoHelper');
// let Category = require('../util/model/ProductCategory');
// import ProductDetail from '../util/model/ProductDetail';
const PRODUCT_CATEGORY_COL = 'categories';
const PRODUCT_DETAIL_COL = 'products';

products.get('', (req, res) => {
    res.send({});
});

products.get('/categories', (req, res) => {
    console.log('calling 123...');
    let param = req.query || {};
    if (!param.id) {
        // Get all category
        mongoHelper.findData(PRODUCT_CATEGORY_COL, param).then((data) => {
            if (Array.isArray(data) && data.length > 0) {
                res.status(200).json(data);
                res.end();
            } else {
                res.status(404).json({
                    message: 'Category not found'
                });
            }
        }).catch((error) => {
            res.status(400).send(error);
            res.end();
        })
    } else {
        // Get all product of category
        let search = { catId: param.id };
        mongoHelper.findData(PRODUCT_DETAIL_COL, search).then((data) => {
            if (Array.isArray(data) && data.length > 0) {
                res.status(200).json(data);
                res.end();
            } else {
                res.status(404).json({
                    message: 'Category not found'
                });
            }
        }).catch((error) => {
            res.status(400).send(error);
            res.end();
        })
    }
});

products.get('/detail', (req, res) => {
    let param = req.query || {};
    if (param.id) {
        let search = { _id: param.id };
        mongoHelper.findData(PRODUCT_DETAIL_COL, search).then((data) => {
            if (Array.isArray(data) && data.length > 0) {
                res.status(200).json(data);
                res.end();
            } else {
                res.status(404).json({
                    message: 'Production not found'
                });
                res.end();
            }
        }).catch((error) => {
            res.status(400).send(error);
            res.end();
        })
    } else {
        res.status(404).json({
            message: 'Production not found'
        });
        res.end();
    }
});

products.post('/categories', (req, res) => {
    let data = req.body || null;
    if (data) {
        // let cat = new ProductCategory(data);
        mongoHelper.insertData(PRODUCT_CATEGORY_COL, data).then((data) => {
            res.status(200).send(data);
            res.end();
        }).catch((error) => {
            res.status(400).send(error);
            res.end();
        });
    } else {
        res.status(400).send('Data is empty');
        res.end();
    }
});

products.post('/detail', (req, res) => {
    let data = req.body || null;
    if (data) {
        mongoHelper.insertData(PRODUCT_DETAIL_COL, data).then((data) => {
            res.status(200).json(data);
            res.end();
        }).catch((error) => {
            res.status(400).send(error);
            res.end();
        });
    } else {
        res.status(400).send('Data is empty');
        res.end();
    }
});

products.put('', (req, res) => {

});

products.delete('', (req, res) => {

});

module.exports = products;
