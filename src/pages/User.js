import React, { Component } from 'react'
import Header from '../components/Header'
import UserDashboard from '../components/User'
import styled from 'styled-components'

class User extends Component {
  render() {
    return (
        <div>
      <Header/>
      <UserDashboard/>
      </div>
        
      
    )
  }
}

export default User;







