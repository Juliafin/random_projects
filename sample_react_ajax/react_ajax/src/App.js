import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './input.js';
import apiCall from './utils/api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }

    this.setInput = this.setInput.bind(this);

  }


  componentDidMount() {
    apiCall("newcall", "GET");
  }



  setInput (input) {
    console.log(input);
    this.setState({
      input
    });

    apiCall("datahere", "POST", input)

  }

  render() {
    return (
      <div className="App">
       <h1>Hello</h1>
       <Input setInput={this.setInput} />
      </div>
    );
  }
}




export default App;
