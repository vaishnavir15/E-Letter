//import { Link,Route, BrowserRouter as Router } from "react-router-dom";
//import AboutPage from "./AboutPage.jsx";
import TestPage from "./TestPage.jsx";
import AboutPage from "./AboutPage.jsx";
import CreateInitialPage from "./CreateInitialPage.jsx";
import {Link} from 'react-router-dom'
import { Route,Routes } from "react-router-dom";
//import { BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import Navbar  from "./Navbar.jsx"
import EmailWIcon from './images/EmailWIcon.png'

function HomePage() {
    return (
      
        
        <div>
            <header>
                <Navbar></Navbar>
                <hr></hr>
                <h1>E-Letters</h1>
            </header>
            <section>
                <img src= {EmailWIcon} width="250" alt=""></img>
                <h3>Start creating your very own E-Letter now! Click the button below</h3>
                <Link to="/PickImage">
                    <button>Let's create</button>
                </Link>
                
            </section>
            <Routes>
                <Route path="/PickImage" component={CreateInitialPage} />
                <Route path="/test" component={TestPage} />
                <Route path="/About" component={AboutPage} />
                <Route path="/Upload" component={TestPage} />
            </Routes>
                
            
            
            

        </div>
      
    );
  }
  
  export default HomePage;
  