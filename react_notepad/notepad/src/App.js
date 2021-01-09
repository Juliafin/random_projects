import { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function randomColor() {
  var colors = ['red', 'yellow', 'orange', 'purple', 'green', 'blue', 'violet', 'brown', 'white'];

  var randomColorIndex = Math.floor(Math.random() * colors.length);
  var randomColor = colors[randomColorIndex];
  return randomColor;

}



function App() {
  console.log(logo, 'logo');
  const [name, setName] = useState("John");
  const [color, setColor] = useState("white");

  const anchor = color === "green" ? ( 
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    I like React!
    </a>
  ) : (
    <p>The color is not green!</p>
  )


  return (
    <div className="App">
      <header className="App-header">
        <img id="anImage" src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      {anchor}
      <p style={{
        color
      }} >Hello {name}</p>
      <label htmlFor="nameInput">Enter Name: </label>
      <input onChange={(event) => {
        console.log(event.target.value);
        setName(event.target.value);
        setColor(randomColor());
      }} id="nameInput" type="text"/>
      </header>
    </div>
  );
}

export default App;
