import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxText: "",
      height: "400px",
      width: "400px",
      backgroundColor: "red"
    };

    // this.handleBoxClick = this.handleBoxClick.bind(this);
    // only necessary if you define handleboxClick() {}     not as an arrow function
  }


  handleBoxClick = (event) => {
    console.log(this, 'THIS');
    const text = event.target.innerText;
    console.log(text, 'text');
    const height = Math.floor(Math.random() * 1000) + 100 + 'px';
    const width = Math.floor(Math.random() * 1000) + 100 + 'px';
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    this.setState({boxText: text, height, width, backgroundColor: `rgb(${r}, ${g}, ${b})` });
  }

  render() {
    const boxStyles = {
      height: this.state.height,
      width: this.state.width,
      backgroundColor: this.state.backgroundColor
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div style={boxStyles} onClick={this.handleBoxClick} id="color-square">Click Me!</div>

        <p>The text in the box is: {this.state.boxText}</p>
      </div>
    );
  }
}

export default App;
