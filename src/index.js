/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Parse from 'parse';

Parse.initialize(
  'jphAOx9smRF1BC13czIhSpKSy3Az6ErU96yLCyHA',
  '3Bo4GoTGFZAurWVf76ICd157f6m8vg8D1H7i0g76',
);
Parse.serverURL = 'https://parseapi.back4app.com/';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
