import React, {useState, useEffect} from 'react';
import {getFromDrupalAPI} from '../../utils/fetch-json';
import {CurrentSeries, LatestSermon, RecentSeries} from './sermon-components';
import TitleBreadcrumb from './title-breadcrumb';

const SERMON_LIMIT = 1;

export default function Sermons() {
  const [sermons, setSermons] = useState(null);
  const [recentSeries, setRecentSeries] = useState(null);
  const [latestSermon, setLatestSermon] = useState(null);

  useEffect(() => {
    getFromDrupalAPI('all_sermons_api?limit=' + SERMON_LIMIT, data => {
      setSermons(data);
      setLatestSermon(data[0]);
    });
    getFromDrupalAPI('recent_series_api', data => {
      setRecentSeries(data);
    });
  });

  return (
    <section>
      <TitleBreadcrumb
        title="Sermons"
        breadcrumbs={[['Home', '/'], ['Resources', '/resources']]}
      />
      <div id="content-region">
        <div className="container">
          <div className="row">
            <div id="main-content-region" className="main-content col-xs-12">
              <div className="region region-content">
                <div id="block-system-main" className="block block-system">
                  <div className="content">
                    <div id="node-34" className="node node-page clearfix">
                      <div className="content">
                        <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                          <div className="field-items">
                            <div className="field-item even">
                              <p>
                                Here you'll find all the latest talks and
                                current sermon series we're doing at -Church
                                Name=. Feel free to browse around and check out
                                the different talks.
                              </p>
                              <p>
                                If you're after something specific, and can't
                                find it here, then please{' '}
                                <a href="/allsermons">click here</a> and you'll
                                be able to search through all of our recorded
                                sermons.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-1 bg-color-theme text-color-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-12 text-center-sm">
              <div className="region region-content-1-1">
                <div
                  id="block-views-featured-sermon-1-block-2"
                  className="block block-views"
                >
                  <h2>Latest Sermon</h2>
                  <div className="content">
                    <div className="view view-featured-sermon-1 view-id-featured_sermon_1 view-display-id-block_2 featured-sermon view-dom-id-d5bca4c880cfad7dc17e65326ab52965">
                      <div className="view-content">
                        <LatestSermon latestSermon={latestSermon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-offset-6 col-md-3 col-xs-12 text-center-sm">
              <div className="region region-content-1-2">
                <div
                  id="block-views-sermon-series-block"
                  className="block block-views"
                >
                  <h2>Current Series</h2>
                  <div className="content">
                    <div className="view view-sermon-series view-id-sermon_series view-display-id-block featured-sermon view-dom-id-f76384e2578054bee9a594ea133e2b10">
                      <div className="view-content">
                        <div className="views-row views-row-1 views-row-odd views-row-first views-row-last">
                          <CurrentSeries latestSermon={latestSermon} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="content-2-region"
        className="content-2 bg-color-white text-color-default"
      >
        <div className="container">
          <div className="region region-content-2">
            <div
              id="block-views-sermon-series-block-1"
              className="block block-views"
            >
              <h2 className="header-lightBlue text-center-sm">Recent Series</h2>
              <div className="content">
                <div className="view view-sermon-series view-id-sermon_series view-display-id-block_1 row">
                  <div className="view-content">
                    <RecentSeries recentSeries={recentSeries} />
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
