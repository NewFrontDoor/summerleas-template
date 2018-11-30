import React, { Component } from 'react';
import _ from 'lodash';
import { decode } from 'he';

class UpcomingEvent extends Component {

    render() {
        return (
            <div key={_.uniqueId()} className="upcoming-event">
                <div><i className="icon ion-calendar upcoming-event-icon" /></div>
                <div className="upcoming-event-title">{decode(this.props.title)}</div>
                <div className="upcoming-event-date">{this.props.startdate}</div>
            </div>


        );
    }
}

export default UpcomingEvent;
