import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterApp from './counterApp';
import rootReducer from './Reducers/rootReducers';


const store = createStore(
    rootReducer
);
export default class ReduxCounterApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <CounterApp />
            </Provider>
        );
    }
}
