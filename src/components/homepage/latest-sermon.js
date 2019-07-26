import React from 'react';
import AudioPlayer from 'react-responsive-audio-player';

import '../../assets/css/audioplayer.css';

export default function LatestSermon({latestSermon}) {
  return (
    <section>
      <div className="col-md-4 col-xs-12">
        <div className="region region-content-2-1">
          <div className="block block-views">
            <h2 className="header-lightBlue">Latest Sermon</h2>
            <div key={latestSermon.nid} className="content">
              <div className="view view-latest-sermon view-id-latest_sermon view-display-id-block view-dom-id-78390e62fd38513a05d7e159bfdf897a">
                <div className="view-content">
                  <div className="views-row views-row-1 views-row-odd views-row-first views-row-last">
                    <div className="views-field views-field-field-front-page-thumbnail">
                      <div className="field-content">
                        <img
                          className="latestSermon-img"
                          src={latestSermon.sermon_img}
                          width="600"
                          height="450"
                        />
                      </div>
                    </div>

                    <span>
                      <div>
                        <a
                          dangerouslySetInnerHTML={{
                              __html: latestSermon.node_title
                                ? latestSermon.node_title
                                : 'Untitled'
                            }}
                            href={`/sermon/${latestSermon.nid}`}
                        />
                      </div>
                    </span>
                    <span>
                      <div>{latestSermon.preacher}</div>
                    </span>
                    <span className="views-field views-field-field-sermon">
                      <span className="field-content">
                        <AudioPlayer
                          playlist={[{url: latestSermon.url}]}
                          controls={['playpause', 'spacer', 'progress']}
                        />
                      </span>
                    </span>
                    <span className="views-field views-field-field-sermon-1">
                      <span className="field-content">
                        <a href={latestSermon.url}>Download Sermon</a>
                      </span>
                    </span>
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
