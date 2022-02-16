import * as React from 'react';
import * as PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const YesNoInput = ({ value, handleChange }) => (
  <div className="sq-yes-no-div">
    <FormControl component="fieldset">
      <RadioGroup row aria-label="yes/no" name="row-radio-buttons-group" value={value} onChange={handleChange}>
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  </div>
);

YesNoInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string
};
YesNoInput.defaultProps = {
  value: ''
};

export default YesNoInput;
