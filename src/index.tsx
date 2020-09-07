// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Styles utitilities
import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
