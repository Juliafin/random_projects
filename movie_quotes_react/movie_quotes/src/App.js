import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {toggleFood} from './actions';


class App extends Component {

  constructor(props) {
    super(props);
    this.displayFood = this.displayFood.bind(this);
  }

  componentDidMount() {
    console.log('The component has mounted!!!!');
  }


  displayFood(event) {
    // DONT manipulate the state directly because it will not re-render
    // this.state.toggleFood = !this.state.togglefood
    this.props.dispatch(toggleFood())
    console.log(this);
  }

  render() {

    let foodsList = this.props.foods.map((food, index) => {
      return (<li key={index}>{food}</li>);
    });

    if (this.props.toggleFood) {
      var foods = (
        <div>
          <h1>Favorite Food</h1>
          {foodsList}
          <button onClick={this.displayFood}>Close Foods list</button>
        </div>
      );
    } else {
      var foods = (
        <button onClick={this.displayFood}>Display Food</button>
      );
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

const mapStateToProps = (state) => ({
  toggleFood: state.toggleFood,
  foods: state.foods
})


export default connect(mapStateToProps)(App);
