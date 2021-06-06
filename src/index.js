import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './containers/Apps';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
  <Apps />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
