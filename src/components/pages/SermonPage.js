/* eslint-disable */
import React, { Component } from 'react';
import _ from 'lodash';
import AudioPlayer from 'react-responsive-audio-player';
import { decode } from 'he'

import { getFromDrupalAPI } from '../../utils/fetchJSON';

import '../../assets/css/audioplayer.css'

class SermonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sermon: null,
      sermonID: this.props.match.params.nid
    }
  }

  componentWillMount() {
    var that = this;
    getFromDrupalAPI('all_sermons_api?filters[nid]=' + this.state.sermonID, function (data) {
      that.setState({ sermon: data })
    });
  }


  render() {
    var sermonTitle = "Sermon Title";
    if (this.state.sermon) {
      if (this.state.sermon.length > 0) {
        var sermonDetails = _.map(this.state.sermon, (sermon) => {
          var sermonImg;
          if (sermon.sermon_img || sermon.sermon_full_img) {
            sermonImg = sermon.sermon_full_img ? sermon.sermon_full_img : sermon.sermon_img;
          }
          else {
            sermonImg = sermon.series_full_img ? sermon.series_full_img : sermon.series_img
          }
          sermonTitle = decode(sermon.node_title);
          return (
            <section key={_.uniqueId()}>
              <div className="content">
                <div>
                  <img className="img-responsive sermon-page-image" src={sermonImg} />
                </div>
                <br />
                <div className="field field-name-field-date-preached field-type-datetime field-label-above">
                  <div className="field-label">Date Preached:&nbsp;</div><div className="field-items">
                    <div className="field-item even">
                      <span className="date-display-single">{sermon.datepreached}</span>
                    </div>
                  </div>
                </div><br />
                <div className="field field-name-field-preacher field-type-text field-label-above">
                  <div className="field-label">Preacher:&nbsp;</div>
                  <div className="field-items">
                    <div className="field-item even">{sermon.preacher ? decode(sermon.preacher) : ""}</div>
                  </div>
                </div><br />
                <div className="field field-name-field-sermon field-type-file field-label-above">
                  <div className="field-label">Sermon:&nbsp;</div>
                  <div className="field-items">
                    <div className="field-item even">

                      <span style={{ padding: "0", maxWidth: "360px" }} className="col-md-5 col-xs-12"><AudioPlayer playlist={[{ url: sermon.url }]} controls={['playpause', 'spacer', 'progress']} /></span>
                      <br /><br />

                      <div className="mediaelement-download-link"><a href={sermon.url}>Download</a></div>
                    </div>
                  </div>
                </div>
              </div>

              <br /><div className="field field-name-field-sermon-series field-type-node-reference field-label-above">
                <div className="field-label">Sermon Series:&nbsp;</div>
                <div className="field-items">
                  <div className="field-item even">{sermon.sermonseries ? <a href={'/series/' + sermon.series_id}>{decode(sermon.sermonseries)}</a> : ""}</div>
                </div>
              </div>
              <br /><div className="field field-name-field-bible-book-s- field-type-taxonomy-term-reference field-label-above">
                <div className="field-label">Bible Passage(s):&nbsp;</div>
                <div className="field-items">
                  <div className="field-item even">{sermon.text ? decode(sermon.text) : ""}</div>
                </div></div>
            </section>

          )
        });
      }
      else {
        var sermonDetails = (<div className="content"><p>Sorry, that sermon could not be found.</p>
          <p>You can find all of our available sermons on <a href="/allsermons">this page.</a> </p></div>)
      }

    }
    else {
      var sermonDetails = <div className="content">Loading, please wait.</div>
    }

    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>{sermonTitle !== "Sermon Title" ? sermonTitle : "Sermon Title"}</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">Resources</span>
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
}

export default SermonPage;
