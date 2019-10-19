import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import ThumbViewer from './containers/ThumbViewer/ThumbViewer';
import Image from './containers/Image/Image';
import History from './components/History/History';
import QueryBox from './containers/QueryBox/QueryBox';
import Info from './components/Info/Info';
import Home from './components/Home/Home';

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
            <Route path="/info" component={Info} />
            <Route path="/images/:page" exact component={ThumbViewer} />
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
