import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import ThumbViewer from './containers/ThumbViewer/ThumbViewer';
import Image from './containers/Image/Image';
import QueryBox from './containers/QueryBox/QueryBox';
import History from './components/History/History';

import { Route, Switch } from 'react-router-dom'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/images/:page/:imageId" component={Image} />
            <Route path="/sql" component={QueryBox} />
            <Route path="/history" component={History} />
            <Route path="/images/:page" exact component={ThumbViewer} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
