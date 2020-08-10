import React, { Component } from 'react';
import styled from 'styled-components';
import bgvideo from '../video/video.mp4';            
            
class Background extends Component {
    render() {
      return (
        <BackgroundComponent className="header-container">    
          <div>
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src={bgvideo} type="video/mp4"/>
          </video>
          <h1 className="MainTitle">
            This is the text above video
          </h1>

          </div>
        
        </BackgroundComponent>
          )
        }
      }

      export default Background;


      const BackgroundComponent = styled.div`


video {
    position: fixed;
    min-width: 100vw;
    min-height: 100vh;
    right:0;
    top:0;
    z-index: 0;
}
.MainTitle{
  position: fixed;
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
  

}
    
  
  
  `;