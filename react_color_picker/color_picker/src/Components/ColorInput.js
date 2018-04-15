import React from 'react';


const ColorInput = (props) => {
  return (
    <form onSubmit={props.submitColor}>
      <input onChange={(event) => {props.setColor(event)}} type="text" id="color_picker_input" name="color"></input>
      <button type="submit">Submit Color</button>
      <button onClick={(event) => {props.clearHistory(event)}} type="button">Clear history</button>

    </form>
    
  );
}


export default ColorInput;