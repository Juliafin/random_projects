import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodosDisplay from './components/TodosDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoInput/>
        <TodosDisplay/>
      </header>
    </div>
  );
}

export default App;
