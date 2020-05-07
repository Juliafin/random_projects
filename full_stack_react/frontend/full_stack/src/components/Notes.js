import React from 'react';

const Notes = (props) => {

  let notesToRender
  if (props.notes.length !== 0) {
     notesToRender = props.notes.map((note, index) => {
      return (
        <li key={index} >{note}</li>
      );
  });

}

  return (
    <div>
      <h2>Notes</h2>
      <ol>
        {notesToRender}
      </ol>
    </div>
  );



};

export default Notes