import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Shopping Cart</a>
      </nav>
      <Header />
      </div>
    );
  }
}

export default App;
