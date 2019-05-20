import React, { Component } from 'react';
import classes from './QueryBox.css';
import axios from '../../axios-images';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

class QueryBox extends Component {
  state = {
    images: [],
    queries: [],
    submitting: false,
    enteredQuery: '',
  }

  querySubmitHandler = () => {
    console.log('Submit KEY HIT!!!');
    const query = {
      text: this.state.enteredQuery
    }
    axios.post('queries.json', query)
    .then(response => {
      this.setState({submitting: true});
      if (response.status === 200) {
        console.log("200");
      }
    })
    .catch( () => {
      this.setState({error: true});
    });

    this.setState({submitting: false});

    this.props.history.push({
      pathname: 'images/1',
      state: {images: this.state.images}
    });
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

  handleChange = (query) => {
    this.setState({enteredQuery: query});
  }

  render() {
    let latestQueries = this.state.queries.map((query) => {
      return (
        <tr><td>{query}</td></tr>
      );
    });

    return (
      <div className={classes.QueryBox}>
        <Form>
          <Form.Group controlId="ControlTextarea1">
            <Form.Control 
            size="lg" 
            autoFocus 
            as="textarea" 
            rows="10"
            onChange={this.handleChange.bind(this)}
            />
          </Form.Group>
        </Form>
        <button onClick={this.querySubmitHandler}>SUBMIT</button>
        <Table bordered hover variant="dark" size="sm">
          <tbody className={classes.Info}>
            {latestQueries}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default withRouter(QueryBox);