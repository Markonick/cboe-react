import React, { Component } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios-images';
import classes from './ThumbViewer.css';
import Pagination from "react-js-pagination";
import { withRouter } from 'react-router-dom';

class ThumbViewer extends Component {
  state = {
    images: [],
    activePage: 1,
    totalItems: 10000,
    itemsPerPage: 500,
    pageCount: 1,
  }

  fetchImages = (activePage) => {
    let offset = this.state.itemsPerPage*(activePage - 1);
    const url = `images.json?orderBy="$key"&startAt="` + offset + `"&limitToFirst=` + this.state.itemsPerPage; /*+ this.state.itemsPerPage*/
    axios.get(url)
    .then(response => {
      let images = response.data;
      this.setState({images: images});
      let pageCount = Math.ceil(this.totalItems / this.state.itemsPerPage);
      this.setState({pageCount: pageCount});
      this.setState({activePage: activePage});
    })
    .catch( (error) => {
      console.log(error)
      this.setState({error: true});
    })
  }

  componentDidMount () {
    this.fetchImages(this.state.activePage);
  }

  componentWillMount () {
    this.fetchImages(this.state.activePage);
  }

  pageChangeHandler = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
    this.fetchImages(pageNumber);
    this.props.history.push({
      pathname: '/images/' + pageNumber
    });
  }

  render () {
    const { totalItems, images, activePage, itemsPerPage } = this.state

    let imagesArray = Object.keys(images)
      .map(igKey => {
        return {image: images[igKey], key: igKey}
      });

    let gallery = (
      <Gallery 
        images={imagesArray}
        page={activePage}/>
    );

    return (
      <Aux>     
        <div className={classes.ThumbViewer}>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={totalItems}
            pageRangeDisplayed={5}
            onChange={this.pageChangeHandler.bind(this)}/>
        </div>
        {gallery} 
      </Aux>
    );
  }
}

export default withRouter(ThumbViewer);