import { createStore } from 'redux';
import blogReducer from './reducer';

export default createStore(
  blogReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );