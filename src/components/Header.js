import React, { Component } from 'react';
import logo from '../images/logof.png';
import styled from 'styled-components';
import {Navigation} from './NavBar';

  class Header extends Component {
        render() {
          return (
            <HeaderComponent className="header-container">
            <div className ="header-top">
              <Logo src= {logo}  alt="" />
              <Navigation/>
              
</div>
              
            </HeaderComponent>
            
          )
        }
      }


export default Header;


//Logo

const Logo = styled.img`
    width: 18rem;
    height: 10rem;
    position: absolute;
    top: 0;
    left: 30px;
    padding:0px;
    
`;


//header container
const HeaderComponent = styled.div`
       .header-top{
         position: Relative;
         height: 10rem;
         z-index:1;
         width:100vw;
         margin-top:0;

       }

`;



