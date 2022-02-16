import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import SuccessPage from '../../components/SuccessPage';

describe('SuccessPage rendering', () => {
  it('rendering Heading and Messages', () => {
    render(
      <SuccessPage
        open
        icons=""
        heading="Heading"
        messages="Messages"
        btnAction1=""
        btnName1="Button1"
        btnAction2=""
        btnName2="Button2"
        btnType={1}
      />
    );
    expect(screen.getByText(/heading/i)).toBeInTheDocument();
    expect(screen.getByText(/Messages/i)).toBeInTheDocument();
  });
  it('rendering Buttons', () => {
    render(
      <SuccessPage
        open
        icons=""
        heading="Heading"
        messages="Messages"
        btnAction1=""
        btnName1="Button1"
        btnAction2=""
        btnName2="Button2"
        btnType={1}
      />
    );
    const button1 = screen.getByRole('button', { label: 'Button1' });
    expect(button1).toBeInTheDocument();
    const button2 = screen.getByRole('button', { label: 'Button2' });
    expect(button2).toBeInTheDocument();
  });
  it('checking Button Actions', () => {
    const history = createMemoryHistory();
    const link = '/assessment-history';
    const btnFunc = () => {
      history.push(link);
    };
    render(
      <Router history={history}>
        <SuccessPage
          open
          icons=""
          heading="Heading"
          messages="Messages"
          btnAction1={btnFunc}
          btnName1="Button1"
          btnAction2=""
          btnName2="Button2"
          btnType={1}
        />
      </Router>
    );
    const button1 = screen.getByRole('button', { label: 'Button1' });
    fireEvent.click(button1, () => {});
    expect(history.location.pathname).toEqual(link);
  });
});
