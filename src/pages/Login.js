import React, { Component } from 'react'
import { generateMedia } from "styled-media-query";
import LoginForm from "../components/Login";
import Header from '../components/Header'
class Login extends Component {
  render() {
    return (
      <div className="main-login-container">
        <Header/>
        <LoginForm />
        
      </div>
    );
  }
}
export default Login;

const customMedia = generateMedia({
  tablet:'640px',
  lgTablet:'740px'
})

