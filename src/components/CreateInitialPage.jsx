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
                <div class="yellow-header">
                    <h1 class="middle about-title">E-Letters</h1>
                    <h2 class="middle about">
                        Pick an image
                    </h2>
                </div>     
        </header>
        <section>
            <div class="row">
                <div class="column">
                    <Link to= "/TypeMessage">
                        <img src={Note1} alt=""></img>
                    </Link>
                </div>
                <div class="column">
                    <Link to= "/TypeMessage">
                        <img src={Note2} alt=""></img>
                    </Link>
                </div>
                <div class="column">
                    <Link to= "/TypeMessage">
                        <img src={Note3} alt=""></img>
                    </Link>
                </div>
                <div class="column">
                    <Link to= "/TypeMessage">
                        <img src={Note4} alt=""></img>
                    </Link>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <Link to= "/TypeMessage">
                        <img src={Note5} alt=""></img>
                    </Link>
                </div>
                <div class="column">
                    <Link to= "/TypeMessage">
                        <img src={Note6} alt=""></img>
                    </Link>
                </div>
                <div class="column">
                    <Link to= "/TypeMessage">
                        <img src={Note7} alt=""></img>
                    </Link>
                </div>
                <div class="column">
                    <Link to= "/TypeMessage">
                        <img src={Note8} alt=""></img>
                    </Link>
                </div>
            </div>

        </section>
        <footer class= "footer middle">
                <div>
                    <p>
                        Scroll and click the desired image for the email.
                    </p> 
                </div>
        </footer>
        <Routes>
                <Route path="/TypeMessage" component={CreateTextPage} /> 
        </Routes>

    </div>
    
)

}
export default CreateInitialPage; 