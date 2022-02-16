import React from 'react';
import { render, screen } from '@testing-library/react';
import SingleSelect from '../../../components/SecurityQuestionnaire/SingleSelect';

describe('Secuirty Questionnaire SingleSelect component', () => {
  it('render SingleSelect with options', () => {
    const handleChange = jest.fn();
    const options = ['option1', 'option2', 'option3'];
    render(<SingleSelect handleChange={handleChange} options={options} value="option1" />);
    expect(screen.getByText(/option1/i)).toBeInTheDocument();
    expect(screen.getByText(/option2/i)).toBeInTheDocument();
    expect(screen.getByText(/option3/i)).toBeInTheDocument();
  });
});
