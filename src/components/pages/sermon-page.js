import React, {useState, useEffect} from 'react';
import AudioPlayer from 'react-responsive-audio-player';

import {getFromDrupalAPI} from '../../utils/fetch-json';

import '../../assets/css/audioplayer.css';

export default function SermonPage({match}) {
  const [sermon, setSermon] = useState(null);
  const sermonID = match.params.nid;

  useEffect(() => {
    getFromDrupalAPI('all_sermons_api?filters[nid]=' + sermonID, data => {
      setSermon(data);
    });
  });
  if (sermon) {
    if (sermon.length > 0) {
      var sermonDetails = sermon.map(sm => {
        let sermonImg;
        if (sm.sermon_img || sm.sermon_full_img) {
          sermonImg = sm.sermon_full_img ? sm.sermon_full_img : sm.sermon_img;
        } else {
          sermonImg = sm.series_full_img ? sm.series_full_img : sm.series_img;
        }

        return (
          <section key={`${sermonID}-key`}>
            <div className="content">
              <div>
                <img
                  className="img-responsive sermon-page-image"
                  src={sermonImg}
                />
              </div>
              <br />
              <div className="field field-name-field-date-preached field-type-datetime field-label-above">
                <div className="field-label">Date Preached: </div>
                <div className="field-items">
                  <div className="field-item even">
                    <span className="date-display-single">
                      {sm.datepreached}
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <div className="field field-name-field-preacher field-type-text field-label-above">
                <div className="field-label">Preacher: </div>
                <div className="field-items">
                  {sm.preacher ? (
                    <div
                      dangerouslySetInnerHTML={{__html: sm.preacher}}
                      className="field-item even"
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <br />
              <div className="field field-name-field-sermon field-type-file field-label-above">
                <div className="field-label">Sermon: </div>
                <div className="field-items">
                  <div className="field-item even">
                    <span
                      style={{padding: '0', maxWidth: '360px'}}
                      className="col-md-5 col-xs-12"
                    >
                      <AudioPlayer
                        playlist={[{url: sm.url}]}
                        controls={['playpause', 'spacer', 'progress']}
                      />
                    </span>
                    <br />
                    <br />

                    <div className="mediaelement-download-link">
                      <a href={sm.url}>Download</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="field field-name-field-sermon-series field-type-node-reference field-label-above">
              <div className="field-label">Sermon Series: </div>
              <div className="field-items">
                <div className="field-item even">
                  {sm.sermonseries ? (
                    <a
                      href={'/series/' + sm.series_id}
                      dangerouslySetInnerHTML={{__html: sm.sermonseries}}
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
            <br />
            <div className="field field-name-field-bible-book-s- field-type-taxonomy-term-reference field-label-above">
              <div className="field-label">Bible Passage(s): </div>
              <div className="field-items">
                {sm.text ? (
                  <div
                    className="field-item even"
                    dangerouslySetInnerHTML={{__html: sm.text}}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </section>
        );
      });
    } else {
      var sermonDetails = (
        <div className="content">
          <p>Sorry, that sermon could not be found.</p>
          <p>
            You can find all of our available sermons on{' '}
            <a href="/allsermons">this page.</a>{' '}
          </p>
        </div>
      );
    }
  } else {
    var sermonDetails = <div className="content">Loading, please wait.</div>;
  }

  return (
    <section>
      <div
        id="top-content-region"
        className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1"
      >
        <div className="container">
          <div className="row">
            <div
              id="top-content-left-region"
              className="top-content-left col-xs-12 col-md-6 text-center-sm"
            >
              <div id="page-title-block" className="page-title block">
                {sermon.node_title ? (
                  <h1 dangerouslySetInnerHTML={{__html: sermon.node_title}} />
                ) : (
                  <h1>Sermon Title</h1>
                )}
              </div>
            </div>

            <div
              id="top-content-right-region"
              className="top-content-right col-xs-12 col-md-6 text-right text-center-sm"
            >
              <div
                id="page-breadcrumbs-block"
                className="page-breadcrumbs block"
              >
                <div className="breadcrumbs">
                  <a href="/">Home</a>
                  <span className="delimiter">›</span>
                  <span title="" className="nolink">
                    Resources
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content-region">
        <div className="container">
          <div className="row">
            <div id="main-content-region" className="main-content col-xs-12">
              <div className="region region-content">
                <div id="block-system-main" className="block block-system">
                  <div className="content">
                    <div className="node node-audio node-promoted clearfix">
                      {sermonDetails}
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
