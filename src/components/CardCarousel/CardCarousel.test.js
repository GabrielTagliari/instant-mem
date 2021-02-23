import React from 'react';
import CardCarousel from './CardCarousel';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { SwiperSlide } from 'swiper/react';

configure({ adapter: new Adapter() });

describe('CardCarousel', () => {
  it('validating props and cards rendered length', () => {
    const component = shallow(
      <CardCarousel
        cards={[
          { front: 'teste1', back: 'testado1' },
          { front: 'teste2', back: 'testado2' },
          { front: 'teste3', back: 'testado3' },
        ]}
      />,
    );

    expect(component.props().children.length).toBe(3);
    expect(component.find(SwiperSlide)).toHaveLength(3);
  });
});
