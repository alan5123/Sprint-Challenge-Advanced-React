import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('app renders without crashing', () => {
  render(<App />);
});

test('player list renders', () => {
  const { getByText } = render(<App />);

  getByText('Player List');
});

test('heading renders without crashing', () => {
  const { getByText } = render(<App />);
  
  getByText('Women Soccer Players')
});