import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Category from './screen/categoryScreen';
import Products from './screen/productsScreen';
import ProductDetail from './screen/productDetailScreen';
import ShoppingCard from './screen/shoppingCartScreen';

const StackNav = createStackNavigator({
    CategoryScreen: {
        screen: Category,
        navigationOptions: {
            title: 'Category'
        }
    },
    ProductsScreen: {
        screen: Products,
        navigationOptions: {
            title: 'List product'
        }
    },
    ProductDetailScreen: {
        screen: ProductDetail,
        navigationOptions: {
            title: 'Product detail'
        }
    },
    ShoppingCartScreen: {
        screen: ShoppingCard,
        navigationOptions: {
            title: 'Shopping cart'
        }
    }
});

export default class App extends Component {
    render() {
        return (
            <StackNav />
        )
    }
}