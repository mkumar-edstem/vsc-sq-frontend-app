import * as React from 'react';
import * as PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const SingleSelect = ({ options, value, handleChange }) => (
  <div className="sq-single-select-div">
    <FormControl component="fieldset">
      <RadioGroup aria-label="single-select" name="single_select" value={value} onChange={handleChange}>
        {
            options.map(
              (option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              )
            )
          }
      </RadioGroup>
    </FormControl>
  </div>
);
SingleSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string
};
SingleSelect.defaultProps = {
  value: ''
};
export default SingleSelect;
