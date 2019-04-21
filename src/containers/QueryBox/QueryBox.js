import React, { Component } from 'react';
import classes from './QueryBox.css';
import Form from 'react-bootstrap/Form';

class QueryBox extends Component {
  render() {
    return (
      <div className={classes.QueryBox}>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default QueryBox;