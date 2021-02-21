import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card/Card';

ReactDOM.render(
  <React.StrictMode>
    <Card text="Im spinning" />
  </React.StrictMode>,
  document.getElementById('root'),
);
