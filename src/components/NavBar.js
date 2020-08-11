import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';


export class Navigation extends Component{
    render(){
        return(
            <div className ="div1">
            <div className="navdiv" align="left">
            <Route>
            <Navbar expand="lg">
                
                <Navbar.Collapse id= "basic-navbar-nav"></Navbar.Collapse>
                <Nav className="NavBar">
                <ul>
                
                   
                    <li>
                    <Link  to ="/About" className="navtab" >About Us</Link>
                    </li>
                    <li>
                    <Link  to ="/Events" className="navtab" >Events</Link>
                    </li>
                    <li>
                    <Link  to ="/Login" className="navtab">LogIn</Link>
                    </li>
                    
                    <li>
                    <Link  to ="/ContactUs" className="navtab" >Contact Us</Link>
                    </li>
                    
                </ul>   

                </Nav>
            
            </Navbar>
            </Route>
            </div>
            </div>
        )
    }
}




