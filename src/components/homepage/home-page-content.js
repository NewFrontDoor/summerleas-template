import React, {useState, useEffect} from 'react';
import {fetchDrupalData} from '../../utils/fetch-functions';
import LatestSermon from './latest-sermon';
import WhereToFindUs from './where-to-find-us';
import UpcomingEvents from './upcoming-events';

const churchDeets = {
  churchName: 'Sample Church',
  streetAddress: '123 Big Walk Way',
  city: 'Small town',
  state: 'WA'
};

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

export default function HomePageContent() {
  const [latestSermon, setLatestSermon] = useState({});
  const [churchDetails, setChurchDetails] = useState(churchDeets);
  const [upcomingEvents, setUpcomingEvents] = useState(placeholderEvents);

  useEffect(() => {
    fetchDrupalData('sermons', {limit: 1}).then(response => {
      setLatestSermon(response);
    });
  }, []);

  return (
    <section>
      <div className="content-2 bg-color-white text-color-default">
        <div className="container">
          <div className="row">
            <LatestSermon latestSermon={latestSermon} />
            <WhereToFindUs churchDetails={churchDetails} />
            <UpcomingEvents upcomingEvents={upcomingEvents} />
          </div>
        </div>
      </div>
    </section>
  );
}
