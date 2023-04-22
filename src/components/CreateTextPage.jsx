import React, { useRef, useState, useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Arrow from './images/ArrowRight.png';
import CreateEmailPage from './CreateEmailPage';


function CreateTextPage() {
  const [editedImage, setEditedImage] = useState(null);
  const canvasRef = useRef(null);
  const inputRef = useRef(null);
  const location = useLocation();
  const { selectedImage } = location.state;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = selectedImage;

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      drawText();
    };
  }, [selectedImage]);

  function drawText() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.font = 'bold 48px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';

    ctx.fillText(inputRef.current.value, canvas.width / 2, canvas.height / 2);

    // save the edited image as a variable
    const dataURL = canvas.toDataURL();
    setEditedImage(dataURL);
  }

  function handleClick() {
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <header>
        <Navbar> </Navbar>
        <div className="yellow-header">
          <h1 className="middle about-title">E-Letters</h1>
          <h2 className="middle about">Write your prompt</h2>
        </div>
      </header>
      <section>
        <div className="row-message">
          <div className="column-message">
            <img src={selectedImage} alt="" />
          </div>
          <div>
            <p>Type in your small message...</p>
            <div>
            <input
                type="text"
                ref={inputRef}
                id="message"
                name="message"
                className="words"
                placeholder="Message"
                maxLength="50"
                />

            </div>
            <div>
                <button className= "done-button" onClick={drawText}>
                    Done
                </button>
            </div>
          </div>
        </div>

        <div className="arrow">
          <Link
            to={{
              pathname: '/Email'
            }}
            state= {{editedImage}}
          >
            <button className="button-arrow" onClick={handleClick}>
              <img src={Arrow} alt="" width="200" />
            </button>
          </Link>
        </div>
      </section>
      <footer className="middle footer">
        <div>
          <p>Click the button and then the arrow when you are happy with your message.</p>
        </div>
      </footer>

        {/* render the edited image */}
        {editedImage && (
        <img src={editedImage} alt="" style={{ display: 'none' }} />
        )}

        {/* render the canvas */}
        <canvas
        ref={canvasRef}
        style={{ display: 'none' }}
        width={500}
        height={500}
        />
      <Routes>
      <Route path="/Email" render={(props) => <CreateEmailPage editedImage={props.location.state?.editedImage}></CreateEmailPage>} /> 
      </Routes>
      

      
    </div>
  );
}

export default CreateTextPage;
