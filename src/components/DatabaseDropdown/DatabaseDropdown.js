import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from '../../axios-images';
import classes from './DatabaseDropdown.css';
import { withRouter } from 'react-router-dom';

class databaseDropdown extends Component {
  state = {
    images: [],
    error: false, 
  }

  selectHandler = () => {
    console.log('Selected database option!')
    axios.get('https://thumb-viewer.firebaseio.com/images.json')
      .then(response => {
        this.setState({images: response.data});

        this.props.history.push({
          pathname: '/',
          state: {images: this.state.images}
        });
      })
      .catch( (error) => {
        this.setState({error: true});
      })
  }
  render () {
  
    return (
      <Dropdown 
        className={classes.DatabaseDropdown}
        onSelect={this.selectHandler}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Clinical Databases
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default withRouter(databaseDropdown);