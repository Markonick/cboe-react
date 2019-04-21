import React, { Component } from 'react';
import Gallery from '../../components/Images/Gallery';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios-images';
import classes from '../../components/Images/Gallery.css';

class ThumbViewer extends Component {
  state = {
    images: [],
    index: null, 
    clicked: false,
  }

  componentDidMount () {
    axios.get('https://thumb-viewer.firebaseio.com/images.json')
      .then(response => {
        this.setState({images: response.data});
      })
      .catch( () => {
        this.setState({error: true});
      })
  }

  render () {

    let images = this.state.images.map((url, idx) => {
      return {
        url: url,
        idx: idx,
        key: idx,
      }
    });

    let gallery = (
      <Gallery images={images} className={classes.Gallery}/>
    );
  
    return (
      <Aux>
        {gallery}
      </Aux>
    );
  }
}

export default ThumbViewer;