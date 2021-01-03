import { render, screen } from '@testing-library/react';
import { Component } from 'react';
import Component from './Component';

test('renders learn react link', () => {
  render(<Component />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
