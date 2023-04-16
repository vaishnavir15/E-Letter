import React from 'react'
import Navbar from './Navbar';
import Test from "./images/Test.png"
import Arrow from "./images/ArrowRight.png"
import {Link} from 'react-router-dom'
import { Route,Routes } from "react-router-dom";
function CreateTextPage(){
    return (
        <div>
            <header>
                <Navbar> </Navbar>
                <div class="yellow-header">
                    <h1 class="middle about-title">E-Letters</h1>
                    <h2 class="middle about">
                        Write your prompt
                    </h2>
                </div>
                
            </header>
            <section>
                <div class="row-message">
                    <div class="column-message">
                        <Link to= "/TypeMessage">
                            <img src={Test} alt=""></img>
                        </Link>
                    </div>
                    <div>
                    <p>
                        Type in your small message...
                    </p>
                    <div>
                        <input type="text" class="words" placeholder="Message" maxLength="50"/>
                    </div>
                        </div>  
                </div>
                
                
                <div class="arrow">
                    <Link to= "/Email">
                        <img src= {Arrow} alt="" width="200"></img>
                    </Link>
                    
                </div>
            </section>
            <footer class="middle footer">
                <div>
                    <p>
                        Click the arrow when you are happy with your message.
                    </p>
                </div>
            </footer>

            <Routes>
                <Route path="/Email" component={CreateTextPage} /> 
            </Routes>
        </div>

    );
}

export default CreateTextPage
