import React from 'react'
import Navbar from './Navbar';
import Test from "./images/Test.png"
function CreateEmailPage(){
    return(
        <div>
            <header>
                <Navbar></Navbar>
                <hr></hr>
                <h1>E-Letters</h1>
            </header>
            <section>
                <div>
                    <img src= {Test} width="250" alt=""></img>
                </div>
                <div>
                    <p>
                        Enter your email address
                    </p>
                    <div>
                        <input type="text" placeholder="email123@email.com"/>
                    </div>
                </div>
                <div>
                    <p>
                        Enter recipient's email address
                    </p>
                    <div>
                        <input type="text" placeholder="email123@email.com"/>
                    </div>
                </div>
            </section>
            <footer>
                <button>
                    Send
                </button>
            </footer>

        </div>
    ); 
}

export default CreateEmailPage
