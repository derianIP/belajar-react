import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logo2 from './avatar.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>With Other Component</p>
        <div>
          <Header/>
          <Content/>
        </div>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
          <h1>Header</h1>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <h1>Content</h1>
        <p>The Content Text!!!</p>
      </div>
    );
  }
}

export default App;
