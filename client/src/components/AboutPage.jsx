import EmailIcon from './images/EmailIcon.png'
import SpeechLeft from './images/SpeechLeft.png'
import SpeechRight from './images/SpeechRight.png'
import BottomLeftSpeech from './images/BottomLeftSpeech.png'
import BottomRightSpeech from './images/BottomRightSpeech.png'
import Navbar from './Navbar';
import '../styles.css'
import React from 'react';

function AboutPage() {
    return (
        <div>
            <header>
                <Navbar> </Navbar> 
            </header>
            <section>
                <div className="yellow-header">
                    <h1 className="middle about-title">E-Letters</h1>
                    <h2 className="middle about">ABOUT</h2>
                </div>
                
                <div>
                    <div className= "container-left-top">
                        <img src= {SpeechRight} width="250" alt=""></img>
                    </div>
                </div>
                
                <div>
                    <div className="container-right-top">
                        <img src= {SpeechLeft} width="250" alt=""></img>
                        
                    </div>
                </div>
                
                <img src= {EmailIcon} width="200" className ="about-icon middle" alt=""></img>
                <div>
                    <div className="container-left-bottom">
                        <img src= {BottomLeftSpeech} width="250" alt=""></img>
                        
                        
                    </div>
                </div>
                
                <div>
                    <div className="container-right-bottom">
                        <img src= {BottomRightSpeech} width="250" alt=""></img>
                        
                    </div>
                </div>
                  
                
                

                
            </section>
            <footer className= "footer middle">
                <div>
                    <p>
                        Just follow the prompts. 
                        It is that simple.
                    </p> 
                </div>
            </footer>
        </div>
    
    )
}
export default AboutPage;