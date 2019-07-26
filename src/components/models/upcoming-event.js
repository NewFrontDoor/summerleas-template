import React from 'react';
import PropTypes from 'prop-types';

export default function UpcomingEvent({title, startdate, key}) {
  return (
    <div key={key} className="upcoming-event">
      <div>
        <i className="icon ion-calendar upcoming-event-icon" />
      </div>
      <div className="upcoming-event-title">{title}</div>
      <div className="upcoming-event-date">{startdate}</div>
    </div>
  );
}

UpcomingEvent.propTypes = {
  title: PropTypes.string.isRequired,
  startdate: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
};
