import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteInput from './components/NoteInput';
import NoteDisplay from './components/NoteDisplay';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: ["I really like cookies and cake but I stay away from it to stay healthy.", "I like react!"],
      error: false
    }

    this.addNote = this.addNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  addNote(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.note.value);

    const note = event.target.note.value;
    this.setState({
      notes: [...this.state.notes, note]
    })
  }

  handleChange(event) {
    console.log(this);
  }



  render() {

    const notes = this.state.notes.map((note, index) => <NoteDisplay key={index} note={note} /> )
    const Input = () => <NoteInput handleChange={this.handleChange} handleSubmit={this.addNote} />

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
          <Route exact path="/home" render={(props) => {
            console.log('props.match', props.match);
            return (
            <ul>
              <li>You have reached the {props.match.path} route.</li>
              <li>Cookies</li>
              <li>Cake</li>
              <li><Link to="/peanutButter">Peanut Butter</Link></li>
            </ul>
            )
          }} ></Route>
          <Route exact path="/features" component={Input}></Route>
       
        {notes}

        </div>
      </Router>
    );
  }
}

export default App;
