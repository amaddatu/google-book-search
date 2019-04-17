import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Model2View from './components/model2view';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={
          props => (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          )
        } />
        <Route exact path="/b" render={
          props => (
            <Model2View></Model2View>
          )
        } />
      </Router>
    );
  }
}

export default App;
