import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/common/header.component';
import Footer from './component/common/footer.component';
import TodoComp from './component/todo.component';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    {/* <p>Edit <code>src/App.tsx</code> and save to reload.</p> */}
                    {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
                    <div className="container">
                        <Header />
                        <TodoComp />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
