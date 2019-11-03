import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageTwo from './components/page2';
import { Border } from './components/Border';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      welcomePage: true,
      currentPage: 1
    }
  }

  


  togglePage = () => {
    let nextPage;
    if (this.state.currentPage === 3) {
      nextPage = 1
    } else {
      nextPage = this.state.currentPage + 1;
    }

    this.setState({
      welcomePage: !this.state.welcomePage,
      currentPage: nextPage
    })
  }



  render() {

    let currentPage;

    switch(this.state.currentPage) {
      case 1:
        currentPage = (
          <Border>
            Page 1
          </Border>
        )
      break;
      case 2:
        currentPage = (
          <Border>
            <PageTwo/>
          </Border>
        )
      break;
      case 3:
        currentPage = (
          <Border>
            Page 3
          </Border>
        )
    }

    return (
      <div>
        {currentPage}
      </div>
    )

  }

}


export default App;

