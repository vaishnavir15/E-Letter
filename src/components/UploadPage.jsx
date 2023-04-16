import React from 'react'
import Navbar from './Navbar';
import UploadButton from './images/UploadButton.png'
import EmailSun from './images/EmailSun.jpg'
import '../styles.css'

function UploadPage(){
    return(
        <div>
            <header>
                <Navbar></Navbar>
                <div class="yellow-header">
                    <h1 class="middle about-title">E-Letters</h1>
                    <h2 class="middle about">UPLOAD</h2>
                </div>
                <div class="upside-down-triangle-upload">
                </div>
                
            </header>
            <section>
            <div class="middle-over home-icon"> 
                <img src= {EmailSun} width="250" alt=""></img>
            </div>
            <div class="middle sub-button-upload">
                <img src= {UploadButton} width="250" alt=""></img>
            </div>
                
            </section>
            <footer class="footer middle">
                <hr></hr>
                <p>
                    Have cool photos you want others to be able to use? Upload them here for others to use!
                </p>
            </footer>
        </div>

    ); 
}

export default UploadPage
