import React from 'react';
import './App.css';
import { SigninInput } from './components/SigninInput';
import { SigninStatus } from './components/SigninStatus';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      formSubmitted: false,
      formValid: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
    // console.log(prevState);
    if (prevState.formSubmitted !== this.state.formSubmitted) {
      console.log('The form has been submitted!');
      if (this.state.username && this.state.password) {
        this.setState({
          formValid: true
        })
      }
    }


  }

  updateInput = (event) => {
    console.log(event.target);
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  submitInput = (event) => {
    event.preventDefault();
    this.setState({
      formSubmitted: true
    })

  }

  render() {
    let status;
    
    if (this.state.formValid && this.state.formSubmitted) {
      status = 'The input is valid!';

    } else if (!this.state.formValid && !this.state.formSubmitted) {
      status = 'The form is not submitted'
    } else if (!this.state.formValid && this.state.formSubmitted) {
      status = 'There is an error with your submission!' 
    }
    return (
      <div>
        <header>Welcome to the APP</header>
        <SigninInput formSubmit={this.submitInput} changeHandler={this.updateInput} />
        <SigninStatus status={status} />
      </div>
    )
  }

}
