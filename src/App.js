import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Global, css} from '@emotion/core';
import Navigation from './components/navigation';
import HomePageWrapper from './components/homepage/home-page-wrapper';
import OtherPageWrapper from './components/other-page-wrapper';
import Footer from './components/footer';
import {fetchDrupalData} from './utils/fetch-functions'

require('typeface-lato');
require('typeface-roboto-slab');

const globalStyles = css`
html,
  body {
    margin: 0;
    outline: 0;
    padding: 0;
  }
  body {
    color: #777;
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
    color: #c2b49a;
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
  const [pagesData, setpagesData] = useState(null);
  const [pagesFetched, setPagesFetched] = useState(false);

  useEffect(() => {
    if (pagesFetched === false) {
      fetchDrupalData('page', {}).then(response => {
        let mapped = response.map(item => ({
          [item.page_title.toLowerCase()]: item
        }));
        let mappedObj = Object.assign({}, ...mapped);
        setpagesData(mappedObj);
        setPagesFetched(true);
      });
    }
  }, [pagesFetched, pagesData]);
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
            pagesData={pagesData}
          />
        )}
      />
      <Route path="*" component={Footer} />
    </Router>
  );
}
