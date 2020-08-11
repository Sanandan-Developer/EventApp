import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';
import styled from 'styled-components';



const state = {
    labels: ['Event 1', 'Event 2', 'Event 3',
    'Event 4', 'Event 5'],
    datasets: [
      {
        label: 'Event',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 70]
      }
    ]
  }
class AdminBarGraph extends Component {
  render() {
    return (
      <AdminBarGraphComponent>
      <div className="bargraph">
      <Bar
          data={state}
          options={
            {responsive: true,
          maintainAspectRatio: false,
              
            title:{
              display:true,
              text:'REGISTRANTS FOR VARIOUS EVENTS',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            layout:{
              padding: {
                left: 40,
                right: 40,
                top: 20,
                bottom: 20
            }
            }
          }}
          
        />
        </div>
        
      </AdminBarGraphComponent>
    )
  }
}

export default AdminBarGraph;


const AdminBarGraphComponent = styled.div`
    align-items: center;
    box-sizing: border-box;

.bargraph{
  
    width : 70vw;
    height: 400px ;
    ${'' /* margin: 0 0 0 300px ; */}
    position:relative;
    padding:20px;
    border:1px solid red;
    
}
 





`;