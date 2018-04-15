import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalculatorInput from './components/CalculatorInput';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Calculation from './components/Calculation';
import Jumbotron from './components/Jumbotron';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calculations : []
    }

    this.setCalculation = this.setCalculation.bind(this);
  }


  componentDidMount() {
    console.log('the component has mounted!');  
  }

  calculate(num1, num2, operator) {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let result;
    switch(operator) {
      case "+":
        result = num1 + num2;
        break
      
      case "-":
        result = num1 - num2;
        break
      
      case "*":
        result = num1 * num2;
        break
      
      case "/":
        result = num1 / num2;
        break
      
    }
    return result
  }

  setCalculation(event) {
    event.preventDefault();
    let num1 = event.target.number1.value;
    let num2 = event.target.number2.value;
    let operator = event.target.operator.value;
    let result = this.calculate(num1, num2, operator)
    console.log(num1, num2, operator, result);
    this.setState({
      calculations: [...this.state.calculations, {num1, num2, operator, result}]
    })
  }


  render() {

    const calculations = this.state.calculations.map((calculation, index) => {
      return (<Calculation num1={calculation.num1} num2={calculation.num2} operator={calculation.operator} result={calculation.result}  />)
    })

    return (
      <Router>
        <div className="App">
          <Navbar/>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>  
          <p>I like cookies!</p>

          <Route exact path="/calculate" render= {() => {return (
          <div>
            <p>We can even do math: 2 + 2 = {2 + 2}</p>
            <CalculatorInput favoritenumber="5" handleSubmit={this.setCalculation}/>
          </div>
          )}}/>

          <Route exact path= "/results" render={() => calculations}/>
          <Route exact path= "/home" component={Jumbotron} />

        </div>
      </Router>
    );
  }
}

export default App;
