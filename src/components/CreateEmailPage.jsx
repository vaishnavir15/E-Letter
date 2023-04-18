import React from 'react'
import Navbar from './Navbar';
import Test from "./images/Test.png"
function CreateEmailPage(){
    return(
        <div>
            <header>
                <Navbar></Navbar>
                <div class="yellow-header">
                    <h1 class="middle about-title">E-Letters</h1>
                    <h2 class="middle about">
                        Fill with emails
                    </h2>
                </div>
            </header>
            <section>
                <div class="column-message">
                    <img src= {Test} width="250" alt=""></img>
                </div>
                <div class="column-message">
                    <p>
                        Enter your email address...
                    </p>
                    <div>
                        <input type="text" class="words" placeholder="email123@email.com"/>
                    </div>
                </div>
                <div class="column-message">
                    <p>
                        Enter recipient's email address...
                    </p>
                    <div>
                        <input type="text" class="words" placeholder="email123@email.com"/>
                    </div>
                </div>
            </section>
            <footer class="middle footer">
                <div>
                    <button class="send-email">
                        SEND
                    </button>
                </div>
            </footer>

        </div>
    ); 
}

export default CreateEmailPage
