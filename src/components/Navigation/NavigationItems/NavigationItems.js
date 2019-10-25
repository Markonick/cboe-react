import React, { Component } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';
import { withRouter } from 'react-router-dom';

import classes from './NavigationItems.css';

class NavigationItems extends Component {

  logoClickHander = () => this.props.history.push("/home");

  render() {
    return (
      <ul className={classes.NavigationItems}>
        <Logo onClick={this.logoClickHander} link="/"></Logo>
        <NavigationItem link="/">HOME</NavigationItem>
      </ul>
    );
  }
}

export default withRouter(NavigationItems);