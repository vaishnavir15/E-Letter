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
                <hr></hr>
                <h1>E-Letters</h1>
            </header>
            <section>
                <div>
                    <img src= {Test} alt="" width= "300"></img>
                </div>
                <div>
                    <p>
                        Type in your small message...
                    </p>
                    <div>
                        <input type="text" placeholder="Message" maxLength="50"/>
                    </div>
                </div>
                <div>
                    <Link to= "/Email">
                        <img src= {Arrow} alt="" width="200"></img>
                    </Link>
                    
                </div>
            </section>

            <Routes>
                <Route path="/Email" component={CreateTextPage} /> 
            </Routes>
        </div>

    );
}

export default CreateTextPage
