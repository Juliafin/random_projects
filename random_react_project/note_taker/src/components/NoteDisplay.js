import React from 'react';


const NoteDisplay = (props) => {
  
  return (
    <div className="display">
      <p>{props.note}</p>
    </div>

  );
}

export default NoteDisplay;