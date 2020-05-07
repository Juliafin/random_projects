import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryInput from './components/GroceryInput';
import GroceryList from './components/GroceryList';


class App extends Component {

  constructor(props) {
    super(props);
    // console.log(this.props) // {}
    this.state = {
      appName: 'Grocery List',
      itemType: 'vegetable',
      userInput: '',
      groceryList: []
    };
  }

  monitorGroceryInput = (event) => {
    const input = event.target.value;
    
    this.setState({
      userInput: input,
    });
  }

  addGroceryItemToList = (event) => {
    event.preventDefault();
    this.setState({
      userInput: '',
      groceryList: [...this.state.groceryList, this.state.userInput]
    });
  }

  deleteGroceryItem = (event) => {
    console.log(event.target);
    const index = parseInt(event.target.getAttribute('index'));
    console.log('index of item to delete: ', index);
    const newGroceryList = [...this.state.groceryList];
    newGroceryList.splice(index, 1);

    this.setState({
      groceryList: newGroceryList
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the {this.state.appName}!</h1>
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
            We can type more things!

          </a>

          <GroceryInput
            foodType={this.state.itemType}
            handleInputChange={this.monitorGroceryInput}
            handleGrocerySubmit={this.addGroceryItemToList}
            userInput={this.state.userInput}/>

          <GroceryList groceries={this.state.groceryList} deleteGroceryClick={this.deleteGroceryItem}/>

        </header>
      </div>
    );
  }
}

export default App;
