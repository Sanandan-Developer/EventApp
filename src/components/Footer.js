import React, { Component } from 'react';
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Footer4 from './Footer4'
import styled from 'styled-components';


class Footer extends Component {
  render() {
    return (
      <FooterComponent>
      <Footer1/>
      <Footer2/>
      <Footer4/>
      
        
      </FooterComponent>
    )
  }
}


export default  Footer;

const FooterComponent = styled.div`

    bottom: 0;
    left:0;
    position: relative;
    width: 100%;
    background: #000000;
    height: 20px;
    margin-top: auto;
    
    



`;
