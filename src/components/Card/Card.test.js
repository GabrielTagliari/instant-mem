import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card', () => {
  it('should render text from props', () => {
    render(<Card text="Im spinning" />);
    const linkElement = screen.getByText(/Im spinning/i);
    expect(linkElement).toBeInTheDocument();
  });
});
