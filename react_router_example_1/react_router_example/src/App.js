import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Dashboard } from './pages/Dashboard';
import { Redirected } from './pages/Redirected';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '123-532-3712',
      userId: ''
    }
  }

  handleInputChange = (event) => {
    const userId = event.target.value;
    this.setState({userId});
  }

  render() {

    const shouldRedirect = this.state.userId === 'Oscar' ? (<Redirect to="/redirect"/>) : null;

    const dashBoardLink = `/dashboard/${this.state.userId}`;
    return (
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to={dashBoardLink}>Dashboard</Link></li>
          </ul> 
        </nav>
        {shouldRedirect}
        <div><input onChange={this.handleInputChange} type="text"/><label htmlFor="textInput">Type user id</label></div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/redirect" component={Redirected} />
          <Route exact path="/contact" render={() =>  <Contact phoneNumber={this.state.phoneNumber}/>} />
          <Route path ="/dashboard/:userId" component={Dashboard}/>
      </Router>
    );
  }
}

export default App;
