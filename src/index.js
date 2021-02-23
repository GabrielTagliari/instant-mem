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
        { id: 1, front: 'teste1', back: 'testado1' },
        { id: 2, front: 'teste2', back: 'testado2' },
        { id: 3, front: 'teste3', back: 'testado3' },
      ]}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
