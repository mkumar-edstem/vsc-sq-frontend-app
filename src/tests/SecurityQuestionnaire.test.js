import React from 'react';
import {
  render, screen, waitFor, fireEvent
} from '@testing-library/react';
import SecurityQuestionnaire from '../pages/SecurityQuestionnaire';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '124'
  })
}));

describe('Security Questionnaire Page render', () => {
  it('render security questionnaire page', async () => {
    render(<SecurityQuestionnaire />);
    await waitFor(() => screen.getByText(/Security Questionnaire/i), {
      timeout: 3000
    });
    const text = screen.getByText(/Security Questionnaire/i);
    expect(text).toBeInTheDocument();
  });
  it('navigate through questions page', async () => {
    render(<SecurityQuestionnaire />);
    // await new Promise((r) => setTimeout(r, 3000));
    await waitFor(() => screen.getByText(/Security Questionnaire/i), {
      timeout: 3000
    });
    const text = screen.getByText(/Security Questionnaire/i);
    expect(text).toBeInTheDocument();

    expect(screen.getByText(/VA-Q-01/i)).toBeInTheDocument();
    expect(screen.getByText(/option 1/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText('option 1'));
    expect(screen.getByTestId('btn-next')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('btn-next'));
    expect(await screen.findByText('VA-Q-02')).toBeInTheDocument();

    fireEvent.click(screen.getByText('option 1'));
    fireEvent.click(screen.getByTestId('btn-next'));
    expect(await screen.findByText('VA-Q-03')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Yes'));
    fireEvent.click(screen.getByTestId('btn-next'));
    expect(await screen.findByText('VA-Q-04')).toBeInTheDocument();
  });
});
