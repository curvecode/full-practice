import * as ActionTypes from '../Constants/ActionType';

const products = [
    {id: 1, img: 'https://picsum.photos/100', productName: 'Samsung', price: '100'},
    {id: 2, img: 'https://picsum.photos/100', productName: 'iPhone', price: '100'},
    {id: 3, img: 'https://picsum.photos/100', productName: 'iPad', price: '100'},
    {id: 4, img: 'https://picsum.photos/100', productName: 'Sony', price: '100'},
    {id: 5, img: 'https://picsum.photos/100', productName: 'HTC', price: '100'},
    {id: 6, img: 'https://picsum.photos/100', productName: 'Nokia', price: '100'}
];
export const addToCart = (product) => {
    return ({
        type: ActionTypes.ADD_TO_CART,
        storeProduct: product
    });
};

export const getListProduct = () => {
    return ({
        type: ActionTypes.GET_LIST_PRODUCT,
        products: products
    });
};

export const getListProductFromAPI = () => {
    return ({

    });
}
