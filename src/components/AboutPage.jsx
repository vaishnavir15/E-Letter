import EmailIcon from './images/EmailIcon.png'
import SpeechLeft from './images/SpeechLeft.png'
import SpeechRight from './images/SpeechRight.png'
import BottomLeftSpeech from './images/BottomLeftSpeech.png'
import BottomRightSpeech from './images/BottomRightSpeech.png'
import Navbar from './Navbar';
function AboutPage() {
    return (
        <div>
            <header>
                <Navbar> </Navbar>
                <hr></hr>
                <h1>E-Letters</h1>
            </header>
            <section>
                <h2>ABOUT</h2>
                <hr></hr>
                <div>
                    <div>
                        <img src= {SpeechRight} width="250" alt=""></img>
                    </div>
                    <div>
                        <p>
                            Ever wanted to send someone a message with a picture with some flare? 
                        </p>
                    </div>
                </div>
                
                <div>
                    <div>
                        <img src= {SpeechLeft} width="250" alt=""></img>
                    </div>
                    <div>
                        <p>
                            Ever wanted to send a cute note? 
                            <br></br>
                            Ever wanted to send a personalized meme? 
                        </p>
                    </div>
                </div>
                
                <img src= {EmailIcon} width="250" alt=""></img>
                <div>
                    <div>
                        <img src= {BottomLeftSpeech} width="250" alt=""></img>
                    </div>
                    <div>
                        <p>
                            E-Letters was created for those purposes. 
                        </p>
                    </div>
                </div>
                
                <div>
                    <div>
                        <img src= {BottomRightSpeech} width="250" alt=""></img>
                    </div>
                    <div>
                        <p>
                            This is a website for users to send cute photos + text to email to their friends. 
                        </p>
                    </div>
                </div>
                <hr></hr>
                <p>
                    Just follow the prompts. 
                    It is that simple.
                </p>   
                
                

                
            </section>
        </div>
    
    )
}
export default AboutPage;