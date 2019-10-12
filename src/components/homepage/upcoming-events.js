import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import UpcomingEvent from '../models/upcoming-event';

export default function UpcomingEvents({upcomingEvents}) {
  return (
    <section>
      <h2>Upcoming Events</h2>
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
        <Link to="/events" title="View full calendar">
          click here
        </Link>
        .
      </p>
    </section>
  );
}

UpcomingEvents.propTypes = {
  upcomingEvents: PropTypes.array.isRequired
};
