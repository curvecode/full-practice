/*jshint esversion: 6 */
let express = require('express');
let products = express.Router();
let mongoHelper = require('../util/helper/MongoHelper');
const PRODUCT_CATEGORY_COL = 'categories';
const PRODUCT_DETAIL_COL = 'products';

let ProductService = require('../util/service/productService');

products.get('', (req, res) => {
    res.send({});
    res.end();
});

products.get('/categories', (req, res) => {
    let param = req.query || {};
    let productService = new ProductService();
    let resultPromise;
    if (!param.id) {
        resultPromise = productService.getCategories(param);
    } else {
        // Get all product of category
        let search = {
            catId: param.id
        };
        resultPromise = productService.getProducts(param.id);
    }
    resultPromise.then((data) => {
        if (Array.isArray(data) && data.length > 0) {
            res.status(200).json(data);
            res.end();
        } else {
            res.status(404).json({
                message: 'Data is not found'
            });
        }
    }).catch((error) => {
        res.status(400).send(error);
        res.end();
    });
});

products.get('/detail', (req, res) => {
    let param = req.query || {};
    let productService = new ProductService();
    if (param.id) {
        productService.getProductDetail(param.id).then((data) => {
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
        });
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