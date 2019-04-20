import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" >Gallery</NavigationItem>
    <NavigationItem link="/sql" >Sql Input</NavigationItem>
    <NavigationItem link="/history">History</NavigationItem>
    <NavigationItem link="/info">Info</NavigationItem>
    <NavigationItem link="/databases">Clinical Databases</NavigationItem>

  </ul>
);

export default navigationItems;