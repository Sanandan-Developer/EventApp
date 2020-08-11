import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import styled from 'styled-components'
const state = {
  labels: ['Event 1', 'Event 2', 'Event 3',
           'Event 4', 'Event 5'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}

class AdminPieChart extends Component {
  render() {
    return (
      <AdminPieChartComponent>
      <div className="piechart">

        <Doughnut
          data={state}
          options={{
            responsive: true,
          maintainAspectRatio: false,
            title:{
              display:true,
              text:'CONTRIBUTION TO INCOME',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
      </AdminPieChartComponent>
    );
  }
}
export default AdminPieChart;


const AdminPieChartComponent = styled.div`
        width: 100vw;
      
      .piechart{
        width : 30vw;
        height: 400px;
        ${'' /* margin: 0 10px 0 0; */}

        padding: 20px;
        border:1px solid red;
    
      }
      


`;