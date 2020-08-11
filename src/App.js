import React, { Component } from 'react';
import './components/css/App.css'
import Main from './pages/Main'
import {Switch,Route} from 'react-router-dom';
import About from './pages/About';
import Events from './components/Events'
import './components/css/Navbar.css'
import Login from "./pages/Login";
import ContactUs from './components/ContactUs'
import './components/css/Events.css';
import AdminPanel from './pages/AdminPanel'
import User from './pages/User'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <div>
      <Route path ="/About" component ={About} exact/>
      <Route path = "/Events" component ={Events} exact />
      <Route path = "/Login" component ={Login} exact />
      <Route path = '/ContactUs' component ={ContactUs} />
      <Route path ="/Login/AdminPanel" component ={AdminPanel} exact/>
      <Route path ="/Login/User" component ={User} exact/>
      <Route path = "/" component ={Main} exact />  
      </div>
    );
  }
}

export default App;
