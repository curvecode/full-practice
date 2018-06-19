import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import CounterContainer from './Containers/counterContainer';
import TotalContainer from './Containers/totalContainer';
import ProductContainer from './Containers/productContainer';

export default class CounterApp extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <CounterContainer />
                <TotalContainer />
                <ProductContainer />
            </View>
        );
    }
}
