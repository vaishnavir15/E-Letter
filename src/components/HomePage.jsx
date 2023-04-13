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
import '../styles.css'

function HomePage() {
    return (
      
        
        <div>
            <header>
                <Navbar></Navbar>
                <h1 class="middle title">E-Letters</h1>
            </header>
            <section>
                <div class="middle"> 
                    <img src= {EmailWIcon} width="250" alt=""></img>
                </div>
                
                <h3 class="middle">Start creating your very own E-Letter now! Click the button below</h3>
                <div class="middle">
                    <Link to="/PickImage">
                        <button>Let's create</button>
                    </Link>
                </div>
                
                
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
  