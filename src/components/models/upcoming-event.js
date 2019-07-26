import React from 'react';

export default function UpcomingEvent({title, startdate}) {
  return (
    <div key={title + startdate} className="upcoming-event">
      <div>
        <i className="icon ion-calendar upcoming-event-icon" />
      </div>
      <div
        className="upcoming-event-title"
        dangerouslySetInnerHTML={{__html: title}}
      />
      <div className="upcoming-event-date">{startdate}</div>
    </div>
  );
}
