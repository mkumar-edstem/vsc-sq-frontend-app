import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioInput from '../../../components/SecurityQuestionnaire/RadioInput';

describe('Security Questionnaire Input Component', () => {
  it('render Input Text component', () => {
    const handleChange = jest.fn();
    const value = 'Yes';
    render(<RadioInput handleChange={handleChange} value={value} />);
    expect(screen.getByText(/Yes/i)).toBeInTheDocument();
    expect(screen.getByText(/No/i)).toBeInTheDocument();
  });
});
