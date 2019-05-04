import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import config from './config';
import UserDisplayContainer from './components/UserDisplayContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "",
      searchTerm: "",
      users: [],
      filteredUsers: []
    };
    // this.handleSearch = this.handleSearch.bind(this);
  }


  handleSearch = (event) => {
    let search = event.target.value || "";
    
    this.filterUser(search);
  }

  filterUser (search="") {
    console.log(search)
    let users;
    if (!search) {
      users = this.state.users;
    } else {
      users = this.state.users.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      })
    }
    this.setState({filteredUsers: users, searchTerm:search})

  }



  componentWillMount() {
    this.setState({
      greeting: "Ilene"
    })
    fetch(config.BASE_SEARCH_URL)
      .then(response => response.json())
      .then(json => this.setState({users: json, filteredUsers: json}))
  }





  render() {

    let greeting = this.state.greeting ? (<h1>Hello {this.state.greeting}</h1>) : null;

    return (
      <div className="App">
        <header className="App-header">
          {greeting}
          <img src={logo} className="App-logo" alt="logo" />

          <Search searchHandler={this.handleSearch}/>
          <UserDisplayContainer users={this.state.filteredUsers}/>
        </header>
      </div>
    );
  }
}

export default App;
