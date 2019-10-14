import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from '../../axios-thumb';
import classes from './DatabaseDropdown.css';
import { withRouter } from 'react-router-dom';

class DatabaseDropdown extends Component {
  state = {
    images: [],
    databases: [],
    toggle: false,
    error: false, 
  }

  componentDidMount() {
    axios.get('https://thumb-viewer.firebaseio.com/databases.json')
      .then(response => {
        this.setState({databases: response.data});
      })
      .catch( (error) => {
        this.setState({error: true});
      })
  }

  selectHandler = () => {
    console.log('Selected database option!')
    axios.get('https://thumb-viewer.firebaseio.com/images.json')
      .then(response => {
        this.setState({images: response.data});

        this.props.history.push({
          pathname: '/images/1',
          state: {images: this.state.images}
        });
      })
      .catch( (error) => {
        this.setState({error: true});
      })
  }

  onToggle = (toggle) => {
    if(this.state.toggle === toggle) {
      this.setState({toggle: !this.state.toggle});
    }
  }

  render () {
    let count = 0;
    let databases = this.state.databases.map((db) => {
      return (
        <Dropdown.Item key={count++}>{db}</Dropdown.Item>
      )
    });

    return (
      <DropdownButton
        title="DATABASES"
        className={classes.DatabaseDropdown}
        onSelect={this.selectHandler}
        onToggle={this.onToggle}>     
        {databases}
      </DropdownButton>
    );
  }
}

export default withRouter(DatabaseDropdown);