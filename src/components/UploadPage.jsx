import React, {useState} from 'react'
import Navbar from './Navbar';
import UploadButton from './images/UploadButton.png'
import EmailSun from './images/EmailSun.jpg'
import '../styles.css'
import axios from "axios"

function UploadPage(){
    const [fileInput, setFileInput] = useState(null);

    function fileSelectedHandler(event)
    {
        console.log(event.target.files[0]);
    }
    function fileUploadHandler(){
        fileInput.click();
    }
    return(
        <div>
            <header>
                <Navbar></Navbar>
                <div className="yellow-header">
                    <h1 className="middle about-title">E-Letters</h1>
                    <h2 className="middle about">UPLOAD</h2>
                </div>
                <div className="upside-down-triangle-upload">
                </div>
                
            </header>
            <section>
            <div className="middle-over home-icon"> 
                <img src= {EmailSun} width="250" alt=""></img>
            </div>
            <div>
                <button className="pick-button" onClick={fileUploadHandler}>Pick </button>
            </div>
            <div>
                <input 
                style={{display:"none"}}
                type="file" 
                onChange={fileSelectedHandler}
                ref={input => setFileInput(input)} >
                
                </input>
                
            </div>
            <div className="middle sub-button-upload">
                <button onClick={fileUploadHandler} className="button-upload">
                    <img src= {UploadButton} width="250" alt=""></img>
                </button>
                
            </div>
                
            </section>
            <footer className="footer middle">
                <hr></hr>
                <p>
                    Have cool photos you want others to be able to use? Upload them here for others to use!
                </p>
            </footer>
        </div>

    ); 
}

export default UploadPage
