import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import CounterContainer from './Containers/counterContainer';

export default class CounterApp extends Component {
    render() {
        return (
            <CounterContainer />
        );
    }
}
