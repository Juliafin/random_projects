import React from 'react';
import './ColorDisplay.css'

const ColorDisplay = (props) => {
  
  if (props.color === "") {
    return (
      <div className="colorDisplay">
        <p>No Color selected</p>
      </div>
    )
  } else {
    const style = {
      backgroundColor: `${props.color}`,
      height: `${props.height ? props.height : ""}`,
      width: `${props.width ? props.width : ""}`,
      display: `${props.display}`
    }
    console.log(props)
    return (
      <div style={style} className="colorDisplay">
        {props.children}
        <p>ROAR tiger says {props.tiger}</p>
      </div>
    )
  } 
  
}


export default ColorDisplay;