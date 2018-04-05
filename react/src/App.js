// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'rex-css-framework/build/themes/rex-default.css';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Button icon={{name: 'cart-f', layout: 'left'}}>Add to cart</Button>
          <Button icon={{name: 'search', layout: 'left'}}>検索</Button>
          <Button>キャンペーンにエントリする</Button>
          <Button icon={{name: 'heart-f', layout: 'left'}}>お気に入り</Button>
        </p>
      </div>
    );
  }
}

export default App;
