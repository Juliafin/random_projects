/*eslint linebreak-style: ["error", "unix"]*/
import React from 'react';
import ReactDOM from 'react-dom';
// var React = require('react');
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
