import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterText } from './components/CounterText';

function App() {
  const [daysOfTheWeek, setDaysOfTheWeek] = useState([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ])

  const [todaysIndex, setTodaysIndex] = useState(0)

  const [counter, setCounter] = useState(0);

  const [ dayColor, setDayColor] = useState('white');

  const [counterTextStatus, setCounterTextStatus] = useState('unmounted')

  useEffect(() => {
    console.log('Todaysindex has changed: ', todaysIndex);

    if (todaysIndex === 4) {
      setDayColor('red')
    } else {
      setDayColor('white');
    }

    setCounter(counter + 1)
  }, [todaysIndex])


  const greetingClickHandler = (event) => {
    let index = todaysIndex;
    if (daysOfTheWeek.length - 1 === index) {
      setTodaysIndex(0);
    } else {
      index++;
      setTodaysIndex(index)
    }
  }

  const today = daysOfTheWeek[todaysIndex];
  const greeting = (
    <p>
      Hi There, today is <span style={{color: dayColor}}>
        {today}!
        </span>
    </p>
  )
  const timesClicked = counter % 2 === 0 ? (<CounterText updateStatus={setCounterTextStatus} counter={counter}/>) : null;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p onClick={greetingClickHandler}>{greeting}</p>
        {timesClicked}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  <p>CounterText Status: {counterTextStatus}</p>
      </header>
    </div>
  );
}

export default App;
