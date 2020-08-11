import React, { Component } from 'react'
import styled from 'styled-components'

 class AdminRegistrations extends Component {
  render() {
    return (
      <AdminRegistrationsComponent>
      <p>RECENT REGISTRATIONS</p>
      <div class="grid-container">
        <div>LoremIpsum</div>
        <div>LoremIpsum</div>
        <div>LoremIpsum</div>  
        <div>LoremIpsum</div>
        <div><button class="button"><span>Details</span></button></div>
        </div>
        <div class="grid-container">
        <div>LoremIpsum</div>
        <div>LoremIpsum</div>
        <div>LoremIpsum</div>
        <div>LoremIpsum</div>
        <div><button class="button"><span>Details</span></button></div>
        </div>
        <div class="grid-container">
        <div>LoremIpsum</div>  
        <div>LoremIpsum</div>
        <div>LoremIpsum</div>
        <div>LoremIpsum</div>
        <div><button class="button"><span>Details</span></button></div>
        </div>
        <div class="grid-container">
        <div>LoremIpsum</div>
        <div>LoremIpsum</div>
        <div>LoremIpsum</div>
        <div>LoremIpsum</div>
        <div><button class="button"><span>Details</span></button></div>  
        </div>
        <div class="grid-container">
        <div>LoremIpsum</div>
        <div>LoremIpsum</div>
        <div>LoremIpsum</div>
        <div>LoremIpsum</div>
        <div><button class="button"><span>Details</span></button></div>
        </div>
        
    
        
      </AdminRegistrationsComponent>
    )
  }
}


export default AdminRegistrations ;


const AdminRegistrationsComponent = styled.div`

      margin: 100px 25vw;
      position:relative;
    .grid-container {
      display: grid;
      grid-template-columns: 15vw 15vw 15vw 15vw 15vw;
      background: linear-gradient(90deg, rgba(7,218,222,0.9652406417112299) 5%, rgba(56,96,98,1) 53%, rgba(16,17,17,0.9518716577540107) 100%);
      border: 3px solid black;
}

.grid-container > div {
  position:relative;
  text-align: center;
  font-size: 20px;
  padding: 20px;
}
.button {
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 10px;
  padding: 10px;
  width: 90px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 2px;
}
.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.button span:after {
  content:'>>';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
p{
  color: white;
  font-size: 30px;
  text-align:left;
  padding:10px;
}



 `;