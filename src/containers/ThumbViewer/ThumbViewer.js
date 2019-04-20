import React, { Component } from 'react';
import Gallery from '../../components/Images/Gallery';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios-images';
import { Router, Route, Link } from 'react-router-dom'; 

class ThumbViewer extends Component {
  state = {
    images: [],
    clicked: false,
  }

  componentDidMount () {
    axios.get('https://thumb-viewer.firebaseio.com/images.json')
      .then(response => {
        this.setState({images: response.data});
      })
      .catch( (error) => {
        this.setState({error: true});
      })
  }

  imageClickHandler = (url, index) => {
    this.setState({clicked: true});
    this.setState({url: url});
    this.setState({index: index});
    return
  }

  render () {
    let images = this.state.images.map((url, idx) => {
      return {
        clicked: this.state.clicked,
        url: url,
        idx: idx,
        key: idx,
      }
    });

    let gallery = (
      <Gallery images={images} />
    );
  
    return (
      <Aux>
        {gallery}
      </Aux>
    );
  }
}

export default ThumbViewer;