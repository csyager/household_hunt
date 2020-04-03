import React, { Component } from 'react';
import { render } from '@testing-library/react';
import App, { Welcome } from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders welcome form', () => {
  const { getByText } = Welcome.render();
  const header = getByText(/Welcome to Household Hunt/i);
  expect(header).toBeInTheDocument();
});
