import Category from '../model/Category';
import React from 'react';
const API_LINK = 'http://192.168.60.48:9090';
const ROUTE_NAME = '/products';


const ProductService = {
    getListCategory: () => {
        let arrData = [];
        for (let i = 0; i < 10; i++) {
            let category = new Category();
            category._id = i;
            category.categoryName = 'Computer ' + i;

            arrData.push(category);
        }
        return arrData;
    },
    fetchListCategory: (idCat) => {
        return new Promise((resolve, reject) => {
            let dataConfig = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
            if (!idCat) {
                fetch(`${API_LINK}${ROUTE_NAME}/categories`, dataConfig).then((data) => {
                    resolve(data.json());
                }).catch((error) => {
                    reject(error);
                });
            } else {
                fetch(`${API_LINK}${ROUTE_NAME}/categories?id=${idCat}`, dataConfig).then((data) => {
                    resolve(data.json());
                }).catch((error) => {
                    reject(error);
                });
            }
        });
    },
    fetchProductDetail: (idPro) => {
        return new Promise((resolve, reject) => {
            let dataConfig = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
            if (idPro) {
                fetch(`${API_LINK}${ROUTE_NAME}/detail?id=${idPro}`, dataConfig).then((data) => {
                    resolve(data.json());
                }).catch((error) => {
                    reject(error);
                });
            } else {
                reject('Product not found');
            }
        });
    }

}

export default ProductService;