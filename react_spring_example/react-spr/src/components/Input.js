import React, {Component} from 'react';


class SomeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someInputTextValue: ''
    }
  }

  updateTextValue = (event) => {
    if (event.target.value.indexOf("e") === event.target.value.length - 1) {
      this.state.someInputTextValue = event.target.value;
    } else {
      this.setState({someInputTextValue: event.target.value});
    }
  } 

  componentDidUpdate(prevProps, prevState) {
    console.clear();
    console.log('previous props: ', prevProps);
    console.log('previous state: ', prevState);
    console.log('current props: ', this.props);
    console.log('current state: ', this.state);
    // Sending the state change to the parent
    if (this.state.someInputTextValue !== prevState.someInputTextValue) {
      this.props.handleChange(this.state.someInputTextValue);
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.someInputTextValue[nextState.someInputTextValue.length-1] === "e") {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render() {

    return (
      <div>
        <label htmlFor="input">Enter something: {this.state.someInputTextValue} </label>
        <input onChange={this.updateTextValue} value={this.state.someInputTextValue} id="input"></input>
      </div>
    );
  };
    
}

export default SomeInput;