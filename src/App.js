import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';

import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
