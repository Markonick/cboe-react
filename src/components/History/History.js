import React from 'react';
import Table from 'react-bootstrap/Table';
import classes from './History.css'
import { withRouter } from 'react-router-dom';

const history = (props) => {
  return (
    <Table className={classes.History} striped bordered hover  variant="dark" size="sm">
      <tbody>
        <tr>
          <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr</td>
        </tr>      <tr>
          <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr</td>
        </tr>      <tr>
          <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr</td>
        </tr>      <tr>
          <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr</td>
        </tr>      <tr>
          <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr</td>
        </tr>      <tr>
          <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr</td>
        </tr>      <tr>
          <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default withRouter(history);