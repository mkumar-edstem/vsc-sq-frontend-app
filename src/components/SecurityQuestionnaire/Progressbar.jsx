import React from 'react';
import * as PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const ProgressBar = ({ progressWidth }) => (
  <Grid container className="sq-progressbar-container">
    <div className="progress-bar-div">
      <Grid containerspacing={2}>
        <Grid item xs>
          <Grid container className="progress-base progress-bar">
            <Grid
              className="progress-bar"
              style={{ width: `${progressWidth}%` }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  </Grid>
);

ProgressBar.propTypes = {
  progressWidth: PropTypes.number.isRequired
};

export default ProgressBar;
