/*jshint esversion: 6 */
let ProductDetail = require('../model/ProductDetail');
let mongoHelper = require('../helper/MongoHelper');
const PRODUCT_CATEGORY_COL = 'categories';
const PRODUCT_DETAIL_COL = 'products';
class ProductService {
    constructor() {
        let product = new ProductDetail(null);
    }

    getCategories(search) {
        return new Promise((resolve, reject) => {
            if (search) {
                // Get category information
                mongoHelper.findData(PRODUCT_CATEGORY_COL, search).then((data) => {
                    resolve(data);
                }).catch((error) => {
                    reject(error);
                });
            } else {
                // Get list category
                this.mongoHelper.findData(PRODUCT_CATEGORY_COL, {}).then((data) => {
                    resolve(data);
                }).catch((error) => {
                    reject(error);
                });
            }
        });
    }

    getProducts(idCat) {
        return new Promise((resolve, reject) => {
            // Get list product depend on Category
            let search = idCat ? {
                catId: idCat
            } : {};
            mongoHelper.findData(PRODUCT_DETAIL_COL, search).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    getProductDetail(idProduct) {
        return new Promise((resolve, reject) => {
            if (idProduct) {
                let search = {
                    _id: idProduct
                };
                mongoHelper.findData(PRODUCT_DETAIL_COL, search).then(data => {
                    resolve(data);
                }).catch(error => {
                    reject(error);
                });
            } else {
                reject({
                    message: 'Product Not found',
                    code: 404
                });
            }
        });
    }

    addCategory() {
        return new Promise((resolve, reject) => {
            mongoHelper.insertData(PRODUCT_CATEGORY_COL, data).then(data => {
                resolve(data);
            }).catch(error => {
                reject(error);
            });
        });
    }

}

module.exports = ProductService;

// export default ProductService;
