import React, {useState, useEffect} from 'react';
import {fetchDrupalData} from '../../utils/fetch-functions';
import LatestSermon from './latest-sermon';
import WhereToFindUs from './where-to-find-us';
import UpcomingEvents from './upcoming-events';

export default function HomePageContent() {
  const [latestSermon, setLatestSermon] = useState([]);

  useEffect(() => {
    fetchDrupalData('sermons', {limit: 1}).then(response =>
      setLatestSermon(response)
    );
  }, []);

  return (
    <section>
      <div className="content-2 bg-color-white text-color-default">
        <div className="container">
          <div className="row">
            {latestSermon.length === 0 ? (
              'loading...'
            ) : (
              <LatestSermon latestSermon={latestSermon} />
            )}
            <WhereToFindUs />
            <UpcomingEvents />
          </div>
        </div>
      </div>
    </section>
  );
}
