import React from 'react'
import Navbar from './Navbar';
import Test from "./images/Test.png"
import Arrow from "./images/ArrowRight.png"
import {Link} from 'react-router-dom'
import { Route,Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import CreateEmailPage from "./CreateEmailPage";

function CreateTextPage(props){
    let location  = useLocation();

    console.log(location.state.selectedImage)
    const { selectedImage } = location.state;
    
    return (
        <div>
            <header>
                <Navbar> </Navbar>
                <div className="yellow-header">
                    <h1 className="middle about-title">E-Letters</h1>
                    <h2 className="middle about">
                        Write your prompt
                    </h2>
                </div>
                
            </header>
            <section>
                <div className="row-message">
                    <div className="column-message">
                        <img src={selectedImage} alt=""></img> 
                    </div>
                    <div>
                    <p>
                        Type in your small message...
                    </p>
                    <div>
                        <input type="text" className="words" placeholder="Message" maxLength="50"/>
                    </div>
                        </div>  
                </div>
                
                
                <div className="arrow">
                    <Link to= "/Email">
                        <img src= {Arrow} alt="" width="200"></img>
                    </Link>
                    
                </div>
            </section>
            <footer className="middle footer">
                <div>
                    <p>
                        Click the arrow when you are happy with your message.
                    </p>
                </div>
            </footer>

            <Routes>
                <Route path="/Email" component={CreateEmailPage} /> 
            </Routes>
        </div>

    );
}

export default CreateTextPage
