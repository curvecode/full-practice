/*jshint esversion: 6 */
import React, { Component } from 'react';
// import CounterContainer from './containers/counterContainer';
// import TotalContainer from './containers/totalContainer';
// import InputNumberContainer from './containers/inputNumberContainer';
import Navbar from '../components/navBarComponent';
// import SimpleCard from '../components/simpleCard';
// import ListTask from '../components/listTaskComp';
import AuthFirebase from './../components/authWithFirebase';

export default class CounterApp extends Component {
    render() {
        return (
            <div>
                <Navbar />
                {/* <CounterContainer /> */}
                {/* <TotalContainer /> */}
                {/* <InputNumberContainer /> */}
                {/* <SimpleCard /> */}
                {/* <ListTask /> */}
                <AuthFirebase />
            </div>
        )
    }
};
