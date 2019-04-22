import React, { Component } from 'react';
import classes from './QueryBox.css';
import axios from '../../axios-images';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

class QueryBox extends Component {
  state = {
    images: [],
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log('ENTER KEY HIT!!!');
      axios.get('https://thumb-viewer.firebaseio.com/images.json')
      .then(response => {
        this.setState({images: response.data});

        this.props.history.push({
          pathname: '/',
          state: {images: this.state.images}
        });
      })
      .catch( () => {
        this.setState({error: true});
      })
    }
  }

  render() {
    return (
      <div className={classes.QueryBox}>
        <Form>
          <Form.Group controlId="ControlTextarea1">
            <Form.Control size="lg" autoFocus as="textarea" rows="30" onKeyPress={this.handleKeyPress}/>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default withRouter(QueryBox);