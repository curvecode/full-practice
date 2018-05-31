import React from 'react';
import AppConfig from '../AppConfig';
const LoginService = {
    initConfig: {
        method: 'POST',
        header: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: {}
    },

    /**
     * Handle login with return by promise
     * @param {user} userObj 
     * @returns Promise<any>
     */
    handleLoginByPromise: (userObj) => {
        let dataConfig = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj)
        }
        // dataConfig.body = Object.assign({}, userObj);
        // console.log(AppConfig.SERVER_URL);
        return new Promise((resolve, reject) => {
            fetch(`http://192.168.61.13:9090/users/login`, dataConfig).then((data) => {
                resolve(data.json());
            }).catch((error) => {
                reject(error);
            });
        });
        // return fetch(`${AppConfig.SERVER_URL}users/login`, dataConfig).then((response) => {

        // }).catch((error) => {

        // });
    },

    handleLoginByAsyncAwait: async (userObj) => {
        let dataConfig = Object.assign({}, LoginService.initConfig);
        dataConfig.body = Object.assign({}, userObj);
        try {
            let response = await fetch(`${AppConfig.SERVER_URL}users/login`, dataConfig);
        } catch (error) {

        }
    }

}

export default LoginService;