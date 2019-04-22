import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Gallery.css';
import { withRouter } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination'

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
      <img src={item.url} alt="" onClick={() => imageClickHandler(item)}  key={item.key}/>
    );
  });

  return (
    <Aux>
      <div 
        className={classes.Gallery}>
        {/* <Pagination> */}
          {urls}
        {/* </Pagination> */}
      </div>
    </Aux>
  );
};

export default withRouter(gallery);