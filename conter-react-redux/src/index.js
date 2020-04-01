import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { createStore } from 'redux';

const counter = (state = 0 , action) => {
    switch (action.type)  {
        case "INCREMENT": return state + 1;
        case  "DECREMENT": return state - 1;
        default: return state
    }
    
};
const store = createStore(counter);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
