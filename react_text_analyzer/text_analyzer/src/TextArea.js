import React from 'react';
import './TextArea.css';

const TextArea = (props) => {
  console.log(props.cat);
  return (
    <div>
      <h3 onClick={props.changeColor} style={{color: props.color}}>{props.color}</h3>
      <textarea onChange={props.changeFunction}></textarea>
    </div>
  );
};


export default TextArea;