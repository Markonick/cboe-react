import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import DatabaseDropdown from '../../DatabaseDropdown/DatabaseDropdown';

import classes from './NavigationItems.css';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" >Gallery</NavigationItem>
    <NavigationItem link="/sql" >Sql Input</NavigationItem>
    <NavigationItem link="/history">History</NavigationItem>
    <NavigationItem link="/info">Info</NavigationItem>
    <DatabaseDropdown/>
  </ul>
);

export default navigationItems;