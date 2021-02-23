/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './components/Card/Card';
import CardCarousel from './components/CardCarousel/CardCarousel';

ReactDOM.render(
  <React.StrictMode>
    <CardCarousel
      cards={[
        { front: 'teste1', back: 'testado1' },
        { front: 'teste2', back: 'testado2' },
        { front: 'teste3', back: 'testado3' },
      ]}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
