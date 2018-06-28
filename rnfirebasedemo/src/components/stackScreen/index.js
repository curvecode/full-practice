import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screen/homeScreen';
import ProductScreen from '../screen/productScreen';

const Stack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home'
        }
    },
    Product: {
        screen: ProductScreen,
        navigationOptions: {
            title: 'List product'
        }
    }
}, {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);
export default class Index extends Component {

    render() {
        return (
            <Stack />
        );
    }
}
