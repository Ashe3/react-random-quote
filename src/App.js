import React, { useEffect, useState } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

import QuoteCard from "./components/QuoteCard";

const App = () => {
  const [quote, setQuote] = useState({quote: '', author: ''});
  
  useEffect(() => {
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
      .then(response => setQuote(response[0]))
      .catch(err => {
        console.log(err);
      });
  }, []);

  const color = Array.from({ length: 3 }).map(_ =>
    Math.floor(Math.random() * 255)
  );
  const colorStyle = {
    backgroundColor: `rgb(${color})`
  };

  return (
    <div id="quote-box" className="fully" style={colorStyle}>
      <QuoteCard color={color} quote={quote}/>
    </div>
  );
};

export default App;
