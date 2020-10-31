import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import SplashScreen from './pages/SplashScreen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar/>
          <Route exact path="/" component={SplashScreen}/>
          <Route exact path="/welcome" component={Welcome} />
        </header>
      </div>
    </Router>
  );
}

export default App;
