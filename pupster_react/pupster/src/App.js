import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import apiobj from './util/api';
import Dogoptions from './components/Dogoptions';
import Color from './components/Color';

class App extends Component {

  constructor() {
    super()
    
    this.state = {
      name: "Jonathan",
      dogs: [],
      color: "red",
      toggleColorInput: true
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.dogImage = this.dogImage.bind(this);
    this.toggleInput = this.toggleInput.bind(this);
  }




  printName(name) {
    return name

    }
  
    searchDogs (dogs) {
      apiobj.getDogs()
      .then((response) => {
        console.log(response, 'the api call has come back');

        var dogs = Object.keys(response.data.message);
        this.setState({dogs});
      })
      .catch((err) => {
        console.log('the api call failed with this error:', err);
      });
    }


    dogImage(dog) {
      apiobj.getDogImage(dog)

      .then((response) => {
        console.log('dog image response', response);
      })
      .catch((err) => {
        console.log('the dog image call failed', err)
      })
    }

  componentDidMount() {
    console.log('component has mounted!');
    this.searchDogs();
   
  }


  handleInputChange(event) {

    if (event.target.name === "currentDog") {
      // run an api call to get the dog image
      this.dogImage(event.target.value);

    }

    console.log(event.target, 'event.target');
    this.setState({
      [event.target.name]: event.target.value})

  }


  toggleInput() {
    console.log('toggle running');
    this.setState({
      toggleColorInput: !this.state.toggleColorInput
    })
  }



  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <label htmlFor="nameInput">Enter a name</label>
        <input name="name" id="nameInput" type="text" onChange={this.handleInputChange} />
      
        <label htmlFor="favoriteFood">Enter a favorite food.</label>
        <input name="food" id="favoriteFood" type="text" onChange={this.handleInputChange} />
        
        <label htmlFor="greeting">Enter a greeting.</label>
        <input name="greeting" id="greeting" type="text" onChange={this.handleInputChange} />
      


        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      <p>I can run code here! {this.printName(this.state.name)}   </p>
      <p>My favorite food is : {this.state.food}</p>


      <Dogoptions color={this.state.color} selectedDog={this.handleInputChange} dogs={this.state.dogs} number={5} greeting={this.state.greeting} />


      <Color inputBoolean={this.state.toggleColorInput} toggle={this.toggleInput} changeColor={this.handleInputChange}/>

      </div>
    );
  }
}

export default App;
