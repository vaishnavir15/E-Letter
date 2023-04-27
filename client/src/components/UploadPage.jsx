import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import UploadButton from "./images/UploadButton.png";
import EmailSun from "./images/EmailSun.jpg";
import "../styles.css";

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    axios.post("http://localhost:5000/api/upload-image", formData).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <header>
        <Navbar />
        <div className="yellow-header">
          <h1 className="middle about-title">E-Letters</h1>
          <h2 className="middle about">UPLOAD</h2>
        </div>
        <div className="upside-down-triangle-upload"></div>
      </header>
      <section>
        <div className="middle-over home-icon">
          <img src={EmailSun} width="250" alt="" />
        </div>
        <div>
          <button className="pick-button" onClick={() => {document.getElementById("fileInput").click()}}>
            Pick
          </button>
          <input
            style={{ display: "none" }}
            type="file"
            id="fileInput"
            onChange={fileSelectedHandler}
          />
        </div>
        <div className="middle sub-button-upload">
          {selectedFile && (
            <button onClick={fileUploadHandler} className="button-upload">
              <img src={UploadButton} width="250" alt="" />
            </button>
          )}
        </div>
      </section>
      <footer className="footer middle">
        <hr />
        <p>Have cool photos you want others to be able to use? Upload them here for others to use!</p>
      </footer>
    </div>
  );
}

export default UploadPage;
