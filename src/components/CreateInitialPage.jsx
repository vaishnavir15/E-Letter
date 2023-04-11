import Navbar from "./Navbar";
import React from 'react';
import {Link} from 'react-router-dom'
//import TestPage from "./TestPage";
import { Route,Routes } from "react-router-dom";
import CreateTextPage from "./CreateTextPage";
//images
import Note1 from './images/Note1.jpg'
import Note2 from './images/Note2.jpg'
import Note3 from './images/Note3.jpg'
import Note4 from './images/Note4.jpg'
import Note5 from './images/Note5.jpg'
import Note6 from './images/Note6.jpg'
import Note7 from './images/Note7.jpg'
import Note8 from './images/Note8.png'
function CreateInitialPage(){
return (
    <div>
        <header>
                <Navbar> </Navbar>
                <hr></hr>
                <h1>E-Letters</h1>
        </header>
        <section>
            <div>
                <h2>
                    Pick an image
                </h2>
            </div>
        </section>
        <section>
            <div>
                <div>
                    <Link to= "/TypeMessage">
                        <img src= {Note1} width="250" alt=""></img>
                    </Link>
                </div>
                <div>
                    <Link to= "/TypeMessage">
                        <img src= {Note2} width="250" height= "300"alt=""></img>
                    </Link>
                </div>
                <div>
                    <Link to= "/TypeMessage">
                        <img src= {Note3} width="250" height= "300"alt=""></img>
                    </Link>
                </div>
                <div>
                    <Link to= "/TypeMessage">
                        <img src= {Note4} width="250" alt=""></img>
                    </Link>
                </div>
            </div>
            <div>
                <div>
                    <Link to= "/TypeMessage">
                        <img src= {Note5} width="250" height= "300"alt=""></img>
                    </Link>
                </div>
                <div>
                    <Link to= "/TypeMessage">
                        <img src= {Note6} width="250" alt=""></img>
                    </Link>
                </div>
                <div>
                    <Link to= "/TypeMessage">
                        <img src= {Note7} width="250" alt=""></img>
                    </Link>
                </div>
                <div>
                    <Link to= "/TypeMessage">
                        <img src= {Note8} width="250" alt=""></img>
                    </Link>
                </div>
            </div>
        </section>
        <Routes>
                <Route path="/TypeMessage" component={CreateTextPage} /> 
        </Routes>

    </div>
    
)

}
export default CreateInitialPage; 