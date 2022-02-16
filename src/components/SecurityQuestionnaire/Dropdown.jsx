import * as React from 'react';
import * as PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Dropdown = ({ options, value, handleChange }) => (
  <div className="sq-dropdown-div">
    <FormControl>
      <Select
        className="sq-form-select"
        placeholder="Type Label Name"
        variant="outlined"
        margin="dense"
        displayEmpty
        value={value}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Without label', 'data-testid': 'sq-dropdown' }}
        required
      >
        <MenuItem value="" disabled>
          Select
        </MenuItem>
        {
                options.map((option) => (<MenuItem key={option} value={option}>{option}</MenuItem>))
              }
      </Select>
    </FormControl>
  </div>
);

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};
Dropdown.defaultProps = {
  value: ''
};

export default Dropdown;
