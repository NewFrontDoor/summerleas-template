import React, {useState, useEffect} from 'react';
import {fetchDrupalData} from '../../utils/fetch-functions';
import TitleBreadcrumb from './title-breadcrumb';
import SermonTable from './sermon-table';
import {Link} from 'react-router-dom'

export default function SermonSeriesPage({
  match: {
    params: {nid}
  }
}) {
  const [sermons, setSermons] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchDrupalData('sermons', {filters: [{sermonSeries: nid}]}).then(
      response => {
        setSermons(response);
        setLoaded(true);
      }
    );
  }, [nid]);

  if (!loaded) {
    return (
      <div className="content">
        <p>Fetching content... please wait</p>
      </div>
    );
  }

  if (sermons.length === 0 && loaded) {
    return (
      <div className="content">
        <p>Sorry, this sermon series could not be found.</p>
        <p>
          You can find all of our available sermons on{' '}
          <Link to="/allsermons">this page.</Link>
        </p>
      </div>
    );
  }

  return (
    <section>
      <TitleBreadcrumb
        title={sermons[0].sermonseries ? sermons[0].sermonseries : ''}
        breadcrumbs={[['Home', '/'], ['Resources', '/resources']]}
      />
      <div id="content-region">
        <div className="container">
          <div className="row">
            <div id="main-content-region" className="main-content col-xs-12">
              <div className="region region-content">
                <div id="block-system-main" className="block block-system">
                  <div className="content">
                    <div>
                      <img
                        className="img-responsive sermon-series-page-image"
                        src={
                          sermons[0].series_full_img
                            ? sermons[0].series_full_img
                            : sermons[0].series_img
                        }
                      />
                    </div>
                    <br />
                    <div className="view-content">
                      <h2 className="header-lightBlue">Sermons</h2>
                      <SermonTable sermons={sermons} />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
