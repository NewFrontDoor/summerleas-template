import React from 'react';
import UpcomingEvent from '../models/upcoming-event';

// Import { getFromDrupalAPI } from '../../utils/fetch-json';
const placeholderEvents = [
  {
    title: 'Sunday Service',
    startdate: 'Sunday, x Month, YYYY 9:30AM'
  },
  {
    title: 'Wednesday Event',
    startdate: 'Wednesday, x Month, YYYY 9:30AM'
  },
  {
    title: 'Thursday Event',
    startdate: 'Friday, x Month, YYYY 9:30AM'
  },
  {
    title: 'Friday Event',
    startdate: 'Saturday, x Month, YYYY 9:30AM'
  },
  {
    title: 'Saturday Event',
    startdate: 'Saturday, x Month, YYYY 9:30PM'
  }
];

export default function UpcomingEvents() {
  const upcomingEvents = placeholderEvents;

  /* ComponentWillMount() {
    var that = this;
    getFromDrupalAPI('upcoming_events_api', function (data) {
      that.setState({ events: data })
    });
  } */

  return (
    <section>
      <div className="col-md-4 col-xs-12">
        <div className="region region-content-2-3">
          <div className="block block-block">
            <h2 className="header">Upcoming Events</h2>
            <div className="content">
              <div className="upcoming-events">
                {upcomingEvents
                  ? upcomingEvents.map(event => {
                      return (
                        <UpcomingEvent
                          key={event.title + event.startdate}
                          title={event.title}
                          startdate={event.startdate}
                        />
                      );
                    })
                  : 'Loading, please wait...'}
                <p>
                  For a full list of our events,{' '}
                  <a href="/Events" title="View full calendar">
                    click here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
