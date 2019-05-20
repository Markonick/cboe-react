import React, { Component } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import DatabaseDropdown from '../../DatabaseDropdown/DatabaseDropdown';
import Logo from '../../Logo/Logo';
import { withRouter } from 'react-router-dom';

import classes from './NavigationItems.css';

class NavigationItems extends Component {

  logoClickHander = () => this.props.history.push("/home");

  render() { 
    return (
      <ul className={classes.NavigationItems}>
        <Logo onClick={this.logoClickHander} link="/home"></Logo>
        <NavigationItem link="/">HOME</NavigationItem>
        <NavigationItem link="/images/1">GALLERY</NavigationItem>
        <NavigationItem link="/sql">SQL</NavigationItem>
        <NavigationItem link="/history">HISTORY</NavigationItem>
        <NavigationItem link="/info">INFO</NavigationItem>
        <DatabaseDropdown/>
      </ul>
    );
  }
}

export default withRouter(NavigationItems);