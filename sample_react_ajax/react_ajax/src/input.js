import React from 'react';


const Input = (props) => {
  console.log(props)
  return (
    <div className="input">
      <label htmlFor="main_input">Type Something here</label>
      <input onChange={(event) => {props.setInput(event.target.value)}} id="main_input" type="text">
      </input>
  </div>
  )
};


export default Input;