import * as types from './actionTypes';
const initialState = {
  name: 'Bill'
}

const blogReducer = (state=initialState, action) => {
  

  if (action.type === types.CHANGE_NAME) {
    const color = action.name === 'Victoria' ? 'green': 'blue'
    // state.name = action.name; // BAD don't do this!
    return {...state, name: action.name, color: 'blue'};
  }

  return state;
}


export default blogReducer;