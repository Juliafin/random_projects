import React, { Component } from 'react';
import './App.css';
import AddressForm from './AddressForm';
import AddressDisplay from './AddressDisplay';
import {Button} from 'react-materialize';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: true,
      formSubmitted: false,
      entries: [],
      elementFocused: null
    };
    this.setIntroFalse = this.setIntroFalse.bind(this);
    this.setFormSubmitted = this.setFormSubmitted.bind(this);
  }

  componentDidMount() {
    axios.get('/api/addressEntries')
      .then((res) => {
        console.log('This is the response:');
        console.log(res.data.addresses, 'DATA for address entries');
        this.setState({entries: res.data.addresses});
      })
      .catch((err) => console.log(err));
  }

  setIntroFalse() {
    this.setState({intro: false});
  }

  setFormSubmitted() {
    this.setState({
      formSubmitted: true
    });
    console.log(this.state, 'THIS.STATE')
  }

  onFocus = (event) => {
    console.log('target: ', event.target.name);
    this.setState({ elementFocused: event.target.name})
  }

  render() {

    const button = this.state.intro ? <Button onClick={this.setIntroFalse} waves='light'>Enter</Button> : <AddressForm setFormSubmitted={this.setFormSubmitted}
    focusHandler={this.onFocus}/>; 
    const addressEntries = this.state.entries.map((entry, index) => {
      return (<AddressDisplay 
        key={index} 
        address={entry.address} 
        city={entry.city}
        firstName={entry.firstName} 
        lastName={entry.lastName}
        zipCode={entry.zipCode} 
        state={entry.state} 
        telephoneNumber={entry.telephoneNumber} />);
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to our Address Book</h1>
        </header>
        <p className="App-intro">
          {this.state.intro ? "Click the button below to proceed:" : null} 
        </p>
        {this.state.intro ? null : 
          <div>
            <h1>Form Element focused: </h1>
            <div id="focused">{this.state.elementFocused ? this.state.elementFocused : null}</div>
          </div>
        }
        {this.state.formSubmitted ? addressEntries : button}
      </div>
    );
  }
}



export default App;
