import React from 'react';

import './QuoteCard.css';

const QuoteCard = (props) => {

  const styles = {
    color: `rgb(${props.color})`,
    textWrap: 'noWrap'
  }

  console.log(props.color)

  return (
    <div className='card'>
      <div id="text" style={styles}>
        <i className="fa fa-quote-right"></i><p>{props.quote.quote}</p>
      </div>
      <div id="author">{props.quote.author}</div>
      <div className='btn-section'>

      </div>
      <i className="fa fa-spinner fa-spin">no spinner but why</i>
    </div>
  )
}

export default QuoteCard;