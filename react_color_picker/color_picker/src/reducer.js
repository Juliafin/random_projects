
import * as actions from './actions';

const initialState = {
  color: "",
  colorHistory: [],
  name: ""
};


const colorReducer = (state=initialState, action) => {
  if (action.type === actions.SUBMITCOLOR) {
    return Object.assign({}, state, {
      colorHistory: [...state.colorHistory, action.color]
    });
  } else if (action.type === actions.CHANGECOLOR) {
    return Object.assign({}, state, {
      color: action.color
    });
  } else if (action.type === actions.CLEARHISTORY) {
    return Object.assign({}, state, {
      colorHistory: []
    });
  }
  return state;
};

// es6 object destructuring
// return {...state, {colorHistory: [...state.colorHistory, action.color]}}


export default colorReducer;
