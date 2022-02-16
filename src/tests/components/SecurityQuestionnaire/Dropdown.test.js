import React from 'react';
import {
  render, screen, fireEvent, act, within
} from '@testing-library/react';
import Dropdown from '../../../components/SecurityQuestionnaire/Dropdown';

describe('Secuirty Questionnaire Dropdown component', () => {
  it('render dropdown with options', () => {
    const handleChange = jest.fn();
    const options = ['option1', 'option2', 'option3'];
    render(<Dropdown handleChange={handleChange} options={options} value="option1" />);
    const option = screen.getByText(/option1/i);
    expect(option).toBeInTheDocument();
  });
  it('simulate dropdown on change', () => {
    const handleChange = jest.fn();
    const options = ['option1', 'option2', 'option3'];
    const { getByRole } = render(<Dropdown handleChange={handleChange} options={options} value="option1" />);
    act(() => fireEvent.mouseDown(getByRole('button')));
    const listbox = within(getByRole('listbox'));
    act(() => fireEvent.click(listbox.getByText(/option2/i)));
    expect(handleChange).toHaveBeenCalled();
  });
});
