import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PropAbc text', () => {
  render(<App propAbc="Eden Practice" />);
  const propBindingElement = screen.getByText(/PropAbc:/i);
  expect(propBindingElement).toBeInTheDocument();
});

test('renders StateAbc text', () => {
  render(<App propAbc="Eden Practice" />);
  const stateBindingElement = screen.getByText(/StateAbc:/i);
  expect(stateBindingElement).toBeInTheDocument();
});
