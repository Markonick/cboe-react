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
    itemsPerPage: 100,
    pageCount: 1,
    schema: 'bmkk',
    firebase: false,
  }

  
  fetchImages = (activePage) => {
    if (this.state.firebase === true) { 
      const url = 'images.json'
      axios.get(url, {
        params: {
          page: activePage,
        },
      })
      .then(response => {
        let offset = this.state.itemsPerPage*(activePage - 1);
        let end = this.state.itemsPerPage*(activePage);
        let images = response.data.slice(offset, end);
        this.setState({images: images});
        this.setState({totalItems: response.data.length});
        let pageCount = Math.ceil(response.data.length / this.state.itemsPerPage);
        this.setState({pageCount: pageCount});
        this.setState({activePage: activePage});
      })
      .catch( (error) => {
        console.log(error)
        this.setState({error: true});
      })
    } else {
      const url = `http://172.20.0.5:5000/api/v1/images/${this.state.schema}`;
      axios.get(url, {
        params: {
          page: activePage,
        },
      })
      .then(res => {
        const data = res.data;
        const status = data[1];
        if (status === 200) {
          let images = JSON.parse(data[0])['images'];
          this.setState({images: images});
          this.setState({totalItems: data.tota_count});
          let pageCount = Math.ceil(data.tota_count / this.state.itemsPerPage);
          this.setState({pageCount: pageCount});
          this.setState({activePage: activePage});
        }
      })
      .catch( (error) => {
        console.log(error)
        this.setState({error: true});
      });
    }
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

    let imagesArray = images.map((url, idx) => {
      return {
        url: url,
        idx: idx,
        key: idx,
      }
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
            pageRangeDisplayed={7}
            onChange={this.pageChangeHandler.bind(this)}/>
        </div>
        {gallery} 
      </Aux>
    );
  }
}

export default withRouter(ThumbViewer);