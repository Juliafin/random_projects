import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foods: ['pasta', 'sushi', 'chicken', 'ham sandwich', 'pizza'],
      toggleFood: false    
    }

    this.displayFood = this.displayFood.bind(this);
  }

  componentDidMount() {
    console.log('The component has mounted!!!!');
  }


  displayFood(event) {
    // DONT manipulate the state directly because it will not re-render
    // this.state.toggleFood = !this.state.togglefood
    this.setState({
      toggleFood: !this.state.toggleFood
    })
    console.log(this);
  }

  render() {

    let foodsList = this.state.foods.map((food, index) => {
      return (<li key={index}>{food}</li>);
    });

    if (this.state.toggleFood) {
      var foods = (
        <div>
        <h1>Favorite Food</h1>
        {foodsList}
        <button onClick={this.displayFood}>Close Foods list</button>
        </div>
      )
    } else {
      var foods = (
        <button onClick={this.displayFood}>Display Food</button>
      )
    }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {foods}
        
      </div>
    );
  }
}

export default App;
