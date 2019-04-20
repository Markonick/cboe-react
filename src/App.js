import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import ThumbViewer from './containers/ThumbViewer/ThumbViewer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <ThumbViewer/>
        </Layout>
      </div>
    );
  }
}

export default App;
