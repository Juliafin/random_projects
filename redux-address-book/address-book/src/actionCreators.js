import * as actionTypes from './actionTypes';

export const setColor = (color) => {
  return {
    type: actionTypes.SET_COLOR,
    color
  }
}

export const addEntry = (entry) => {
  return {
    type: actionTypes.ADD_ENTRY,
    entry
  }
}