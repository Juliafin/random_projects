import React from 'react';
import './GroceryInput.css';

const GroceryInput = (props) => {
  console.log('props in grocery input', props);
  return (
    <form onSubmit={props.handleGrocerySubmit}>
      <label htmlFor="listInput">Enter a {props.foodType} item</label>
      <input onChange={props.handleInputChange} type="text" id="listInput" value={props.userInput} />

      <button type="submit">Submit Item</button>
    </form>
  );
};


export default GroceryInput;