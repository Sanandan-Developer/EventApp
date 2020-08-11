import React, { Component } from 'react'
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';

class Main extends Component {
  render() {
    return (
      <div>
          <Header />
           <Background />
          <Footer/>
      </div>
    )
  }
}
export default Main;