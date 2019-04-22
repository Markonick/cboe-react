import React from 'react';
import Table from 'react-bootstrap/Table';
import classes from './History.css'
import { withRouter } from 'react-router-dom';

const history = () => {
  return (
    <div className={classes.History}>
      <Table className={classes.History} striped bordered hover>
  
        <tbody className={classes.History}>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default withRouter(history);