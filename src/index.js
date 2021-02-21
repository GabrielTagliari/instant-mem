/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card/Card';

ReactDOM.render(
  <React.StrictMode>
    <Card
      info={{ front: 'This is my front', back: 'This is my back' }}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
