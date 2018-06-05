import React, { Component } from 'react';
import { createTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screen/homeScreen';
import ProductStackScreen from '../productStackComponent';

export default createTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={26} color={tintColor} />;
            }
        }
    },
    ProductStack: {
        screen: ProductStackScreen,
        navigationOptions: {
            title: 'Product',
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name={focused ? 'ios-list' : 'ios-list-outline'} size={26} color={tintColor} />;
            }
        }
    }
}, {
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#fff',
            labelStyle: {
                fontSize: 14,
            },
            style: {
                backgroundColor: '#4286f4',
            },
            showIcon: true,
            showLabel: false
        }
    }
);
