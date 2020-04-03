import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'react-redux';
import './index.css';
import App from './App';
import { createStore  } from 'redux';
import reducer from './redux-flow/reducers/counters/index'
console.log(reducer)

const store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);