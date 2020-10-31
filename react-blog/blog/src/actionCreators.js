import * as types from './actionTypes';

export const changeName = (name) => {
  return {
    type: types.CHANGE_NAME,
    name
  }
};