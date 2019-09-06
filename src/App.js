import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './components/navigation';
import HomePageWrapper from './components/homepage/home-page-wrapper';
import OtherPageWrapper from './components/other-page-wrapper';
import Footer from './components/footer';

import './assets/css/mediaelement/mediaelementplayer.min.css';

import './assets/css/simplenews/simplenews.css';
import './assets/css/alignmentstyles.css';

import './assets/css/font-awesome/font-awesome.min.css';

import './assets/nestor/css/bootstrap.min.css';
import './assets/nestor/css/ionicons.min.css';
import './assets/nestor/css/flexslider.css';
import './assets/nestor/css/style.css';

import './assets/css/fontyourface/font.css';

import './assets/nestor/css/color/brown.css';

import './assets/css/custom.css';
import './assets/css/events.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="*" component={Navigation} />
          <Route exact path="/" component={HomePageWrapper} />
          <Route path="/:path" component={OtherPageWrapper} />
          <Route path="*" component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
