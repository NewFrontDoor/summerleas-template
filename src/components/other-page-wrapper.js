import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import OtherPageContent from './other-page-content';

import AllSermons from './pages/all-sermons';
import Sermons from './pages/sermons';
import SermonPage from './pages/sermon-page';
import SermonSeriesPage from './pages/sermon-series-page';
import OurPeople from './pages/our-people';
import ContactUs from './pages/contact-us';

class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/AllSermons" component={AllSermons} />
          <Route exact path="/Sermons" component={Sermons} />
          <Route exact path="/sermon/:nid" component={SermonPage} />
          <Route exact path="/sermon/:nid/:title" component={SermonPage} />
          <Route exact path="/series/:nid" component={SermonSeriesPage} />
          <Route
            exact
            path="/series/:nid/:title"
            component={SermonSeriesPage}
          />

          <Route exact path="/OurPeople" component={OurPeople} />
          <Route exact path="/ContactUs" component={ContactUs} />

          <Route path="/*" component={OtherPageContent} />
        </Switch>
      </section>
    );
  }
}

export default OtherPageWrapper;
