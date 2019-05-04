import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteInput from './components/NoteInput';
import Notes from './components/Notes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      notes: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitNote = this.submitNote.bind(this);

  }

  componentWillMount() {
    console.log('Component is mounting!')
  }
  

  handleInputChange(event) {
    const text = event.target.value;
    // console.log(text);
    // DONT DO THIS
    // this.state.input = text;
    // console.log(this, 'this');
    this.setState({
      input: text
    })
  }


  submitNote(event) {
    event.preventDefault();
    let input = this.state.input;
    console.log('Submitting note', input);
    this.setState({
      input: '',
      notes: [...this.state.notes, input]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <NoteInput 
          textInput={this.handleInputChange}
          submitNote={this.submitNote}
          input={this.state.input}
        />
        <Notes notes={this.state.notes}/>
        </header>

      </div>
    );
  }
}

export default App;
