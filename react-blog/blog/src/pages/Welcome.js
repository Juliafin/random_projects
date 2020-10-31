import React from 'react';
import { connect } from 'react-redux';

class Welcome extends React.Component {
  
  render() {
    let color = this.props.color ? {color: this.props.color} : null;


    return (
      <div id="welcome">
        <h1>Blog</h1>
      <h2 style={color}>Hello {this.props.name}</h2>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    name: state.name,
    color: state.color
  }
}

export default connect(mapStateToProps)(Welcome); 