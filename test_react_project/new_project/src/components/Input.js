import React from 'react';

const Input = (props) => {
  console.log('props.greeting', props.greeting);
  return (
    <div>
      <label>Enter some text</label>
      <input onChange={props.setInput}/>
    </div>
  );
};


export default Input;