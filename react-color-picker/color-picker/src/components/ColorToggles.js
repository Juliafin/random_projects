import React from 'react';


export const ColorToggles = (props) => {
  

  return (
    <div id="toggles">
      <div>
        <label htmlFor="red">Red</label>
        <input value={props.red} max="255" onChange={props.handleColorChange} type="range" id="red"/>
      </div>
      <div>
        <label htmlFor="green">Green</label>
        <input value={props.green} max="255" onChange={props.handleColorChange} type="range"id="green"/>
      </div>
      <div>
        <label htmlFor="blue">Blue</label>
        <input value={props.blue} max="255" onChange={props.handleColorChange} type="range"id="blue"/>
      </div>
    </div>
    )
}
