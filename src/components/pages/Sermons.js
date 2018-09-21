/* eslint-disable */
import React, { Component } from 'react';

import _ from 'lodash'
import { decode } from 'he'
import { getFromDrupalAPI, searchDrupalSermons } from '../../utils/fetchJSON';

import '../../assets/css/allsermonspage/css_ctvtxTMYPLy1gdv3lVTneGtWHVwWHoP476bpbqSql9o.css';
import '../../assets/css/allsermonspage/css_nnBtPUJp1fJS2GsB41ThE6FDdZwUsGHSwaEUER2e1oo.css';
import '../../assets/css/allsermonspage/css_PGbJgHCUCBf4dg7K9Kt8aAwsApndP4GZ9RuToPy3-Fk.css';
import '../../assets/css/allsermonspage/css_TRZgPl9A0LjXjIaop2Mnuyu5AAgskji-vAnShbyyBXY.css';
import '../../assets/css/allsermonspage/css_uyDmOe2sjPMSKgtMaUqVxDRgnvOYkOnT_tIsvpiVsRg.css';
import '../../assets/css/allsermonspage/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css';
import '../../assets/css/allsermonspage/css_YLWdW6wV7Ski57_eSxMdUCyO9zKEBlsYDkC-PNa2_KM.css';

import sermonSeriesImage from '../../assets/img/sermonSeriesImage.jpg';

const SERMON_LIMIT = 50;

class Sermons extends Component {
  constructor() {
    super();
    this.state = {
      sermons: null,
      sermonSeries: null,
      latestSermon: null
    }
  }

