/*jshint esversion: 6 */
import React, { Component } from 'react';
import CounterContainer from './containers/counterContainer';
import TotalContainer from './containers/totalContainer';
import InputNumberContainer from './containers/inputNumberContainer';
import Navbar from '../components/navBarComponent';
import SimpleCard from '../components/simpleCard';

export default class CounterApp extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <CounterContainer />
                <TotalContainer />
                <InputNumberContainer />
                <SimpleCard />
            </div>
        )
    }
};
