/*
 app
 */

import React, { Component } from 'react';
import logo from '../assets/svg/logo.svg';
import { Button } from 'antd';
import '../styles/app.less';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Link to="/about">Home</Link>
        <Button type="primary">Button</Button>
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;