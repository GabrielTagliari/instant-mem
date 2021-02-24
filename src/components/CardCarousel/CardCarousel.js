import React from 'react';
import PropTypes from 'prop-types';
import './CardCarousel.css';
import Card from '../Card/Card';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class CardCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: false }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
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
