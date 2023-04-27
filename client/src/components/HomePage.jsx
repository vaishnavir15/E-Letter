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
                <div className="upside-down-triangle">
                </div>
                <h1 className="middle title">E-Letters</h1>
                
                
            </header>
            
            <section>
                <div className="middle-over home-icon"> 
                    <img src= {EmailWIcon} width="200" alt=""></img>
                </div>
                
                <h3 className="middle subtext">Start creating your very own E-Letter now! Click the button below</h3>
                <div className="middle sub-button">
                    <Link to="/PickImage">
                        <button>Let's create</button>
                    </Link>
                </div>
                
                
            </section>
            <footer className= "footer">
                <div>

                </div>
            </footer>
            <Routes>
                <Route path="/PickImage/*" component={CreateInitialPage} />
                <Route path="/test" component={TestPage} />
                <Route path="/About" component={AboutPage} />
                <Route path="/Upload" component={TestPage} />
            </Routes>
                
            
            
            

        </div>
      
    );
  }
  
  export default HomePage;
  