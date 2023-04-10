import EmailIcon from './images/EmailIcon.png'
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
                <p>
                    Ever wanted to send someone a message with a picture with some flare? 
                    Ever wanted to send a cute note? 
                    Ever wanted to send a personalized meme? 
                    E-Letters was created for those purposes. 
                    This is a website for users to send cute photos + text to email to their friends. 
                </p>
                <img src= {EmailIcon} width="250" alt=""></img>
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