import React, { useState } from "react";
import "./App.css";
import { InfinitySpin } from "react-loader-spinner";

const App = () => {
  const url =
    "https://fortune-cookie2.p.rapidapi.com/fortune/by_category?category_key=general_fortune";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": '766b625b43mshba3009882d7692fp175232jsn25c285ab420f',
      "X-RapidAPI-Host": "fortune-cookie2.p.rapidapi.com",
    },
  };

  const [sentence, setSentence] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const generateSentence = async () => {
    setSentence("");
    setIsClicked(true);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setSentence(data.answer);
      setClickCount(-1);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsClicked(false);
    }, 600000);
  };

  return (
    <div className="wrapper">
      {" "}
      <div className="container">
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
      </div>
    </div>
  );
};

export default App;
