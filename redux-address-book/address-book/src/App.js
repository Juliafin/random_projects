import './App.css';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import Welcome from './pages/Welcome';
import AddressLayout from './pages/AddressLayout'
import AddressBook from './pages/AddressBook'


function App(props) {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/address">Add Entry</Link>
          <Link to="/entries">Address Book</Link>
        </ul>
      </nav>

      <header style={{backgroundColor: props.color}}  className="App-header">
      <Route exact path="/" component={Welcome}  />
      <Route exact path="/address" component={AddressLayout}  />
      <Route exact path="/entries" component={AddressBook}/>
      </header>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

export default connect(mapStateToProps)(App);
