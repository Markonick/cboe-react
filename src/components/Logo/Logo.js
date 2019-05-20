import React from 'react';
import kheironLogo from '../../assets/images/kheiron.jpg'
import classes from './Logo.css';
import { withRouter } from 'react-router-dom';

const logo = (props) => (
    <div className={classes.Logo}>
        <img 
            src={kheironLogo} alt="k-logo" 
            onClick={props.onClick}
        />
    </div>
);

export default withRouter(logo);