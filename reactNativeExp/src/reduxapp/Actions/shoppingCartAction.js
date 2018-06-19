import * as ActionType from '../Constants/ActionType';

const products = [
    { id: 1, name: 'iPhone 6', price: 600, discount: '10' },
    { id: 2, name: 'iPhone 7', price: 800, discount: '5' },
    { id: 3, name: 'iPhone 8', price: 1000, discount: '0' },
    { id: 4, name: 'iPhone X', price: 1200, discount: '0' },
  ]
export const addToCart = (product) => ({
    type: ActionType.ADD_TO_CART,
    product: product
})

export const removeFromCart = (product) => ({
    type: ActionType.REMOVE_FROM_CART,
    product: product
})

export const getListProduct = () => ({
    type: ActionType.GET_LIST_PRODUCT,
    products: products
})

export const toggleCart = (status) => ({
    type: ActionType.TOGGLE_CART
})
