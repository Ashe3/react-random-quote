import React from 'react';

import './QuoteCard.css';

const QuoteCard = (props) => {

  const textStyle = {
    color: `rgb(${props.color})`,
  };

  const bkgStyle = {
    backgroundColor: `rgb(${props.color})`,
  }

  return (
    <div className={`card`}>
      <div id="text" style={props.visible ? textStyle : {color: '#fff'}}>
        <i className="fa fa-quote-right"></i><p>{props.quote.quote}</p>
      </div>
      <div id="author" style={textStyle}>- {props.quote.author}</div>
      <div className='btn-section'>
        <div className='social'>
          <a 
            id="tweet-quote" 
            className='soc-button btn' 
            style={bkgStyle}
            href='https://twitter.com/intent/tweet'>
            <i className="fa fa-twitter"></i>
          </a>
          <a id="tweet-quote" className='soc-button btn' style={bkgStyle}>
          <i className="fa fa-tumblr"></i>
          </a>
        </div>
        <div 
          id='new-quote' 
          style={bkgStyle} 
          className='btn' 
          onClick={props.onClick}
        >
          New quote
        </div>
      </div>
    </div>
  )
}

export default QuoteCard;