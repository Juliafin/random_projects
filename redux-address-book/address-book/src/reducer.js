import * as actionTypes from './actionTypes';

/* 
  type: 'ADD_ENTRY',
  payload: {
    firstName: 'Daniel',
    lastName: 'Jackson',
    address: ...
  }


*/

const initialState = {
  entries: [],
  color: 'green'
}


export const addressReducer = (state = initialState, action) => {
  switch(action.type) {

    case actionTypes.SET_COLOR: {
      return {
        ...state,
        color: action.color
      }
    }
    case actionTypes.ADD_ENTRY: {
      return {
        ...state,
        entries: [...state.entries, action.entry]
      }
    }

    default:
      return state;
  }
}