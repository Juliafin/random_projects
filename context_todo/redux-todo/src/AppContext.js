import React from 'react';

const AppContext = React.createContext();

export const AppContextConsumer = AppContext.Consumer;

export class AppContextProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentTodo: "I like the color purple!",
      inputStyles: {
          cursor: "pointer",
          backgroundColor: 'red'
      }
    }
  }


  render() {

    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }

}

