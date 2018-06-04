import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { createTabNavigator } from 'react-navigation';
import HomeScreen from './homeStack';
import ProductScreen from './productStack';

import Ionicons from 'react-native-vector-icons/Ionicons';

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
    Product: {
        screen: ProductScreen,
        navigationOptions: {
            title: 'Product',
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name={focused ? 'ios-apps' : 'ios-apps-outline'} size={26} color={tintColor} />;
            }
        }
    }

}, {
    initialRouteName: 'ListCategory',
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
        activeTintColor: '#fff',
        labelStyle: {
            fontSize: 14,
        },
        style: {
            backgroundColor: '#f4511e',
        },
        showIcon: true,
        showLabel: false
    }
});
