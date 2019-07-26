import React from 'react';
import PropTypes from 'prop-types';
import UpcomingEvent from '../models/upcoming-event';

export default function UpcomingEvents({upcomingEvents}) {
  return (
    <section className="col-md-4 col-xs-12">
      <h2>Upcoming Events</h2>
      <div className="content">
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
          <a href="/events" title="View full calendar">
            click here
          </a>
          .
        </p>
      </div>
    </section>
  );
}

UpcomingEvents.propTypes = {
  upcomingEvents: PropTypes.array.isRequired
};
