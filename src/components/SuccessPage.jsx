import React from 'react';
import { Grid, Button } from '@material-ui/core';
import '../assets/styles/success-page.scss';
import * as PropTypes from 'prop-types';

const SuccessPage = ({
  open,
  icons,
  heading,
  messages,
  btnAction1,
  btnName1,
  btnAction2,
  btnName2,
  btnType = 1
}) => {
  if (!open) return null;
  return (
    <>
      <Grid className="sp-wrap" container item xs={11}>
        <Grid container className="sp-container" item xs={6}>
          <Grid item xs={12} className="sp-icons">
            <img src={icons} alt="icons" />
          </Grid>
          <Grid item xs={12} className="sp-head">
            {heading}
          </Grid>
          <Grid item xs={12} className="sp-content">
            {messages}
          </Grid>
          <Grid item xs={12} className="sp-btns">
            <Button
              variant="outlined"
              fullWidth
              style={{ width: '150px' }}
              className="sp-btn1-active"
              onClick={btnAction1}
            >
              {btnName1}
            </Button>
            {btnType === 2 ? (
              <Button
                variant="outlined"
                className="sp-btn2-active"
                color="primary"
                style={{ width: 'auto' }}
                onClick={btnAction2}
              >
                {btnName2}
              </Button>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

SuccessPage.propTypes = {
  open: PropTypes.bool.isRequired,
  icons: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  messages: PropTypes.string.isRequired,
  btnAction1: PropTypes.func.isRequired,
  btnName1: PropTypes.string.isRequired,
  btnAction2: PropTypes.func.isRequired,
  btnName2: PropTypes.string.isRequired,
  btnType: PropTypes.number.isRequired
};

export default SuccessPage;
