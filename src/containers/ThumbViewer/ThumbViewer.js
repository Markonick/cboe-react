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
    totalItems: 1,
    itemsPerPage: 10,
    pageCount: 1,
  }

  fetchImages = (activePage) => {
    axios.get('https://thumb-viewer.firebaseio.com/images.json')
      .then(response => {
        let offset = this.state.itemsPerPage*(activePage - 1);
        this.setState({images: response.data.slice(offset, this.state.itemsPerPage)});
        this.setState({totalItems: response.data.length});

        let pageCount = Math.ceil(response.data.length / this.state.itemsPerPage);
        this.setState({pageCount: pageCount});
      })
      .catch( () => {
        this.setState({error: true});
      })
  }

  componentDidMount () {
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

    let imagesArray = images.map((url, idx) => {
      return {
        url: url,
        idx: idx,
        key: idx,
      }
    });

    let gallery = (
      <Gallery 
        images={imagesArray}/>
    );

    return (
      <Aux>     
        <div className={classes.ThumbViewer}>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={totalItems}
            pageRangeDisplayed={7}
            onChange={this.pageChangeHandler.bind(this)}/>
        </div>
        {gallery} 
      </Aux>
    );
  }
}

export default withRouter(ThumbViewer);