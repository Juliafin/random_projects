import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import ColorInput from './Components/ColorInput';
import ColorDisplay from './Components/ColorDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      colorHistory: []
    }

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
    this.setState({
      color:color
    })
  }

  clearHistory(event) {
    event.preventDefault();
    this.setState({
      colorHistory: []
    })
  }

  submitColor(event) {
    event.preventDefault()    
    const color = event.target.color.value
    console.log(color, 'this is the color submitted')
    this.setState({
      colorHistory: [...this.state.colorHistory, color]
    })

  }


  render() {
   

    const colorHistoryDisplay = this.state.colorHistory.map((color, index,colorArray) => {
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
        <ColorDisplay color={this.state.color} />
        <div>
        <h1>Here are the colors you picked: </h1>
        {colorHistoryDisplay}
        </div>

      </div>
    );
  }
}










export default App;
