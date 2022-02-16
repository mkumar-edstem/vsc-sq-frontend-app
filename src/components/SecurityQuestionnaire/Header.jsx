import React from 'react';
import { Grid } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HelpIcon from '../../assets/images/help.png';
import InfoIcon from '../../assets/images/info.png';
import Logo from '../../assets/images/wslogo.png';
import '../../assets/styles/header.scss';

const Header = () => (
  <>
    <Grid className="header-container" item md={12}>
      <Grid item>
        <img className="logo" src={Logo} alt="logo" />
      </Grid>
      <Grid item xs={9} className="head-text">
        Security Questionnaire
      </Grid>
      <Grid item md={12}>
        <ListItem className="list-items">
          <ListItem className="notification-icon" button>
            <ListItemIcon>
              <img src={HelpIcon} alt="notifications" width={23} />
            </ListItemIcon>
          </ListItem>
          <ListItem className="notification-icon" button>
            <ListItemIcon>
              <img src={InfoIcon} alt="notifications" width={23} />
            </ListItemIcon>
          </ListItem>
        </ListItem>
      </Grid>
    </Grid>
  </>
);

export default Header;
