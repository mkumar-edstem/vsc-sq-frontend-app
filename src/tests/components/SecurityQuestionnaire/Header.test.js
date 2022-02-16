import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../../components/SecurityQuestionnaire/Header';

describe('Security Questionnaire Header Screen', () => {
  it('render security questionnaire header', () => {
    render(<Header />);
    const title = screen.getByText(/Security Questionnaire/i);
    expect(title).toBeInTheDocument();
  });
});
