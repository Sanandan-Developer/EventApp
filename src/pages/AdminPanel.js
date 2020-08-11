import React, { Component } from 'react'
import AdminPanelHeader from '../components/AdminPanelHeader'
import AdminPanelMidGraphs from '../components/AdminPanelMidGraphs'
import AdminRegistrations from '../components/AdminRegistrations'
import { NavigationBar } from '../components/AdminSideDrawer';
import Sidebar from '../components/SideBarAdmin';



class AdminPanel extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Sidebar/>
        <AdminPanelHeader/>
        <AdminPanelMidGraphs/>
        <AdminRegistrations/>
      </div>
    )
  }
}
export default AdminPanel;