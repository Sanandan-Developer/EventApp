import React, { Component } from 'react'
import styled from 'styled-components'

 class AdminPanelHeader extends Component {
  render() {
    return (
      <AdminPanelHeaderComponent>
      
      <div className="top-row">
     <div class="card">
     <h4><b>Events Created</b></h4> 
      </div>
      <div class="card">
     <h4><b>Events Created</b></h4> 
      </div>
      <div class="card">
     <h4><b>Events Created</b></h4> 
      </div>
      </div>
  </AdminPanelHeaderComponent>

    )
  }
}

export default AdminPanelHeader;

const AdminPanelHeaderComponent = styled.div`
    height: 10rem;
    align-items:center;
    margin: 0;
    justify-content:center;


.top-row{
   width: 100vw;
  position: relative;
  z-index:1;
  top: 0;
  margin: 0 20vw 0 20vw;
  align-items: center;
  justify-content:center;

  
}
* {
  box-sizing: border-box;
}
.card {
  
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border: 1px solid var(--main-blue);
  color: var(--main-blue);
  float: left;
  padding: 30px;
  margin: 30px;
  position: relative;
  width: 25%;
  display:flex;
  
  
}


.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card {
  box-shadow: 0 4px 4px 0 rgba(57,190,180);
  transition: 0.3s;
  border-radius: 5px; 
}









`;