import React from 'react';
import './NoteInput.css';


const NoteInput = (props) => {
  console.log(props, 'props');
  return (
    <div>
      <h1>
        Enter your note below..
      </h1>
      <form onSubmit={props.submitNote}>
        <input 
        onChange={props.textInput} 
        type="text"
        value={props.input}
        />
        <button id="submit" type="submit">Submit Note</button>

      </form>
    </div>
  );
};

export default NoteInput;