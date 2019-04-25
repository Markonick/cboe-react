import React, { Component } from 'react';
import classes from './QueryBox.css';
import axios from '../../axios-images';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import SweetAlert from 'react-bootstrap-sweetalert';

class QueryBox extends Component {
  state = {
    images: [],
  }

  querySubmitHandler = () => {
    console.log('ENTER KEY HIT!!!');
    axios.get('images.json')
    .then(response => {
      this.setState({images: response.data});

      this.props.history.push({
        pathname: 'images/1',
        state: {images: this.state.images}
      });
    })
    .catch( () => {
      this.setState({error: true});
    })
  }

  render() {
    return (
      <div className={classes.QueryBox}>
        <Form>
          <Form.Group controlId="ControlTextarea1">
            <Form.Control size="lg" autoFocus as="textarea" rows="10"/>
          </Form.Group>
        </Form>
        <button onClick={this.querySubmitHandler}>Sumbit Query</button>
        <Table bordered hover  variant="dark" size="sm">
          <tbody>
            <tr>
              <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr
                  123123ghrethe56u756jer657kjr67jer6jerjrj76jjkkk
                  Ottoasdassss23423424543554667586987897ssssssssssssssssssssssdadwsrgwdsgr
                  hgfddghdtyuu56j67m8799879789gfhfhghfhffhff
                  Select from * limit 1000 offset 10
                  Select from * limit 1000 offset 10
                  Select from * limit 1000 offset 10
                  Select from * limit 1000 offset 10
                  Select from * limit 1000 offset 10
              </td>
            </tr>
            <tr> 
              <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr</td>
            </tr>
            <tr>
              <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr</td>
            </tr>
            <tr> 
              <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr</td>
            </tr>
            <tr> 
              <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr</td>
            </tr> 
            <tr> 
              <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr</td>
            </tr>
            <tr>
              <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default withRouter(QueryBox);