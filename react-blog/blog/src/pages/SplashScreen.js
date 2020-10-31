import React from 'react';
import { connect } from 'react-redux';
import { changeName } from '../actionCreators';
import './SplashScreen.css';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 10,
      timerDone: false
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.timer === 0) {
      this.setState({
        timerDone: true
      })
    }
  }

  componentDidMount() {
    const that = this;
    this.interval = setInterval(() => {
      that.setState({timer: this.state.timer - 1})
    }, 1000)
  }

  nameChangeHandler = (event) => {
    const name = event.target.value;
    this.props.dispatch(changeName(name))
  
  };


  render() {
    console.log(this.props.dispatch)
    if (!this.state.timerDone) {
      return (
        <p>{this.state.timer}</p>
      )
    }
    return (
      <form>
        <label htmlFor="nameInput">Enter your Name</label>
        <input onChange={this.nameChangeHandler} id="nameInput" type="text"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SplashScreen);