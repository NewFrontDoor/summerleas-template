import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Global, css} from '@emotion/core';

import Navigation from './components/navigation';
import HomePageWrapper from './components/homepage/home-page-wrapper';
import OtherPageWrapper from './components/other-page-wrapper';
import Footer from './components/footer';

import './assets/css/mediaelement/mediaelementplayer.min.css';

import './assets/nestor/css/bootstrap.min.css';
import './assets/nestor/css/style.css';

import './assets/nestor/css/color/brown.css';

require('typeface-lato');
require('typeface-roboto-slab');

const globalStyles = css`
  body {
    color: #777;
    font-size: 1.6em;
    line-height: 1.6em;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    text-rendering: optimizeLegibility;
    word-wrap: break-word;
    font-style: normal;
  }

  a {
    text-decoration: none;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  a:hover,
  a:focus,
  a:active {
    color: #2b2b2b;
    text-decoration: none;
  }

  b,
  strong {
    font-weight: 700;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 300;
  }
`;

export default function App() {
  const [globalSermons, setGlobalSermons] = useState(null);
  return (
    <Router>
      <Global styles={globalStyles} />
      <Route path="*" component={Navigation} />
      <Route
        exact
        path="/"
        render={() => (
          <HomePageWrapper
            globalSermons={globalSermons}
            setGlobalSermons={setGlobalSermons}
          />
        )}
      />
      <Route
        path="/:path"
        render={() => (
          <OtherPageWrapper
            globalSermons={globalSermons}
            setGlobalSermons={setGlobalSermons}
          />
        )}
      />
      <Route path="*" component={Footer} />
    </Router>
  );
}
