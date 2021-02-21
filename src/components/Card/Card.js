import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.flip = this.flip.bind(this);
  }

  flip() {
    var card = document.querySelector('.flip-card-inner');
    card.classList.toggle('is-flipped');
  }

  render() {
    return (
      <div className="flip-card center">
        <div className="flip-card-inner" onClick={this.flip}>
          <div className="flip-card-front">
            <h1 className="noSelect">{this.props.info.front}</h1>
          </div>
          <div className="flip-card-back">
            <h1 className="noSelect">{this.props.info.back}</h1>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  info: PropTypes.object,
};

export default Card;
