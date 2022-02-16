import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import App from '../pages/App';

test('renders Security Questionnaire Page', async () => {
  render(<App />);
  await waitFor(() => screen.getByText(/Security Questionnaire/i), {
    timeout: 3000
  });
  const text = screen.getByText(/Security Questionnaire/i);
  expect(text).toBeInTheDocument();
});
