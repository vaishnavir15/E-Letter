import React, { useState, useEffect } from "react";
//import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      < HomePage/>
    </div>
  );
}

export default App;