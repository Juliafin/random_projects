import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ""
    }
    this.setInput = this.setInput.bind(this)
  }

  setInput(event) {
    let input = event.target.value;
    this.setState({
      input: input
    })
  }



  render() {
    if (this.state.input === "") {
      var number = <p>You should enter a number</p>
    } else if (this.state.input === "100"){
      var number = <p>You've guessed the correct number!</p>
    } else if (parseInt(this.state.input) > 100 ){
      var number = <p>You're too high!</p>
      
    } else if (parseInt(this.state.input) < 100 ){
      var number = <p>You're too low!</p>
      var something = 'hello'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, Yen</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Input setInput={this.setInput} greeting="hello"/>
        {number}
      </div>
    );
  }
}

export default App;
