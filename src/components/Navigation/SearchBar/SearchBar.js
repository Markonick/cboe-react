import React, { Component } from 'react';
import classes from './SearchBar.css';
import Form from 'react-bootstrap/Form';

class SearchBar extends Component {
    render() {
        return (
            <div className={classes.SearchBar}>
                <Form.Control
                    type="text" 
                    placeholder="Quick Search"
                />
            </div>
        );
    }
}

export default SearchBar;