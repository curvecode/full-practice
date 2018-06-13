/*jshint esversion: 6 */
import React, { Component } from 'react';
import CounterContainer from './containers/counterContainer';
import TotalContainer from './containers/totalContainer';
import InputNumberContainer from './containers/inputNumberContainer';

export default class CounterApp extends Component {
    render() {
        return (
            <div>
                <CounterContainer />
                <TotalContainer />
                <InputNumberContainer />
            </div>
        )
    }
};
