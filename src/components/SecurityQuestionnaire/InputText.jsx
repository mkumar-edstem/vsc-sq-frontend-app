import React from 'react';
import * as PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const InputText = ({ value, handleChange }) => (
  <div className="sq-text-input-div">
    <TextField
      className="sq-text-input"
      minRows={5}
      maxRows={5}
      multiline
      fullWidth
      placeholder="Type here"
      variant="outlined"
      size="medium"
      name="vendor_overview"
      value={value}
      onChange={handleChange}
    />
  </div>
);

InputText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string
};
InputText.defaultProps = {
  value: ''
};

export default InputText;
