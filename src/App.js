import React, { Component } from "react";
import Order from "./components/Order";
import Header from "./components/Header";
// import About from './components/About';
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
            <Link className="navbar-brand" to="/">Zombie Eats</Link>
            <Link className="navbar-brand" to="/order/">Order</Link>
          </nav>
        <Route path="/" exact component={Header} />
        <Route path="/order/" component={Order} />
        </div>
        </Router>
      )
    }
  }
   

export default AppRouter;





{/* <Link className="navbar-brand" to="/about/">About</Link> */}
{/* <Route path="/about/" component={About} /> */}
