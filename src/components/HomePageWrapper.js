/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';

import Slider from './Slider';
import HomePageContent from './HomePageContent';
import Footer from './Footer';

class HomePageWrapper extends Component {
  render() {
    return (
      <section>
          <div className="main-wrapper wide">
              <Slider />
              <HomePageContent />
          </div>
            <Footer />
      </section>
    );
  }
}

export default HomePageWrapper;
