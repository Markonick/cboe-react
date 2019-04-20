import React from 'react';
import classes from './Image.css';

const image = (props) => {
  return (
    <div className={classes.Image}>
      <img src={props.url} alt="" onClick={props.clicked}/>
    </div>
  );
};

export default image;