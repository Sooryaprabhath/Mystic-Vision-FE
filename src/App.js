import React, { useState } from "react";
import "./App.css";
import { InfinitySpin } from 'react-loader-spinner';

const App = () => {
  const [sentence, setSentence] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const generateSentence = async () => {
    setSentence("");
    if (clickCount === 0) {
      setIsClicked(true);
      try {
        const response = await fetch(
          "https://mystic-vision-be-hpur-b2lafqs24-sooryaprabhath.vercel.app/random-sentence"
        );
        const data = await response.json();
        setSentence(data.sentence);
        setClickCount(-1);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setIsClicked(false);
      }, 10000);
    } else {
      setIsClicked(true);
      setTimeout(async () => {
        try {
          const response = await fetch(
            "https://mystic-vision-be-hpur-b2lafqs24-sooryaprabhath.vercel.app/random-sentence"
          );
          const data = await response.json();
          setSentence(data.sentence);
        } catch (error) {
          console.log(error);
        }
      }, 500);
      setTimeout(() => {
        setIsClicked(false);
      }, 10000);
    }
  };

  return (
   <div className='wrapper'> <div className="container">
   <div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
   </div>
   <h1 className="title">Your Fortune Today is:</h1>
   {!isClicked ? (
     <button className="generate-button" onClick={generateSentence}>
       Generate
     </button>
   ) : (
     <InfinitySpin width="200" color="#4fa94d" />
   )}
   {sentence && <p className="generated-sentence">{sentence}</p>}
 </div></div>
  );
};

export default App;
