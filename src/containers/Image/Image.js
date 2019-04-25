import React, { Component } from 'react';
import classes from './Image.css';
import LazyLoad from 'react-lazy-load';
import { withRouter } from 'react-router-dom';

class Image extends Component {
  render () {
    return (
      <LazyLoad 
        className={classes.Image}
        offsetVertical={500}>
        <img src={this.props.location.state.url} alt=""/>
      </LazyLoad>
    );
  }
};

export default withRouter(Image);