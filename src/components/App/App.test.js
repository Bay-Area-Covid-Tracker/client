import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders h1 tag', () => {
  const { getByText } = render(<App />);
  const h1Tag = getByText(/Bay Area Covid-19 Tracker/i);
  expect(h1Tag).toBeInTheDocument();
});
