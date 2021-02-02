import React from 'react';
import { connect } from 'react-redux'
import {setColor} from './../actionCreators';
import {Link} from 'react-router-dom';

const Welcome = (props) => {
  return (
    <>
      <label htmlFor="colorInput"></label>
      <input id="colorInput" type="text" onChange={(event) => props.dispatch(setColor(event.target.value)) }/>
      <button>
        <Link to="/address">Enter</Link>
      </button>

      My favorite color is {props.color}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

export default connect(mapStateToProps)(Welcome);
