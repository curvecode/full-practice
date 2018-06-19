import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import CounterApp from './counterApp';
import rootReducer from './Reducers/rootReducers';

import { composeWithDevTools } from 'redux-devtools-extension';

// LOGGER MIDDLEWARE
logger = ({ getState }) => {
    return next => action => {
        console.log('will dispatch', action)

        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action)

        console.log('state after dispatch', getState())

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}

// MIDDLEWARE
const middewares = [
	// THUNK
	// thunkMiddleware,

	// PROMISE
	// promise(),

	// Custom Middleware
	logger
];


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middewares))
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
