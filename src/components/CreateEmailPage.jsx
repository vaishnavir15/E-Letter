import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import emailjs from 'emailjs-com'
function CreateEmailPage(){
    const location = useLocation();
    const { editedImage } = location.state;
    console.log(location.state)


    function emailSend(e){
        e.preventDefault();
        var params = {
            from_name: document.getElementsByName("from_name")[0].value,
            to_name: document.getElementsByName("to_name")[0].value,
            from_email: document.getElementsByName("from_email")[0].value,
            to_email: document.getElementsByName("to_email")[0].value,
            emailImage: document.getElementById("emailImage").value,
        }
        emailjs.send(
            'service_u1rp92l', 
            'template_g6ou55k', 
            params, 
            'ZPzjjYB5M7rMX0_qa'
        ).then(res=>{
            console.log(res)
        }).catch(err=> console.log(err));
    }
    


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
                <form>
                    <div className="column-message">
                        {editedImage && (
                        <img src={editedImage} alt="" id="emailImage" />)}
                    </div>
                    <div className="column-message">
                        <p>
                            Enter your name...
                        </p>
                        <div>
                            <input type="text" className="email-input-name" name="from_name" placeholder="Name"/>
                        </div>
                    </div>
                    <div className="column-message">
                        <p>
                            Enter the recipient's name...
                        </p>
                        <div>
                            <input type="text" className="email-input-name" name="to_name" placeholder="Name"/>
                        </div>
                    </div>
                    <div className="column-message">
                        <p>
                            Enter your email address...
                        </p>
                        <div>
                            <input type="text" className="email-input" name="from_email" placeholder="email123@email.com"/>
                        </div>
                    </div>
                    <div className="column-message">
                        <p>
                            Enter recipient's email address...
                        </p>
                        <div>
                            <input type="text" className="email-input" name="to_email" placeholder="email123@email.com"/>
                        </div>
                    </div>





                </form>
                
            </section>
            <footer className="middle footer">
                <div>
                    <button className="send-email" onClick={emailSend} >
                        SEND
                    </button>
                </div>
            </footer>

        </div>
    ); 
}

export default CreateEmailPage
