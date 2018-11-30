/*eslint-disable*/
import React, { Component } from 'react';

import Waypoint from 'react-waypoint';

import _ from 'lodash'
import { decode } from 'he'
import { getFromDrupalAPI, searchDrupalSermons } from '../../utils/fetchJSON';
import $ from 'jquery';

import '../../assets/css/allsermonspage/css_ctvtxTMYPLy1gdv3lVTneGtWHVwWHoP476bpbqSql9o.css';
import '../../assets/css/allsermonspage/css_nnBtPUJp1fJS2GsB41ThE6FDdZwUsGHSwaEUER2e1oo.css';
import '../../assets/css/allsermonspage/css_PGbJgHCUCBf4dg7K9Kt8aAwsApndP4GZ9RuToPy3-Fk.css';
import '../../assets/css/allsermonspage/css_TRZgPl9A0LjXjIaop2Mnuyu5AAgskji-vAnShbyyBXY.css';
import '../../assets/css/allsermonspage/css_uyDmOe2sjPMSKgtMaUqVxDRgnvOYkOnT_tIsvpiVsRg.css';
import '../../assets/css/allsermonspage/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css';
import '../../assets/css/allsermonspage/css_YLWdW6wV7Ski57_eSxMdUCyO9zKEBlsYDkC-PNa2_KM.css';

const PER_PAGE = 25;

class Sermons extends Component {
  constructor() {
    super();
    this.state = {
      sermons: null,
      page: 0,
      sermonSeries: null,
      viewingRefinedList: false,
      sermonPages: null,
      totalSermons: null,
      searchQuery: "",
      searchType: "title",
      loadingSermons: true,
      sermonsRemaining: true
    }

    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
  }

  componentWillMount() {
    var that = this;

    getFromDrupalAPI('all_sermon_series_api', function (data) {
      that.setState({ sermonSeries: data });
    });

    getFromDrupalAPI('all_sermons_api?limit=' + PER_PAGE, function (data) {
      that.setState({ sermons: data, loadingSermons: false });
    });

    //get count of total sermons for pages
    getFromDrupalAPI('all_sermons_api', function (data) {
      var pages = Math.floor(data.length / PER_PAGE) + 1;
      that.setState({ totalSermons: data.length, sermonPages: pages });
    });
  }

  loadNextSermons(page) {
    var that = this;
    var offset = (page + 1) * PER_PAGE
    this.setState({ sermons: null, page: page + 1 })
    getFromDrupalAPI('all_sermons_api?offset=' + offset + '&limit=' + PER_PAGE, function (data) {
      that.setState({ sermons: data, viewingRefinedList: false })
    });

  }

  loadMoreSermons(page) {
    var that = this;
    var offset = (page + 1) * PER_PAGE
    if (this.state.sermonPages === page + 1) {
      this.setState({ sermonsRemaining: false });
    }
    this.setState({ page: page + 1 })
    getFromDrupalAPI('all_sermons_api?offset=' + offset + '&limit=' + PER_PAGE, function (data) {
      that.setState({ sermons: [...that.state.sermons, ...data], viewingRefinedList: false, loadingSermons: false })
    });

  }

  loadPreviousSermons(page) {
    var that = this;
    var offset = (page - 1) * PER_PAGE

    if (this.state.viewingRefinedList === true) {
      $("#sermonSelect").val("");
      this.setState({ searchQuery: "", searchType: "title" });
    }

    this.setState({ sermons: null, page: page - 1 })
    getFromDrupalAPI('all_sermons_api?offset=' + offset + '&limit=' + PER_PAGE, function (data) {
      that.setState({ sermons: data, viewingRefinedList: false })
    });


  }

  handleWaypointEnter() {
    if (!this.state.loadingSermons && this.state.page < this.state.sermonPages) {
      this.setState({ loadingSermons: true })
      this.loadMoreSermons(this.state.page)
    }

    if (this.state.page === this.state.sermonPages) {
      this.setState({ sermonsRemaining: false })
    }

  }

  loadSermonSeries(sermonSeriesNid) {
    var that = this;
    if ($("#sermonSelect").val() === "" && this.state.viewingRefinedList === true) {
      that.loadPreviousSermons(1);
    }
    getFromDrupalAPI('all_sermons_api?filters[sermonSeries]=' + sermonSeriesNid, function (data) {
      that.setState({ sermons: data, viewingRefinedList: true })
    });
  }

