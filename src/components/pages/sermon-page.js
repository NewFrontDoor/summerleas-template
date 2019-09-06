import React, {useState, useEffect} from 'react';
import {fetchDrupalData} from '../../utils/fetch-functions';
import SermonBlock from './sermon-block';
import TitleBreadcrumb from './title-breadcrumb';

export default function SermonPage({
  match: {
    params: {nid}
  }
}) {
  const [sermon, setSermon] = useState(null);
  useEffect(() => {
    fetchDrupalData('sermons', {'filters[nid]': nid}).then(response => {
      setSermon(response);
    });
  }, [nid]);

  return (
    <>
      <TitleBreadcrumb
        title={sermon ? sermon.node_title : 'Loading...'}
        breadcrumbs={[['Home', '/'], ['Resources', '/resources']]}
      />
      <div className="container">
        {sermon ? (
          <SermonBlock sermon={sermon} />
        ) : (
          <>
            <p>Sorry, that sermon could not be found.</p>
            <p>
              You can find all of our available sermons on{' '}
              <a href="/allsermons">this page.</a>
            </p>
          </>
        )}
      </div>
    </>
  );
}
