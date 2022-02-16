import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from '../../../components/SecurityQuestionnaire/Progressbar';

describe('Secuirty Questionnaire Progress bar component', () => {
  it('render ProgressBar component', () => {
    render(<ProgressBar progressWidth={38} />);
  });
});
