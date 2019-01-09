import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './TextArea';
import TextStatistics from './TextStatistics';
// stateful


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      welcomeMessage: "Text Analyzer!",
      displayWelcomeMessage: false,
      colors: ["red", "blue", "magenta", "yellow", "green", "orange", "purple", "brown", "grey", "black"],
      colorIndex: 0
    };
    this.toggleWelcomebutton = this.toggleWelcomebutton.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  toggleWelcomebutton() {
    console.log(this);
    this.setState({
      displayWelcomeMessage: !this.state.displayWelcomeMessage
    });
  }
  

  handleChangeText(event) {
    const text = event.target.value;
    console.log(text);
    this.setState({
      text
    });
  }


  handleColorChange() {
    if (this.state.colorIndex === this.state.colors.length -1) {
      this.setState({
        colorIndex: 0
      });
    } else {
      this.setState({
        colorIndex: this.state.colorIndex + 1
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.displayWelcomeMessage ? this.state.welcomeMessage : "No welcome for you!"}</h1>
        </header>
        <button onClick={this.toggleWelcomebutton} id="welcomeButton">Welcome</button>
        <TextArea color={this.state.colors[this.state.colorIndex]} changeColor={this.handleColorChange} changeFunction={this.handleChangeText} cat="meow"/>
        <TextStatistics text={this.state.text}></TextStatistics>
      </div>
    );
  }
}


// // stateless component

// const App = (props) => {
//   return (
//     <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <h1 className="App-title">Welcome to our Text Analyzer!</h1>
//     </header>
//   </div>
//   );
// }



export default App;
