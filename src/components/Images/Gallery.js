import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Image from './Image';
import classes from './Gallery.css';

const gallery = (props) => {
  let urls = props.images.map((url, clicked, idx, key) => {
    return (
      <Image
        className={classes.Gallery}
        clicked={clicked}
        url={url}
        idx={idx}
        key={key}/>
    );
  });

  return (
    <Aux>
      <div>
        {urls}
      </div>
    </Aux>
  );
};

export default gallery;