  componentWillMount() {
    var that = this;

    getFromDrupalAPI('all_sermon_series_api', function (data) {
      that.setState({ sermonSeries: data });
    });

    getFromDrupalAPI('all_sermons_api?limit=' + SERMON_LIMIT, function (data) {
      that.setState({ sermons: data });
      that.setState({ latestSermon: data[0] });
    });

  }
  render() {

    if (!this.state.sermons || !this.state.latestSermon) {
      var sermons = <tr><td>Loading, please wait.</td></tr>;
      var latestSermon = <div>Loading, please wait.</div>
    }
    else {
      var tdPadding = { padding: "0px 5px 0px 5px" };
      var sermons = _.map(this.state.sermons, (sermon) => {
        return (
          <tr key={_.uniqueId()} className="odd even">
            {sermon.node_title ? <td style={tdPadding} dangerouslySetInnerHTML={{ __html: sermon.node_url }} /> : <td style={tdPadding}></td>}
            <td style={tdPadding}>{sermon.sermonseries ? decode(sermon.sermonseries) : ''}</td>
            <td style={tdPadding}>{sermon.text ? decode(sermon.text) : ''}</td>
            <td style={tdPadding}>{decode(sermon.preacher)}</td>
            <td style={tdPadding}>{sermon.datepreached}</td>
            <td style={tdPadding}><a href={sermon.url} target="_blank"> [Download]</a></td>
          </tr>
        )
      });

      var latestSermon = (<div className="views-row views-row-1 views-row-odd views-row-first views-row-last">
        <div className="views-field views-field-field-thumbnail-image">        <div className="field-content">
          <a href={this.state.latestSermon.node_path}><img src={sermonSeriesImage} width="300" height="300" alt="" /></a></div>  </div>
        <div className="views-field views-field-title-1">
          <span className="field-content">{this.state.latestSermon.sermonseries}</span>  </div>
        <div>
          {this.state.latestSermon.node_url ? <span dangerouslySetInnerHTML={{ __html: this.state.latestSermon.node_url }} /> : <span></span>}  </div>
        <div className="views-field views-field-field-preacher">
          <div className="field-content">{decode(this.state.latestSermon.preacher)}</div>  </div>  </div>);
    }

    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Sermons</h1>
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

              {/* If the Sidebar First has content then it will be rendered */}


              {/* /Sidebar First region */}

              {/* Rendering of the main content */}

              <div id="main-content-region" className="main-content col-xs-12">

                <div className="region region-content">

                  <div id="block-system-main" className="block block-system">


                    <div className="content">
                      <div id="node-34" className="node node-page clearfix">




                        <div className="content">
                          <div className="field field-name-body field-type-text-with-summary field-label-hidden"><div className="field-items"><div className="field-item even"><p>Here you'll find all the latest talks and current sermon series we're doing at Cornerstone. Feel free to browse around and check out the different talks. We've also highlighted a couple of talks that we think could be really valuable if you're new to Christianity, or if you're new to Cornerstone and want to find out what we're all about.</p><p>(If you're after something specific, and can't find it here, then please click <a href="/allsermons">here</a> where you&apos;ll be able to search through all of our recorded sermons)</p></div></div></div>  </div>



                      </div>
                    </div>
                  </div>  </div>

              </div>

            </div> {/* /row */}
          </div> {/* /container */}
        </div>

        <div className="content-1 bg-color-theme text-color-light">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-xs-12 text-center-sm">  <div className="region region-content-1-1">

                <div id="block-views-featured-sermon-1-block-2" className="block block-views">

                  <h2>Latest Sermon</h2>

                  <div className="content">
                    <div className="view view-featured-sermon-1 view-id-featured_sermon_1 view-display-id-block_2 featured-sermon view-dom-id-d5bca4c880cfad7dc17e65326ab52965">



                      <div className="view-content">
                        {latestSermon}
                      </div>






                    </div>  </div>
                </div>  </div>
              </div>
              <div className="col-md-3 col-xs-12 text-center-sm">  <div className="region region-content-1-2">

                <div id="block-views-sermon-series-block" className="block block-views">

                  <h2>Current Series</h2>

                  <div className="content">
                    <div className="view view-sermon-series view-id-sermon_series view-display-id-block featured-sermon view-dom-id-f76384e2578054bee9a594ea133e2b10">



                      <div className="view-content">
                        <div className="views-row views-row-1 views-row-odd views-row-first views-row-last text-center">

                          <div className="views-field views-field-field-thumbnail-image">        <div className="field-content"><a href="/currentseries"><img src={sermonSeriesImage} width="300" height="300" alt="" /></a></div>  </div>
                          <div className="views-field views-field-title">        <span className="field-content"><a href="/currentseries">Current Series Name</a></span>  </div>  </div>
                      </div>






                    </div>  </div>
                </div>  </div>
              </div>
              <div className="col-md-3 col-xs-12 text-center-sm">  <div className="region region-content-1-3">

                <div id="block-views-featured-sermon-1-block" className="block block-views">

                  <h2>Featured Series</h2>

                  <div className="content">
                    <div className="view view-featured-sermon-1 view-id-featured_sermon_1 view-display-id-block featured-sermon view-dom-id-e926a97b8c8d04b6a41a8a0cdcbe9d3e">



                      <div className="view-content">
                        <div className="views-row views-row-1 views-row-odd views-row-first views-row-last">

                          <div className="views-field views-field-field-thumbnail-image">        <div className="field-content"><a href="/sermons/Featured1"><img src={sermonSeriesImage} width="300" height="300" alt="" /></a></div>  </div>
                          <div className="views-field views-field-title-1">        <span className="field-content"><a href="/otherFeaturedSeries">Other Featured Series</a></span>  </div>
                          <span>        <span><a href="/sermons/Featured1">Featured Series Sermon</a></span>  </span>
                          <span className="views-field views-field-field-preacher">        <div className="field-content">Preacher</div>  </span>  </div>
                      </div>






                    </div>  </div>
                </div>  </div>
              </div>
              <div className="col-md-3 col-xs-12 text-center-sm">  <div className="region region-content-1-4">

                <div id="block-views-featured-sermon-1-block-1" className="block block-views">

                  <h2>Featured Series</h2>

                  <div className="content">
                    <div className="view view-featured-sermon-1 view-id-featured_sermon_1 view-display-id-block_1 featured-sermon view-dom-id-c9e5d9c33c6e94c1f804e4b4b3f5bb2c">



                      <div className="view-content">
                        <div className="views-row views-row-1 views-row-odd views-row-first views-row-last">

                          <div className="views-field views-field-field-thumbnail-image">        <div className="field-content"><a href="/sermons/Featured2"><img src={sermonSeriesImage} width="300" height="300" alt="" /></a></div>  </div>
                          <div className="views-field views-field-title-1">        <span className="field-content"><a href="/otherFeaturedSeries2">Other Featured Series 2</a></span>  </div>
                          <div>        <span><a href="/sermons/Featured2">Featured Series 2 Sermon</a></span>  </div>
                          <div className="views-field views-field-field-preacher">        <div className="field-content">Preacher</div>  </div>  </div>
                      </div>






                    </div>  </div>
                </div>  </div>
              </div>
            </div>
          </div>
        </div>

        <div id="content-2-region" className="content-2 bg-color-white text-color-default">
          <div className="container">
            <div className="region region-content-2">

              <div id="block-views-sermon-series-block-1" className="block block-views">

                <h2 className="header-lightBlue text-center-sm">Recent Series</h2>

                <div className="content">
                  <div className="view view-sermon-series view-id-sermon_series view-display-id-block_1 row view-dom-id-3caabb555162fe14980733c2e80b0a53">



                    <div className="view-content">
                      <div className="views-row views-row-1 views-row-odd views-row-first col-sm-3 text-center">

                        <div className="views-field views-field-field-thumbnail-image">        <div className="field-content"><a href="/sermons/liberation-exodus"><img src={sermonSeriesImage} width="300" height="300" alt="" /></a></div>  </div>
                        <div className="views-field views-field-title">        <span className="field-content"><a href="/Sermons">Recent Series 1</a></span>  </div>  </div>
                      <div className="views-row views-row-2 views-row-even col-sm-3 text-center">

                        <div className="views-field views-field-field-thumbnail-image">        <div className="field-content"><a href="/sermons/liberation-2018"><img src={sermonSeriesImage} width="300" height="300" alt="" /></a></div>  </div>
                        <div className="views-field views-field-title">        <span className="field-content"><a href="/Sermons">Recent Series 2</a></span>  </div>  </div>
                      <div className="views-row views-row-3 views-row-odd col-sm-3 text-center">

                        <div className="views-field views-field-field-thumbnail-image">        <div className="field-content"><a href="/sermons/church-builder-luke-h"><img src={sermonSeriesImage} width="300" height="300" alt="" /></a></div>  </div>
                        <div className="views-field views-field-title">        <span className="field-content"><a href="/Sermons">Recent Series 3</a></span>  </div>  </div>
                      <div className="views-row views-row-4 views-row-even views-row-last col-sm-3 text-center">

                        <div className="views-field views-field-field-thumbnail-image">        <div className="field-content"><a href="/sermons/church-camp-2018"><img src={sermonSeriesImage} width="300" height="300" alt="" /></a></div>  </div>
                        <div className="views-field views-field-title">        <span className="field-content"><a href="/Sermons">Recent Series 4</a></span>  </div>  </div>
                    </div>






                  </div>  </div>
              </div>  </div>
          </div>
        </div>

        <div className="container">
          <div className="region region-content-4">

            <div id="block-views-all-sermons-block-1" className="block block-views">

              <h2 className="header-lightBlue text-center-sm">All Sermons</h2>

              <div className="content">
                <div className="view view-All-Sermons view-id-All_Sermons view-display-id-block_1 view-dom-id-f3bb1cab640987c3e343139ca9822fc5">
                  <div className="view-header">
                    Here you'll find our latest sermons listed in reverse order from latest preached.  If you're searching for something specific, or an older sermon, then click <a href="/allsermons">here</a> to find all our sermons in a searchable table.    </div>



                  <div className="view-content">
                    <table className="views-table cols-6">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Sermon Series</th>
                          <th>Bible Passage(s)</th>
                          <th>Preacher</th>
                          <th>Date Preached</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {sermons}
                      </tbody>
                    </table>
                  </div>






                </div>  </div>
            </div>  </div>
        </div>
      </section>
    );
  }
}

export default Sermons;
