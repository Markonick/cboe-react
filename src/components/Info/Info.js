import React from 'react';
import Table from 'react-bootstrap/Table';
import classes from './Info.css'
import { withRouter } from 'react-router-dom';

const info = (props) => {
  return (
    <Table className={classes.Info} bordered hover  variant="dark" size="sm">
  
      <tbody className={classes.Info}>
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
        <tr>
          <td>Ottoasdassssssssssssssssssssssssssdadwsrgwdsgr</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default withRouter(info);