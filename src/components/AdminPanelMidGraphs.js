import React, { Component } from 'react'
import AdminBarGraph from '../components/AdminBarGraph'
import styled from 'styled-components';
import AdminPieChart from './AdminPieChart'




class AdminPanelMidGraphs extends Component {
  render() {
    return (
      <AdminPanelMidGraphsComponent>
      <AdminBarGraph/>
      <AdminPieChart/>

        
      </AdminPanelMidGraphsComponent>
    )
  }
}

export default AdminPanelMidGraphs;

const AdminPanelMidGraphsComponent = styled.div`
    width: 100vw;
    display:flex;
    height: 400px;
    margin:0 0 0 250px;
    



`;


