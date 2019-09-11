import React, {useState, useEffect} from 'react';
import {fetchDrupalData} from '../../utils/fetch-functions';
import TitleBreadcrumb from './title-breadcrumb';
import SermonTable from './sermon-table';
import {Link} from 'react-router-dom'

import '../../assets/css/allsermonspage/css_ctvtxTMYPLy1gdv3lVTneGtWHVwWHoP476bpbqSql9o.css';
import '../../assets/css/allsermonspage/css_nnBtPUJp1fJS2GsB41ThE6FDdZwUsGHSwaEUER2e1oo.css';
import '../../assets/css/allsermonspage/css_PGbJgHCUCBf4dg7K9Kt8aAwsApndP4GZ9RuToPy3-Fk.css';
import '../../assets/css/allsermonspage/css_TRZgPl9A0LjXjIaop2Mnuyu5AAgskji-vAnShbyyBXY.css';
import '../../assets/css/allsermonspage/css_uyDmOe2sjPMSKgtMaUqVxDRgnvOYkOnT_tIsvpiVsRg.css';
import '../../assets/css/allsermonspage/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css';
import '../../assets/css/allsermonspage/css_YLWdW6wV7Ski57_eSxMdUCyO9zKEBlsYDkC-PNa2_KM.css';

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
