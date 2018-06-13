import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/navBarComponent';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './counterApp/reducers/rootReducer';
import CounterApp from './counterApp';

const store = createStore(
    rootReducer
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
