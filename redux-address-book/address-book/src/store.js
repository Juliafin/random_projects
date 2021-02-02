import {createStore} from 'redux';
import {addressReducer} from './reducer';

export default createStore(addressReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());