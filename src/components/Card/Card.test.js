import React from 'react';
import Card from './Card';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Card', () => {
  it('should render text from front and back prop text', () => {
    const card = shallow(
      <Card
        info={{ front: 'This is my front', back: 'This is my back' }}
      />,
    );

    const frontText = card
      .find('.flip-card-front')
      .first()
      .childAt(0);
    expect(frontText.text()).toEqual('This is my front');

    const backText = card.find('.flip-card-back').first().childAt(0);
    expect(backText.text()).toEqual('This is my back');
  });

  it('flip', () => {
    const card = shallow(
      <Card
        info={{ front: 'This is my front', back: 'This is my back' }}
      />,
    );

    const mockFn = {
      classList: { toggle: jest.fn() },
    };

    jest.spyOn(document, 'querySelector').mockImplementation(() => {
      return mockFn;
    });

    card.instance().flip();

    expect(document.querySelector).toHaveBeenCalledWith(
      '.flip-card-inner',
    );
    expect(mockFn.classList.toggle).toHaveBeenCalledWith(
      'is-flipped',
    );
  });
});
