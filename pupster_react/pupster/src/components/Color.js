import React from 'react';



const Color = (props) => {
  console.log(props.inputBoolean);

  

  return (
    props.inputBoolean ?
    <div onClick={props.toggle} className="colorSelector">
      <label htmlFor="color_input">Pick a Color</label>
      <input onChange={props.changeColor}    id="color_input" name="color" type="text"/>
      <button type="button">Click me</button>
    </div>
    : 
    <div onClick={props.toggle}>Click me</div>



  );

};


export default Color;


