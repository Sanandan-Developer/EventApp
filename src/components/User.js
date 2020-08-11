import React, { Component } from 'react'
import styled from 'styled-components'
import img from '../images/img.jpg'


 class UserDashboard extends Component {
  render() {
    return (
        <UserComponent>
     <h1 className="Heading">User Dashboard</h1>
     <h3 className="Heading3">User Dashboard</h3>
     <div className="event">
     <img src ={img} alt = "event1"/>
     <div className="text1">
         <span>Event</span>
         <br/>
         <span>Secret Code</span>
         <br/>
         <span>Link to QR Code</span>
     </div>
     <div className="text1">
         <span>Date</span>
         <label class="container">Attendence Marked
  <input type="checkbox" checked="checked"/>
  <span class="checkmark"></span>
</label>
         
     </div>

     </div>
        
      </UserComponent>
    )
  }
}

export default UserDashboard;

const UserComponent = styled.div`

color: white;

.Heading{
  text-align:center;
  
}
.Heading3{

}
.event{
    display:flex;
}
img{
    float: left;
  width: 33.33%;
  padding: 40px;
  height: 300px; 
  border-radius: 50px;
  box-shadow: 5px 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.text1{
    width: 33.33%;
    height: 300px;
    float: left;
    padding: 50px;

}
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

`;