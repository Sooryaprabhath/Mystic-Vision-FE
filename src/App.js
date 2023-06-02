import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [sentence, setSentence] = useState("");

  const generateSentence = async () => {
    try {
      const response = await fetch("http://localhost:3001/random-sentence");
      const data = await response.json();
      setSentence(data.sentence);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <h1 className="title">Your Fortune Today is:</h1>
      <button className="generate-button" onClick={generateSentence}>
        Generate
      </button>
      {sentence && <p className="generated-sentence">{sentence}</p>}
    </div>
  );
};

export default App;
