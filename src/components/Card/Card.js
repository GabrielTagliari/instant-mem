import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ text }) {
  return (
    <div className="Card center">
      <p>{text}</p>
    </div>
  );
}

Card.propTypes = {
  text: PropTypes.string,
};

export default Card;
