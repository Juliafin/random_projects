import React from 'react';
import './ColorDisplay.css';


export const ColorDisplay = (props) => {

  const color = `rgb(${props.red}, ${props.green}, ${props.blue})`;

  let boxSize = {}
  if (props.size === 'large') {
    boxSize.height = '200px';
    boxSize.width = '200px'
  } else if (props.size === 'small') {
    boxSize.height = '50px';
    boxSize.width = '50px';
  }

  return (
    <div style={{
      backgroundColor: color,
      height: boxSize.height,
      width: boxSize.width
      }} id="colorDisplay">

    </div>
  )
}