import React, { Component } from "react";
import Order from "./components/Order";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class AppRouter extends Component {
  constructor() {
      super() 
      this.state = { 
          toggleColor: true, 
      }
  }

  navBarColor = () => {
    this.setState({toggleColor: !(this.state.toggleColor)})
  }

    render() {
      return (
        <Router>
        <div>
          <nav className={`navbar navbar-dark ${this.state.toggleColor ? 'bg-dark' : 'bg-danger'}`}>
            <Link className="navbar-brand" onClick={this.navBarColor} to="/">Zombie Eats</Link>
            <Link className="navbar-brand" onClick={this.navBarColor} to="/order/">Order</Link>
          </nav>
        <Route path="/" exact component={Header} />
        <Route path="/order/" component={Order} />
        </div>
        </Router>
      )
    }
  }
   

export default AppRouter;