import React from 'react';
import cboeLogo from '../../assets/images/cboe.jpg'
import classes from './Logo.css';
import { withRouter } from 'react-router-dom';

const logo = (props) => (
  <div className={classes.Logo}>
    <img
      src={cboeLogo} alt="k-logo"
      onClick={props.onClick}
    />
  </div>
);

export default withRouter(logo);