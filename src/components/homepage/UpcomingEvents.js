/* eslint-disable */
import React, { Component } from 'react';
import _ from 'lodash';
import { decode } from 'he';
import UpcomingEvent from '../models/UpcomingEvent'

//import { getFromDrupalAPI } from '../../utils/fetchJSON';
const placeholderEvents = [
  {
    "title": "Sunday Service",
    "startdate": "Sunday, x Month, YYYY 9:30AM"
  },
  {
    "title": "Wednesday Event",
    "startdate": "Wednesday, x Month, YYYY 9:30AM"
  },
  {
    "title": "Thursday Event",
    "startdate": "Friday, x Month, YYYY 9:30AM"
  },
  {
    "title": "Friday Event",
    "startdate": "Saturday, x Month, YYYY 9:30AM"
  },
  {
    "title": "Saturday Event",
    "startdate": "Saturday, x Month, YYYY 9:30PM"
  }
];

class UpcomingEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { events: null }
  }

  /*componentWillMount() {
    var that = this;
    getFromDrupalAPI('upcoming_events_api', function (data) {
      that.setState({ events: data })
    });
  }*/

  render() {


    var upcomingEvents = <div>Loading, please wait...</div>;
    if (this.state.events) {
      upcomingEvents = _.map(this.state.events, (event) => {
        return (
          <UpcomingEvent title={event.title} startdate={event.startdate} />
        )
      });
    }

    var upcomingEvents = _.map(placeholderEvents, (event) => {
      return (
        <UpcomingEvent title={event.title} startdate={event.startdate} />
      )
    });

    return (
      <section>
        <div className="col-md-4 col-xs-12">  <div className="region region-content-2-3">

          <div className="block block-block">

            <h2 className="header">Upcoming Events</h2>

            <div className="content">
              <div className="upcoming-events">
                {upcomingEvents}
              </div>
              <p>For a full list of our events, <a href="/Events" title="View full calendar">click here</a>.</p>
            </div>
          </div>
        </div>
        </div>

      </section>
    );
  }
}

export default UpcomingEvents;
