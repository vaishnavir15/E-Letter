import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import emailjs from 'emailjs-com';
import imageCompression from 'browser-image-compression';


function CreateEmailPage(){
    const location = useLocation();
    const { editedImage } = location.state;
    console.log(location.state)

    const [compressedImage, setCompressedImage] = useState(editedImage);
      
    async function emailSend(e){
        e.preventDefault();

        // Validate email input
        const emailInput = document.getElementsByName("to_email")[0].value;
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(emailInput)) {
            alert("Invalid email address");
            return;
        }
        var params = {
            from_name: document.getElementsByName("from_name")[0].value,
            to_name: document.getElementsByName("to_name")[0].value,
            to_email: document.getElementsByName("to_email")[0].value,
            emailImage: compressedImage,
        }

        emailjs.send(
            'service_u1rp92l', 
            'template_g6ou55k', 
            params, 
            'ZPzjjYB5M7rMX0_qa'
        ).then(res=>{
            console.log(res);
            console.log(compressedImage)
            alert("Email sent successfully")
        }).catch(err=> console.log(err));
    }

    async function compressImage() {
        console.log(editedImage);
        const base64Image=  editedImage;
        const binaryImage = atob(base64Image.split(',')[1]);
        const binaryImageArray = new Uint8Array(binaryImage.length);
        for (let i = 0; i < binaryImage.length; i++) {
            binaryImageArray[i] = binaryImage.charCodeAt(i);
        }
        const blobImage = new Blob([binaryImageArray], {type: 'image/png'});
        const fileImage = new File([blobImage], 'image.png', {type: 'image/png'});
    
        try {
            const options = {
                maxSizeMB: .5,
                maxWidthOrHeight: 1920,
                useWebWorker: true
            };
    
            const compressedFile = await imageCompression(fileImage, options);
            console.log(compressedFile);
            const reader = new FileReader();
            reader.readAsDataURL(compressedFile);
            reader.onloadend = () => {
                const compressedImageDataUrl = reader.result.toString();
                setCompressedImage(compressedImageDataUrl);
                console.log(compressedImageDataUrl);
            };
        } catch (error) {
            console.log(error);
        }
    }
    

    return(
        <div>
            <header>
                <Navbar></Navbar>
                <div className="yellow-header">
                    <h1 className="middle about-title">E-Letters</h1>
                    <h2 className="middle about">
                        Fill with information
                    </h2>
                </div>
            </header>
            <section>
                <form>
                    <div className="column-message">
                        {compressedImage && (
                        <img src={editedImage} alt="" id="emailImage" onLoad={compressImage} />)}
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

export default CreateEmailPage;
