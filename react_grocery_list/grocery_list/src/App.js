import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favoriteNumber: 40,
      clicked: true
    }

  }


  handleClick = () => {
      if (this.state.clicked) {
        this.setState({favoriteNumber: 4})
      } else {
        this.setState({favoriteNumber: 40})
      }
    this.setState({
      clicked: !this.state.clicked
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.clicked ?
            <img src={logo} className="App-logo" alt="logo" /> :
            null

          }
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
            We can type more things!

          </a>
          <p>We can do math! 2 + 2 = {this.state.favoriteNumber}</p>


          <button onClick={this.handleClick}>Click me!</button>

        </header>
      </div>
    );
  }
}

export default App;
