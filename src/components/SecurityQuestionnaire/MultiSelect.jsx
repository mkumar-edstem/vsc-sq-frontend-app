import React from 'react';
import * as PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const MultiSelect = ({ options, answers, handleChange }) => {
  const handleCheckChange = (event) => {
    const valuesArray = [...answers];
    if (event.target.checked) {
      valuesArray.push(event.target.name);
    } else {
      const answerIndex = valuesArray.indexOf(event.target.name);
      valuesArray.splice(answerIndex, 1);
    }
    handleChange(valuesArray);
  };
  return (
    <div className="sq-multi-select-div">
      <FormControl component="fieldset">
        <FormGroup>
          {
            options.map((option) => (
              <FormControlLabel
                key={option}
                control={(
                  <Checkbox
                    onChange={handleCheckChange}
                    checked={answers.includes(option)}
                    name={option}
                  />
              )}
                label={option}
              />
            ))
          }
        </FormGroup>
      </FormControl>
    </div>
  );
};
MultiSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  answers: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func.isRequired
};
MultiSelect.defaultProps = {
  answers: []
};
export default MultiSelect;
