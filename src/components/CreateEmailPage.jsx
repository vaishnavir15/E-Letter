import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
function CreateEmailPage(){
    const location = useLocation();
    const { editedImage } = location.state;
    console.log(location.state)


    return(
        <div>
            <header>
                <Navbar></Navbar>
                <div className="yellow-header">
                    <h1 className="middle about-title">E-Letters</h1>
                    <h2 className="middle about">
                        Fill with emails
                    </h2>
                </div>
            </header>
            <section>
                <div className="column-message">
                    {editedImage && (
                    <img src={editedImage} alt=""  />)}
                </div>
                <div className="column-message">
                    <p>
                        Enter your email address...
                    </p>
                    <div>
                        <input type="text" className="words" placeholder="email123@email.com"/>
                    </div>
                </div>
                <div className="column-message">
                    <p>
                        Enter recipient's email address...
                    </p>
                    <div>
                        <input type="text" className="words" placeholder="email123@email.com"/>
                    </div>
                </div>
            </section>
            <footer className="middle footer">
                <div>
                    <button className="send-email">
                        SEND
                    </button>
                </div>
            </footer>

        </div>
    ); 
}

export default CreateEmailPage
