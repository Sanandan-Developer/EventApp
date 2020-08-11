import React, { Component } from 'react'
import '../components/css/About.css'
import mountain1 from '../images/mountain1 (1).png'
import mountain2 from '../images/mountain2 (1).png'
import text from '../images/text.png'


class About extends Component {
  render() {
      var layer1 = document.getElementById('layer1')
      // eslint-disable-next-line no-restricted-globals
      scroll = Window.pageYOffset;
      document.addEventListener('scroll', function(e){
          var offset = Window.pageYOffset;
          // eslint-disable-next-line no-restricted-globals
          scroll = offset;
          // eslint-disable-next-line no-restricted-globals
          layer1.style.width = (100 + scroll / 5) + '%' ;
      }

      )
              
    return (
      <div>
         <section className="zoom">
             <img src= {mountain1} id ="layer1" alt=""/>
             <img src= {mountain2} id ="layer2" alt=""/>
             <img src= {text} id ="text" alt=""/>
         </section>
         <section className="content">
             <h2>Simple Background using javascript</h2>
             <p> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

         
         </section>
            
      </div>
    )
  }
}
export default About;