import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../images/img.jpg';


class Footer1 extends Component {
  render() {
    return (
      <Footer1Component>
      <Line/>
        <div className="Main-Heading">Featured</div>
        <div className="Content">
        It is a long established fact that a reader 
        will be distracted by the readable content of a 
        page when looking at its layout.
        <br/>
        The point of using Lorem Ipsum is that it has a 
        more-or-less normal distribution of letters, as 
        </div>
        <div class="row">
        <div class="column" >
            <img src = {img} alt =""/>
            
        </div>
        <div class="column" >
        <img src = {img} alt =""/>
            
        </div>
        <div class="column" >
        <img src = {img} alt =""/>
        
        </div>
        
        </div>
        

        
        
      </Footer1Component>
    )
  }
}
export default Footer1;

const Line = styled.hr`
border:0;
height: 1px;
background-image: linear-gradient( to right,rgb(0,0,0) ,rgb(18, 241, 230),rgb(0,0,0));
    
`;


const Footer1Component = styled.div`

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

img {
  float: left;
  width: 33.33%;
  padding: 40px;
  height: 300px; 
  border-radius: 50px;
  box-shadow: 5px 4px 8px 0 rgba(0, 0, 0, 0.2);

  
}
.column img {
  opacity: 0.8; 
  cursor: pointer; 
}

.column img:hover {
  opacity: 1;
  padding: 20px;
  border-radius: 60px;
  
  

}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

`;
