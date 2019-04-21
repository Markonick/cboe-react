import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Gallery.css';
import { withRouter } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const gallery = (props) => {

  const imageClickHandler = (item) => {
    console.log("You clicked me ok? id is " + item.idx);
    props.history.push({
      pathname: '/image/' + item.idx,
      state: {url: item.url}
      });
  }
  let urls = props.images.map((item) => {
    return (
      <LazyLoad className={classes.Image} offsetVertical={500} key={item.key}>
        <img src={item.url} alt="" onClick={() => imageClickHandler(item)}/>
      </LazyLoad>
    );
  });

  return (
    <Aux>
      <div 
        className={classes.Gallery}>
        {urls}
      </div>
    </Aux>
  );
};

export default withRouter(gallery);