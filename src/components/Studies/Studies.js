import React, { Component } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios-thumb';
import classes from './Studies.css';
import Pagination from "react-js-pagination";
import { withRouter } from 'react-router-dom';

class Studies extends Component {
  state = {
    studies: [],
    activePage: 1,
    totalItems: 10000,
    itemsPerPage: 500,
    pageCount: 1,
  }

  query = `query {
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
    const url = `http://localhost:5000/graphql`

    axios.get(url, this.query)
      .then(response => {
        let studies = response.data;
        this.setState({ studies: studies });
        let pageCount = Math.ceil(this.totalItems / this.state.itemsPerPage);
        this.setState({ pageCount: pageCount });
        this.setState({ activePage: activePage });
      })
      .catch((error) => {
        console.log(error)
        this.setState({ error: true });
      })
  }

  componentDidMount() {
    this.fetchStudies(this.state.activePage);
  }

  componentWillMount() {
    this.fetchStudies(this.state.activePage);
  }

  pageChangeHandler = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
    this.fetchStudies(pageNumber);
    this.props.history.push({
      pathname: '/studies/' + pageNumber
    });
  }

  render() {
    const { totalItems, studies, activePage, itemsPerPage } = this.state

    let studiesArray = Object.keys(studies)
      .map(igKey => {
        return { study: studies[igKey], key: igKey }
      });

    let gallery = (
      <Gallery
        studies={studiesArray}
        page={activePage} />
    );

    return (
      <Aux>
        <div className={classes.ThumbViewer}>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={totalItems}
            pageRangeDisplayed={5}
            onChange={this.pageChangeHandler.bind(this)} />
        </div>
        {gallery}
      </Aux>
    );
  }
}

export default withRouter(Studies);