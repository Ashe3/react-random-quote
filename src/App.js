import React, { useEffect, useState,useCallback } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

import QuoteCard from "./components/QuoteCard";

const App = () => {
  const [quote, setQuote] = useState({quote: '', author: ''});
  const [visibility, setVisibility] = useState(true);
  const [color, setColor] = useState(Array.from({ length: 3 }).map(_ =>Math.floor(Math.random() * 255)))

  const loadData = () => {
    fetch(
      "https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=1",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
          "x-rapidapi-key": "082dc9c462msh5817a31ab9ac1fep1f2a52jsn82dfb04a6d70"
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        setQuote(response[0]);
        setTimeout(() => {
          setVisibility(true);
        }, 200)
      })
      .catch(err => {
        console.log(err);
      });
  }
  

  
  useEffect(() => {
    loadData();
    return setQuote({quote: '', author: ''})
  }, []);

  const handleClick = () => { 
    setTimeout(() => {
      setQuote({quote: '', author: ''});
    }, 400);
    loadData();
    setColor(color.map(_ => Math.floor(Math.random() * 255)));
  }

  const colorStyle = {
    backgroundColor: `rgb(${color})`
  };

  return (
    <div id="quote-box" className="fully" style={colorStyle}>
      <QuoteCard
        visible={visibility}
        color={color} 
        quote={quote} 
        onClick={handleClick}/
      >
    </div>
  );
};

export default App;
