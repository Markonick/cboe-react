import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import classes from './History.css'
import { withRouter } from 'react-router-dom';
import axios from '../../axios-images';

class History extends Component {
  state = {
    queries: [],
  }

  componentDidMount() {
    axios.get('queries.json')
    .then(response => {
      this.setState({queries: response.data});
    })
    .catch( () => {
      this.setState({error: true});
    })
  }

  render() {
    let queryHistory = this.state.queries.map((query, idx) => {
      return (
        <tr><td>{query}</td></tr>
      );
    });

    return (
      <div className={classes.History}>
        <Table bordered hover variant="dark" size="sm">
          <tbody className={classes.Info}>
            {queryHistory}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default withRouter(History);