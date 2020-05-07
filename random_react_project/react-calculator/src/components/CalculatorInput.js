import React from 'react';



const CalculatorInput = (props) => {
  console.log(props.favoritenumber)
  return (
    <form onSubmit={(event) => {props.handleSubmit(event)}} >
      <h1>Enter your calculation: </h1>
      <input name="number1" id="number1" type="number" />
      <select name="operator" id="operator">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input name="number2" id="number2" type="number" />
      <button type="submit">Calculate</button>
    </form>
  )
};

export default CalculatorInput;