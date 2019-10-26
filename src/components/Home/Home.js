import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import apiClient from '../../axios';
import Table from 'react-bootstrap/Table';
import classes from './Home.css'
import { withRouter } from 'react-router-dom';
import Pagination from "react-js-pagination";

class Home extends Component {
  state = {
    messages: [],
    messageCounts: [],
    activePage: 1,
    totalMessages: 20000,
    itemsPerPage: 100,
    pageCount: 1,
  }

  fetchMessages = (activePage) => {
    const url = "http://localhost:5000/api/v1/pitch";
    apiClient.get(
      url,
      { params: { page: activePage } })
      .then(response => {
        this.setState({ messages: response.data.body.messages });
        this.setState({ messageCounts: response.data.body.counts });
        let pageCount = Math.ceil(this.totalMessages / this.state.itemsPerPage);
        this.setState({ pageCount: pageCount });
        this.setState({ activePage: activePage });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true });
      })
  }


  componentDidMount() {
    this.fetchMessages(this.state.activePage);
  }

  componentWillMount() {
    this.fetchMessages(this.state.activePage);
  }

  pageChangeHandler = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
    this.fetchMessages(pageNumber);
  }

  render() {
    const { messages, messageCounts, totalMessages, activePage, itemsPerPage, pageCount } = this.state
    let messagesArray = messages.map((message, idx) => {
      return (
        <tr>
          <td>{message.message_id}</td>
          <td>{message.description}</td>
          <td>{message.timestamp}</td>
        </tr>
      );
    });

    let counts = messageCounts.map((messageCount) => {
      return (
        <div className={classes.Info.div}>
          <strong>{messageCount.message_type} <em>#</em></strong>
          <p> {messageCount.count} </p>
        </div>
      )
    });

    let showCurrentPage = () => {
      return (
        <div className={classes.Info.div}>
          <strong>Current Page<em>#</em></strong>
          <p> {activePage} </p>
        </div>
      )
    };

    counts.unshift(showCurrentPage());

    return (
      <Aux>
        <div className={classes.Home}>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={totalMessages}
            pageRangeDisplayed={5}
            onChange={this.pageChangeHandler.bind(this)} />
          <Table bordered hover variant="dark" size="sm">
            <thead>
              <tr>
                <th>Message ID</th>
                <th>Message Type</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {messagesArray}
            </tbody>
          </Table>
          <div className={classes.Info}>
            {counts}
          </div>
        </div>
      </Aux>
    );
  }
}

export default withRouter(Home);