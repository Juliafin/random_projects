import React from 'react';


export default class RandomComponent extends React.Component{

  constructor(props) {
    super(props) 
      this.state = {
        currentText: '',
        alternateText: ''
      }
    
  }

  getSnapshotBeforeUpdate(prevprops, prevstate) {
    const hasTextChanged = prevstate.currentText !== this.state.currentText;
    if (this.state.currentText === '' && hasTextChanged) {
      this.setState({alternateText: 'Text is empty'})
    } else if (this.state.currentText.includes('.') && hasTextChanged) {
      this.setState({alternateText: 'Text includes a period'}) 
    } else if (hasTextChanged) {
      this.setState({alternateText: 'Text does not include a period'})
    } 
  }


  onChange = (event) => {
    this.setState({currentText: event.target.value})
  }


  render() {
    return (
      <div>
        <input onChange={this.onChange} type="text"/>
        <p>{this.state.currentText}</p>
    <p>{this.state.alternateText}</p>

      </div>
    )
  }
}