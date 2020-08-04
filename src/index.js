import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';
import { requestRobots, searchRobots } from './redux/reducers';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App.js';

const logger = createLogger();
const rootReducers = combineReducers({ requestRobots, searchRobots });
const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
