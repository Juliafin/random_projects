import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import ColorInput from './Components/ColorInput';
import ColorDisplay from './Components/ColorDisplay';
import {connect} from 'react-redux';
import {submitColor, changeColor, clearHistory} from './actions';


class App extends Component {
  constructor(props) {
    super(props);
    

    this.setColor = this.setColor.bind(this);
    this.submitColor = this.submitColor.bind(this);
    this.clearHistory = this.clearHistory.bind(this);

  }

  
  componentDidMount() {
    console.log('the component has mounted');
  }

  componentDidCatch() {
    console.log('the componenet errored...')
  }

  setColor(event) {
    event.preventDefault()
    const color = event.target.value;
    this.props.dispatch(changeColor(color))
  }

  clearHistory(event) {
    event.preventDefault();
    this.props.dispatch(clearHistory())
  }

  submitColor(event) {
    event.preventDefault()    
    const color = event.target.color.value
    console.log(color, 'this is the color submitted')
    this.props.dispatch(submitColor(color));

  }


  render() {
   

    const colorHistoryDisplay = this.props.colorHistory.map((color, index,colorArray) => {
      return (
      <ColorDisplay key={index} tiger="hello" display="inline-block" height="100px" width="200px" color={color}> 
        <p>Color number {index + 1 }</p>
        {index ? <ColorDisplay height="25px" width="25px" color={colorArray[index-1]} display ="inline-block"/>   : null }
      </ColorDisplay>
      )
    })

    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ColorInput clearHistory={this.clearHistory} num={5} submitColor={this.submitColor} setColor={this.setColor}/>
        <ColorDisplay color={this.props.color}/>
        <div>
        <h1>Here are the colors you picked: </h1>
        {colorHistoryDisplay}
        </div>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    color: state.color,
    colorHistory: state.colorHistory
  }
};







export default connect(mapStateToProps)(App);