  searchSermons(e) {
    var that = this;
    if (this.state.searchQuery && this.state.searchQuery !== "") {
      searchDrupalSermons(this.state.searchQuery, this.state.searchType, function (data) {
        that.setState({ sermons: data, viewingRefinedList: true })
      });
    }

    e.preventDefault();
  }

  updateSearchQuery(event) {
    this.setState({ searchQuery: event.target.value });
  }

  updateSearchType(event) {
    this.setState({ searchType: event.target.value });
  }



  render() {
    if (!this.state.sermons) {
      var sermons = <tr><td>Loading, please wait.</td></tr>;
    }
    else {
      var tdPadding = { padding: "0px 5px 0px 5px" };
      var sermons = _.map(this.state.sermons, (sermon) => {
        return (
          <tr key={_.uniqueId()} className="odd even">
            {sermon.node_title ? <td style={tdPadding}><a href={`/sermon/${sermon.nid}`}>{sermon.node_title}</a></td> : <td style={tdPadding}><a href={`/sermon/${sermon.nid}`}>Untitled</a></td>}
            {sermon.sermonseries ? <td style={tdPadding}><a href={'/series/' + sermon.series_id}>{decode(sermon.sermonseries)}</a></td> : <td style={tdPadding}></td>}
            <td style={tdPadding}>{sermon.text ? decode(sermon.text) : ''}</td>
            <td style={tdPadding}>{decode(sermon.preacher)}</td>
            <td style={tdPadding}>{sermon.datepreached}</td>
            <td style={tdPadding}><a href={sermon.url} target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i></a></td>
          </tr>
        )
      });
    }

    let prevSermonsLink = null;
    if (this.state.viewingRefinedList === true) {
      prevSermonsLink = <a href="javascript:void(0);" onClick={() => this.loadPreviousSermons(1)}>Return to All Sermons</a>
    }

    let loadingIcon = null;
    if (!this.state.sermonPages) {
      loadingIcon = <i className="fa fa-spinner"></i>;
    }
    if (this.state.loadingSermons && this.state.sermonsRemaining) {
      loadingIcon = <i className="fa fa-spinner"></i>;
    }


    var sermonSeriesOptions;
    if (this.state.sermonSeries) {
      sermonSeriesOptions = _.map(this.state.sermonSeries, (sermonSeries) => {
        return (
          <option key={sermonSeries.nid} value={sermonSeries.nid}>{decode(sermonSeries.node_title)}</option>
        )
      });
    }

    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>All Sermons</h1>
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


                  <div className="content">
                    <div className="view view-All-Sermons view-id-All_Sermons view-display-id-page view-dom-id-8cf9a4aecfefa92964ac5f3e5a33e04e jquery-once-1-processed">
                      <div className="col-md-3">View Sermon Series:<select className="form-control" id="sermonSelect" onChange={event => this.loadSermonSeries(event.target.value)}>
                        <option value="">---</option>
                        {sermonSeriesOptions}
                      </select></div>

                      <div className="form-group">
                        <form onSubmit={(e) => this.searchSermons(e)}>
                          <div className="col-md-4">
                            Search: <input type="text" className="form-control" id="searchQuery" value={this.state.searchQuery} onChange={(e) => this.updateSearchQuery(e)} />
                          </div>
                          <div className="col-md-3">
                            In:
                <select className="form-control" id="searchType" value={this.state.searchType} onChange={(e) => this.updateSearchType(e)}>
                              <option value="title">Title</option>
                              <option value="preacher">Preacher</option>
                              <option value="passage">Bible Passage</option>
                            </select>
                          </div>
                          <br />
                          <input type="submit" value="Search" className="btn btn-primary sermon-search-button" />
                        </form>
                      </div>



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
                        <br />
                        <span style={{ float: "left" }}>{prevSermonsLink}</span>
                        <span>{loadingIcon}</span>
                        {/*{showPageNumber}*/}

                        {/*Only display the waypoint after number of pages has been set in state*/}
                        {this.state.sermonPages && !this.state.viewingRefinedList ? <Waypoint onEnter={this.handleWaypointEnter}></Waypoint> : ''}

                        {this.state.sermonsRemaining && !this.state.loadingSermons && !this.state.viewingRefinedList ? <div className="text-center"><button className="btn btn-primary sermon-load-more" onClick={this.handleWaypointEnter}>Load More...</button></div> : ''}
                        {this.state.sermonsRemaining || this.state.viewingRefinedList ? '' : <div className="text-center">No more sermons to load</div>}
                      </div>


                    </div>  </div> </div>


              </div>


            </div> {/* /row */}
          </div> {/* /container */}
        </div>
      </section>
    );
  }
}

export default Sermons;