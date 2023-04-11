import React from 'react'
import Navbar from './Navbar';
import UploadButton from './images/UploadButton.png'

function UploadPage(){
    return(
        <div>
            <header>
                <Navbar></Navbar>
                <hr></hr>
                <h1>E-Letters</h1>
                <h2>UPLOAD</h2>
                <img src= {UploadButton} width="250" alt=""></img>
            </header>
            <footer>
                <hr></hr>
                <p>
                    Have cool photos you want others to be able to use? Upload them here for others to use!
                </p>
            </footer>
        </div>

    ); 
}

export default UploadPage
