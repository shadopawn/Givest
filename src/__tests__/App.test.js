import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup)

test('renders app title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/givest/i);
  expect(title).toBeInTheDocument();
});
