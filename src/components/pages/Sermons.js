/* eslint-disable */
import React, { Component } from 'react';

import _ from 'lodash'
import { decode } from 'he'
import { getFromDrupalAPI } from '../../utils/fetchJSON';

const SERMON_LIMIT = 1;

class Sermons extends Component {
  constructor() {
    super();
    this.state = {
      sermons: null,
      recentSeries: null,
      latestSermon: null
    }
  }

  componentWillMount() {
    var that = this;

    getFromDrupalAPI('all_sermons_api?limit=' + SERMON_LIMIT, function (data) {
      that.setState({ sermons: data });
      that.setState({ latestSermon: data[0] });
    });

    getFromDrupalAPI('recent_series_api', function (data) {
      that.setState({ recentSeries: data });
    });

  }
  render() {

    if (!this.state.sermons || !this.state.latestSermon || !this.state.recentSeries) {
      var recentSeries = <div>Loading, please wait.</div>;
      var latestSermon = <div>Loading, please wait.</div>
    }
    else {
      var recentSeries = _.map(this.state.recentSeries, (series) => {
        return (
          <div key={_.uniqueId()} className="views-row views-row-1 views-row-odd views-row-first col-sm-3">

            <div className="views-field views-field-field-thumbnail-image">
              <div className="field-content">
                <a href={"/series/" + series.series_id}>
                  <img src={series.series_img} width="300" height="300" alt="" /></a>
              </div>
            </div>
            <div className="views-field views-field-title">
              <span className="field-content">
                <a href={"/series/" + series.series_id}>{decode(series.node_title)}</a>
              </span>
            </div>
          </div>

        )
      });

      var latestSermon = (<div className="views-row views-row-1 views-row-odd views-row-first views-row-last">
        <div className="views-field views-field-field-thumbnail-image">        <div className="field-content">
          <a href={`/sermon/${this.state.latestSermon.nid}`}><img src={this.state.latestSermon.sermon_img ? this.state.latestSermon.sermon_img : this.state.latestSermon.series_img} width="600" height="450" alt="" /></a></div>  </div>
        <div className="views-field views-field-title-1">
          <span className="field-content">{this.state.latestSermon.sermonseries ? <a href={'/series/' + this.state.latestSermon.series_id}>{decode(this.state.latestSermon.sermonseries)}</a> : ""}</span>  </div>
        <div>
          {this.state.latestSermon.node_title ? <span><a href={`/sermon/${this.state.latestSermon.nid}`}>{this.state.latestSermon.node_title}</a></span> : <span><a href={`/sermon/${this.state.latestSermon.nid}`}>Untitled</a></span>}  </div>
        <div className="views-field views-field-field-preacher">
          <div className="field-content">{decode(this.state.latestSermon.preacher)}</div>  </div>  </div>);

      var currentSeries = (<section><div className="views-field views-field-field-thumbnail-image">
        <div className="field-content">
          <a href={'/series/' + this.state.latestSermon.series_id}><img src={this.state.latestSermon.series_img} width="600" height="450" alt="" /></a>
        </div>  </div>
        <div className="views-field views-field-title">
          <span className="field-content"><a href={'/series/' + this.state.latestSermon.series_id}>{this.state.latestSermon.sermonseries}</a></span>  </div></section>)
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


              <div id="main-content-region" className="main-content col-xs-12">

                <div className="region region-content">

                  <div id="block-system-main" className="block block-system">


                    <div className="content">
                      <div id="node-34" className="node node-page clearfix">




                        <div className="content">
                          <div className="field field-name-body field-type-text-with-summary field-label-hidden"><div className="field-items"><div className="field-item even">
                            <p>Here you'll find all the latest talks and current sermon series we're doing at Horsham Presbyterian. Feel free to browse around and check out the different talks.
                            </p>
                            <p>If you're after something specific, and can't find it here, then please <a href="/allsermons">click here</a> and you'll be able to search through all of our recorded sermons.</p></div></div></div>  </div>



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
              <div className="col-md-offset-6 col-md-3 col-xs-12 text-center-sm">  <div className="region region-content-1-2">

                <div id="block-views-sermon-series-block" className="block block-views">

                  <h2>Current Series</h2>

                  <div className="content">
                    <div className="view view-sermon-series view-id-sermon_series view-display-id-block featured-sermon view-dom-id-f76384e2578054bee9a594ea133e2b10">



                      <div className="view-content">
                        <div className="views-row views-row-1 views-row-odd views-row-first views-row-last">
                          {currentSeries}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

              {/*<div className="col-md-3 col-xs-12 text-center-sm">  <div className="region region-content-1-3">

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
    </div>*/}
            </div>
          </div>
        </div>

        <div id="content-2-region" className="content-2 bg-color-white text-color-default">
          <div className="container">
            <div className="region region-content-2">

              <div id="block-views-sermon-series-block-1" className="block block-views">

                <h2 className="header-lightBlue text-center-sm">Recent Series</h2>

                <div className="content">
                  <div className="view view-sermon-series view-id-sermon_series view-display-id-block_1 row">



                    <div className="view-content">
                      {recentSeries}
                    </div>






                  </div>  </div>
              </div>  </div>
          </div>
        </div >
      </section >
    );
  }
}

export default Sermons;
