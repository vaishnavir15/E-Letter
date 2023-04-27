import Navbar from "./Navbar";
import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
//import TestPage from "./TestPage";
import { Route,Routes} from "react-router-dom";
import CreateTextPage from "./CreateTextPage";


//images
import Note1 from './images/Note1.jpg'
import Note2 from './images/Note2.jpg'
import Note3 from './images/Note3.jpg'
import Note4 from './images/Note4.jpg'
import Note5 from './images/Note5.jpg'
import Note6 from './images/Note6.jpg'
import Note7 from './images/Note7.jpg'
import Note8 from './images/Note8.png'
function CreateInitialPage(){
    const image1 = Note1;
    const image2 = Note2;
    const image3 = Note3;
    const image4 = Note4;
    const image5 = Note5;
    const image6 = Note6;
    const image7 = Note7;
    const image8 = Note8;
    
    const [selectedImage, setSelectedImage] = useState();

    const fileSelectedHandler = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSelectedImage(url);
        console.log(url)

        
    };



    return (
        <div>
            <header>
                <Navbar> </Navbar>
                <div className="yellow-header">
                    <h1 className="middle about-title">E-Letters</h1>
                    <h2 className="middle about">
                        Select an image
                    </h2>
                </div>     
            </header>
            <section>
                <div>
                    <button className="your-own" onClick={() => {document.getElementById("fileInput").click()}}>
                        Browse
                    </button>
                    <input
                        style={{ display: "none" }}
                        type="file"
                        id="fileInput"
                        onChange={fileSelectedHandler}
                    />
                    {selectedImage && (
                        <Link to= {{ pathname: "/TypeMessage"}} state={{selectedImage}}>
                            <div className="middle display-image">
                                <img src={selectedImage} alt=""></img>
                            </div>
                        
                        </Link>
                    )}
                </div>
                <div className="row">
                    {[image1, image2, image3, image4].map((selectedImage) => {
                        return (
                            <div className="column">
                                <Link to= {{ pathname: "/TypeMessage"}} state={{selectedImage}}>
                                    <img src={selectedImage} alt=""></img>
                                </Link>
                            </div>
                        )
                    })}
                </div>

                <div className="row">
                    {[image5, image6, image7, image8].map((selectedImage) => {
                        return (
                            <div className="column">
                                <Link to= {{ pathname: "/TypeMessage"}} state={{selectedImage}}>
                                    <img src={selectedImage} alt=""></img>
                                </Link>
                            </div>
                        )
                    })}
                </div>

            </section>
            <footer className= "footer middle">
                <div>
                    <p>
                        Scroll and click the desired image for the email.
                    </p> 
                </div>
            </footer>
            <Routes>
                <Route path="/TypeMessage" render={(props) => <CreateTextPage selectedImage={props.location.state?.selectedImage || selectedImage}></CreateTextPage>} /> 
            </Routes>
        </div>
    )
}

export default CreateInitialPage; 