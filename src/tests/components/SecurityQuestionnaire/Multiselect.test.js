import React from 'react';
import {
  render, screen, fireEvent, act
} from '@testing-library/react';
import MultiSelect from '../../../components/SecurityQuestionnaire/MultiSelect';

describe('Security Questionnaire Multi select Component', () => {
  it('render Multi Select component', () => {
    const handleChange = jest.fn();
    const values = ['option1', 'option2'];
    const options = ['option1', 'option2', 'options3', 'options4'];
    render(<MultiSelect answers={values} options={options} handleChange={handleChange} />);
    expect(screen.getByText(/option1/i)).toBeInTheDocument();
    expect(screen.getByText(/option2/i)).toBeInTheDocument();
    expect(screen.getByText(/option2/i)).toBeInTheDocument();
  });
  it('simulate deselect', () => {
    const handleChange = jest.fn();
    const values = ['option1', 'option2'];
    const options = ['option1', 'option2', 'options3', 'options4'];
    render(<MultiSelect answers={values} options={options} handleChange={handleChange} />);
    act(() => fireEvent.click(screen.getByText(/option1/i)));
    expect(handleChange).toHaveBeenCalled();
  });
  it('simulate select', () => {
    const handleChange = jest.fn();
    const values = ['option1', 'option2'];
    const options = ['option1', 'option2', 'option3', 'option4'];
    render(<MultiSelect answers={values} options={options} handleChange={handleChange} />);
    act(() => fireEvent.click(screen.getByText(/option3/i)));
    expect(handleChange).toHaveBeenCalled();
  });
});
