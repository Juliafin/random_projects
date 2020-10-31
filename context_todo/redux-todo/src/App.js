import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodosDisplay } from './components/TodosDisplay';
import RandomComponent from './components/RandomComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TodosDisplay></TodosDisplay>
      <RandomComponent/>
      </header>
    </div>
  );
}

export default App;
