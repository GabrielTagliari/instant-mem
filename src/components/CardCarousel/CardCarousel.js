import React from 'react';
import PropTypes from 'prop-types';
import './CardCarousel.css';
import Card from '../Card/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

class CardCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {this.props.cards.map((card) => {
          return (
            <SwiperSlide key={card.front}>
              <Card info={card} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
}

CardCarousel.propTypes = {
  cards: PropTypes.array,
};

export default CardCarousel;
