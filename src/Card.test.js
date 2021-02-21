import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders learn react link', () => {
  render(<Card />);
  const linkElement = screen.getByText(/Im spinning/i);
  expect(linkElement).toBeInTheDocument();
});
