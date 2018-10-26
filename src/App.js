import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";


class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-light ">
        <a className="navbar-brand" href="#">Zombie Eats</a>
      </nav>
      <Header />
      </div>
    );
  }
}

export default App;
