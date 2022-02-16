import React from 'react';
import { render, screen } from '@testing-library/react';
import InputText from '../../../components/SecurityQuestionnaire/InputText';

describe('Security Questionnaire Input Component', () => {
  it('render Input Text component', () => {
    const handleChange = jest.fn();
    const value = 'test';
    render(<InputText handleChange={handleChange} value={value} />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
