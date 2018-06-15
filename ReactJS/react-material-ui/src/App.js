import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/navBarComponent';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './counterApp/reducers/rootReducer';
import CounterApp from './counterApp';
import { composeWithDevTools } from 'redux-devtools-extension';

// LOGGER MIDDLEWARE
const logger = ({ getState }) => {
    return next => action => {
        console.log('will dispatch', action)

        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action)

        console.log('state after dispatch', getState())

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue;
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

class App extends Component {
    render() {
        return (
            // <div className="App">
            //   <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //     <h1 className="App-title">Welcome to React</h1>
            //   </header>
            //   <p className="App-intro">
            //     Hello world
            //   </p>
            // </div>
            // <div className="App">
            //   <Navbar />
            // </div>
            <Provider store={store}>
                <CounterApp />
            </Provider>
        );
    }
}

export default App;
