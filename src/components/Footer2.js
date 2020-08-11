import React, { Component } from 'react';
import styled from 'styled-components';
import checkmark from '../images/Checkmark.png';

 class Footer2 extends Component {
  render() {
    return (
      
         <Footer2Component>
      <Line/>
        <div className="Main-Heading">Main Features</div>
        <div className="Content">
        It is a long established fact that a reader 
        will be distracted by the readable content of a 
        page when looking at its layout.<br/> 
        The point of using Lorem Ipsum is that it has a 
        more-or-less normal distribution of letters, as 
        </div>
        <div class="row">
        <div class="column" >
            <img src = {checkmark} alt =""/>
            <span className ="tabHeading">Feature One</span>
            <span className ="tabContent">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo 
                consequat. 
            </span>
            
        </div>
        <div class="column" >
        <img src = {checkmark} alt =""/>
        <span className ="tabHeading">Feature Two</span>
        <span className ="tabContent">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo 
                consequat. 
            </span>
            
        </div>
        <div class="column" >
            <img src = {checkmark} alt =""/>
            <span className ="tabHeading">Feature Three</span>
            <span className ="tabContent">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo 
                consequat. 
            </span>
        
        </div>
        
        </div>
      </Footer2Component>
    )
  }
}

export default Footer2;

const Line = styled.hr`
border:0;
height: 1px;
background-image: linear-gradient( to right,rgb(0,0,0) ,rgb(18, 241, 230),rgb(0,0,0));
    
`;
const Footer2Component = styled.div`

bottom : 0;

.Main-Heading{
    font-family: sans-serif;
    text-align: center;
    font-size: 30px;
    padding: 20px;
    color: white;

}

.Content{
    font-family: sans-serif;
    text-align: center;
    font-size: 15px;
    padding: 20px;
    margin: 0 200px 0 200px;
    color: white;

}

* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.33%;
  padding: 40px;
  height: 300px; 
  border-radius: 25px;
  
}
.tabContent{
    font-family: sans-serif;
    text-align: justify;
    float: right;
    vertical-align: middle;
    color: white;

}

.tabHeading{
    font-family: sans-serif;
    text-align: center;
    font-size: 20px;
    color: white;

}




.column img {
  opacity: 0.8; 
  cursor: pointer; 
}

.column img:hover {
  opacity: 1;
  padding: 20px;
  border-radius: 40px;
  
}







`;