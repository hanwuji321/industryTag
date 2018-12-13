// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import {HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))
