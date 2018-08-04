import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import ColorInput from './Components/ColorInput';
import ColorDisplay from './Components/ColorDisplay';
import {connect} from 'react-redux';
import {submitColor, changeColor, clearHistory} from './actions';
import axios from 'axios';
import fetch from 'node-fetch'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      showImage: false
    }

    this.setColor = this.setColor.bind(this);
    this.submitColor = this.submitColor.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
    this.mouseOver = this.mouseOver.bind(this)
  }

  
  componentDidMount() {
    console.log('the component has mounted');
    this.getCat()
  }

  componentDidCatch() {
    console.log('the componenet errored...')
  }


  mouseOver() {
    this.setState({
      showImage: !this.state.showImage
    });
    this.getCat()
  }
  

  getCat() {
    console.log('inside getCat')
    // axios.get({
    //   method: "get",
    //   url: "thecatapi.com/api/images/get?api_key=MzM3NjIx",
    //   data: {
    //     api_key: "MzM3NjIx",

    //   }
    // })

    fetch('http://localhost:8080/image')

      .then((images) => {
        console.log(images, 'images');
        return images.json()
      })
      .then((image) => {
        console.log(image)
        var imageUrl = image.response.data[0].images[0].image[0].url[0]
        console.log(imageUrl)
        this.setState({imageUrl})
      })
      .catch((err) => {
        console.log(err)
      })
    
  }

  setColor(event) {
    event.preventDefault()
    const color = event.target.value;
    this.props.dispatch(changeColor(color))
  }

  clearHistory(event) {
    event.preventDefault();
    this.props.dispatch(clearHistory())
  }

  submitColor(event) {
    event.preventDefault()    
    const color = event.target.color.value
    console.log(color, 'this is the color submitted')
    this.props.dispatch(submitColor(color));

  }


  render() {
   

    const colorHistoryDisplay = this.props.colorHistory.map((color, index,colorArray) => {
      return (
      <ColorDisplay key={index} tiger="hello" display="inline-block" height="100px" width="200px" color={color}> 
        <p>Color number {index + 1 }</p>
        {index ? <ColorDisplay height="25px" width="25px" color={colorArray[index-1]} display ="inline-block"/>   : null }
      </ColorDisplay>
      )
    })
    var image = null
    if (this.state.showImage) {
      image = <img src={this.state.imageUrl}></img> 
    }

    return (
      <div className="App">
        <Header/>
        {image}

        <p className="App-intro" onMouseEnter={this.mouseOver} >
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ColorInput clearHistory={this.clearHistory} num={5} submitColor={this.submitColor} setColor={this.setColor}/>
        <ColorDisplay color={this.props.color}/>
        <div>
        <h1>Here are the colors you picked: </h1>
        {colorHistoryDisplay}
        </div>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    color: state.color,
    colorHistory: state.colorHistory
  }
};







export default connect(mapStateToProps)(App);
