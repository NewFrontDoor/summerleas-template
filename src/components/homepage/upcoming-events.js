import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import UpcomingEvent from '../models/upcoming-event';
import {fetchDrupalData} from '../../utils/fetch-functions';

const Header = styled('h2')`
  color: #c2b49a;
  text-transform: uppercase;
  font-family: Cabin, sans-serif;
`;

export default function UpcomingEvents({upcomingEventsData}) {
  const [upcomingEvents, setUpcomingEvents] = useState(upcomingEventsData);
  const [upcomingEventsFetched, setUpcomingEventsFetched] = useState(
    Boolean(upcomingEventsData)
  );

  useEffect(() => {
    if (upcomingEventsFetched === false) {
      fetchDrupalData('upcomingEvents', {}).then(response => {
        setUpcomingEvents(response);
        setUpcomingEventsFetched(true);
      });
    } else {
      setUpcomingEvents(upcomingEvents);
    }
  }, [upcomingEventsFetched, upcomingEvents]);

  return (
    <section>
      <h2>Upcoming Events</h2>
      {upcomingEvents
        ? upcomingEvents.map(event => {
            return event.url ? (
              event.url.indexOf('http') === 0 ||
              event.url.indexOf('www.') === 0 ? (
                <a href={event.url} rel="noreferrer noopener">
                  <UpcomingEvent
                    key={event.title + event.startdate}
                    title={event.title}
                    startdate={event.startdate}
                  />
                </a>
              ) : (
                <Link to={event.url}>
                  <UpcomingEvent
                    key={event.title + event.startdate}
                    title={event.title}
                    startdate={event.startdate}
                  />
                </Link>
              )
            ) : (
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
        <Link to="/Calendar" title="View full calendar">
          click here
        </Link>
        .
      </p>
    </section>
  );
}

UpcomingEvents.propTypes = {
  upcomingEventsData: PropTypes.array.isRequired
};
