import React from 'react';

function PageTwo(props) {
  return (
     <div onClick={props.togglePage} className="App">
        <header id="App-header">
          <h1>Welcome to the second page!</h1>
        </header>
      </div>
    );
}

export default PageTwo;