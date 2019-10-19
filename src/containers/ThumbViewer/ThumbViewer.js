import React, { Component } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import GalleryInfo from '../../components/Gallery/GalleryInfo';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios-thumb';
import classes from './ThumbViewer.css';
import Pagination from "react-js-pagination";
import { withRouter } from 'react-router-dom';
import ApiClient from '../../axios-thumb';

class ThumbViewer extends Component {
  state = {
    images: [],
    activePage: 1,
    hospital: 'Hybrid',
    dataSourceHd: 'data-uk-rs-mg-leeds-jpg-full',
    dataSourceThumb: 'data-uk-rs-mg-leeds-jpg-thumb',
    totalImages: 10000,
    totalSeries: 2500,
    totalStudies: 700,
    itemsPerPage: 500,
    pageCount: 1,
  }


  query = ` {
    allStudies(first:5) {
      edges {
        node {
          id,
          uuid,
          episodeId,
          patientId,
          date,
          series {
            edges {
              node {
                id,
                uuid,
                modality,
                valid,
                images {
                  edges {
                    node {
                      id,
                      uuid,
                      laterality,
                      viewPosition,
                      spotCompressed,
                      magnified,
                      originalImage,
                      valid,
                      instanceNumber,
                      fpath
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`

  fetchStudies = (activePage) => {
    let offset = this.state.itemsPerPage * (activePage - 1);
    const url = "http://localhost:5000/graphql?query=";
    ApiClient.get(url + this.query, { headers: { 'Accept': 'application/json' } })
      .then(response => {
        let studies = response.data;
        this.setState({ studies: studies });
        let pageCount = Math.ceil(this.totalStudies / this.state.itemsPerPage);
        this.setState({ pageCount: pageCount });
        this.setState({ activePage: activePage });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true });
      })
  }

  fetchImages = (activePage) => {
    let offset = this.state.itemsPerPage * (activePage - 1);
    const url = `https://thumb-viewer.firebaseio.com/images.json?orderBy="$key"&startAt="` + offset + `"&limitToFirst=` + this.state.itemsPerPage; /*+ this.state.itemsPerPage*/
    axios.get(url)
      .then(response => {
        let images = response.data;
        this.setState({ images: images });
        let pageCount = Math.ceil(this.totalImages / this.state.itemsPerPage);
        this.setState({ pageCount: pageCount });
        this.setState({ activePage: activePage });
      })
      .catch((error) => {
        console.log(error)
        this.setState({ error: true });
      })
  }

  componentDidMount() {
    this.fetchImages(this.state.activePage);
  }

  componentWillMount() {
    this.fetchImages(this.state.activePage);
  }

  pageChangeHandler = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
    this.fetchImages(pageNumber);
    this.props.history.push({
      pathname: '/images/' + pageNumber
    });
  }


  render() {
    const { hospital, dataSourceHd, dataSourceThumb, totalStudies, totalSeries, totalImages, images, activePage, itemsPerPage } = this.state

    let imagesArray = Object.keys(images)
      .map(igKey => {
        return { image: images[igKey], key: igKey }
      });

    let gallery = (
      <Gallery
        level={imagesArray}
        page={activePage} />
    );

    let galleryInfo = (
      <GalleryInfo
        hospital={hospital}
        dataSourceHd={dataSourceHd}
        dataSourceThumb={dataSourceThumb}
        totalStudies={totalStudies}
        totalSeries={totalSeries}
        totalImages={totalImages}
      />
    )

    return (
      <Aux>
        <div className={classes.ThumbViewer}>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalImagesCount={totalImages}
            pageRangeDisplayed={5}
            onChange={this.pageChangeHandler.bind(this)} />
        </div>
        {galleryInfo}
        {gallery}

      </Aux>
    );
  }
}

export default withRouter(ThumbViewer);