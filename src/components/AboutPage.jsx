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
                <div class="yellow-header">
                    <h1 class="middle about-title">E-Letters</h1>
                    <h2 class="middle about">ABOUT</h2>
                </div>
                
                <div>
                    <div class= "container-left-top">
                        <img src= {SpeechRight} width="250" alt=""></img>
                    </div>
                </div>
                
                <div>
                    <div class="container-right-top">
                        <img src= {SpeechLeft} width="250" alt=""></img>
                        
                    </div>
                </div>
                
                <img src= {EmailIcon} width="200" class ="about-icon middle" alt=""></img>
                <div>
                    <div class="container-left-bottom">
                        <img src= {BottomLeftSpeech} width="250" alt=""></img>
                        
                        
                    </div>
                </div>
                
                <div>
                    <div class="container-right-bottom">
                        <img src= {BottomRightSpeech} width="250" alt=""></img>
                        
                    </div>
                </div>
                  
                
                

                
            </section>
            <footer class= "footer middle">
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