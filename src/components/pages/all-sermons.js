import React, {Component} from 'react';
import Waypoint from 'react-waypoint';
import $ from 'jquery';
import {getFromDrupalAPI, searchDrupalSermons} from '../../utils/fetch-json';
import TitleBreadcrumb from './title-breadcrumb';

import '../../assets/css/allsermonspage/css_ctvtxTMYPLy1gdv3lVTneGtWHVwWHoP476bpbqSql9o.css';
import '../../assets/css/allsermonspage/css_nnBtPUJp1fJS2GsB41ThE6FDdZwUsGHSwaEUER2e1oo.css';
import '../../assets/css/allsermonspage/css_PGbJgHCUCBf4dg7K9Kt8aAwsApndP4GZ9RuToPy3-Fk.css';
import '../../assets/css/allsermonspage/css_TRZgPl9A0LjXjIaop2Mnuyu5AAgskji-vAnShbyyBXY.css';
import '../../assets/css/allsermonspage/css_uyDmOe2sjPMSKgtMaUqVxDRgnvOYkOnT_tIsvpiVsRg.css';
import '../../assets/css/allsermonspage/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css';
import '../../assets/css/allsermonspage/css_YLWdW6wV7Ski57_eSxMdUCyO9zKEBlsYDkC-PNa2_KM.css';

const PER_PAGE = 25;

export default class Sermons extends Component {
  constructor() {
    super();
    this.state = {
      sermons: null,
      page: 0,
      sermonSeries: null,
      viewingRefinedList: false,
      sermonPages: null,
      totalSermons: null,
      searchQuery: '',
      searchType: 'title',
      loadingSermons: true,
      sermonsRemaining: true
    };

    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
  }

  componentWillMount() {
    const that = this;

    getFromDrupalAPI('all_sermon_series_api', data => {
      that.setState({sermonSeries: data});
    });

    getFromDrupalAPI('all_sermons_api?limit=' + PER_PAGE, data => {
      that.setState({sermons: data, loadingSermons: false});
    });

    // Get count of total sermons for pages
    getFromDrupalAPI('all_sermons_api', data => {
      const pages = Math.floor(data.length / PER_PAGE) + 1;
      that.setState({totalSermons: data.length, sermonPages: pages});
    });
  }

  loadNextSermons(page) {
    const that = this;
    const offset = (page + 1) * PER_PAGE;
    this.setState({sermons: null, page: page + 1});
    getFromDrupalAPI(
      'all_sermons_api?offset=' + offset + '&limit=' + PER_PAGE,
      data => {
        that.setState({sermons: data, viewingRefinedList: false});
      }
    );
  }

  loadMoreSermons(page) {
    const that = this;
    const offset = (page + 1) * PER_PAGE;
    if (this.state.sermonPages === page + 1) {
      this.setState({sermonsRemaining: false});
    }

    this.setState({page: page + 1});
    getFromDrupalAPI(
      'all_sermons_api?offset=' + offset + '&limit=' + PER_PAGE,
      data => {
        that.setState({
          sermons: [...that.state.sermons, ...data],
          viewingRefinedList: false,
          loadingSermons: false
        });
      }
    );
  }

  loadPreviousSermons(page) {
    const that = this;
    const offset = (page - 1) * PER_PAGE;

    if (this.state.viewingRefinedList === true) {
      this.setState({searchQuery: '', searchType: 'title'});
    }

    this.setState({sermons: null, page: page - 1});
    getFromDrupalAPI(
      'all_sermons_api?offset=' + offset + '&limit=' + PER_PAGE,
      data => {
        that.setState({sermons: data, viewingRefinedList: false});
      }
    );
  }

  handleWaypointEnter() {
    if (
      !this.state.loadingSermons &&
      this.state.page < this.state.sermonPages
    ) {
      this.setState({loadingSermons: true});
      this.loadMoreSermons(this.state.page);
    }

    if (this.state.page === this.state.sermonPages) {
      this.setState({sermonsRemaining: false});
    }
  }

  loadSermonSeries(sermonSeriesNid) {
    const that = this;
    if (
      $('#sermonSelect').val() === '' &&
      this.state.viewingRefinedList === true
    ) {
      that.loadPreviousSermons(1);
    }

    getFromDrupalAPI(
      'all_sermons_api?filters[sermonSeries]=' + sermonSeriesNid,
      data => {
        that.setState({sermons: data, viewingRefinedList: true});
      }
    );
  }

  searchSermons(e) {
    const that = this;
    if (this.state.searchQuery && this.state.searchQuery !== '') {
      searchDrupalSermons(
        this.state.searchQuery,
        this.state.searchType,
        data => {
          that.setState({sermons: data, viewingRefinedList: true});
        }
      );
    }

    e.preventDefault();
  }

  updateSearchQuery(event) {
    this.setState({searchQuery: event.target.value});
  }

  updateSearchType(event) {
    this.setState({searchType: event.target.value});
  }

  render() {
    let prevSermonsLink = null;
    if (this.state.viewingRefinedList === true) {
      prevSermonsLink = (
        <a
          href="javascript:void(0);"
          onClick={() => this.loadPreviousSermons(1)}
        >
          Return to All Sermons
        </a>
      );
    }

    let loadingIcon = null;
    if (!this.state.sermonPages) {
      loadingIcon = <i className="fa fa-spinner" />;
    }

    if (this.state.loadingSermons && this.state.sermonsRemaining) {
      loadingIcon = <i className="fa fa-spinner" />;
    }

    return (
      <section>
        <TitleBreadcrumb
          title="All Sermons"
          breadcrumbs={[['Home', '/'], ['Resources', '/resources']]}
        />

        <div id="content-region">
          <div className="container">
            <div className="row">
              <div id="main-content-region" className="main-content col-xs-12">
                <div className="region region-content">
                  <div className="content">
                    <div className="view view-All-Sermons view-id-All_Sermons view-display-id-page view-dom-id-8cf9a4aecfefa92964ac5f3e5a33e04e jquery-once-1-processed">
                      <div className="col-md-3">
                        View Sermon Series:
                        <select
                          className="form-control"
                          id="sermonSelect"
                          onChange={event =>
                            this.loadSermonSeries(event.target.value)}
                        >
                          <option value="">---</option>
                          {this.state.sermonSeries.map(sermonSeries => {
                            return (
                              <option
                                key={sermonSeries.nid}
                                value={sermonSeries.nid}
                              >
                                {sermonSeries.node_title}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="form-group">
                        <form onSubmit={e => this.searchSermons(e)}>
                          <div className="col-md-4">
                            Search:{' '}
                            <input
                              type="text"
                              className="form-control"
                              id="searchQuery"
                              value={this.state.searchQuery}
                              onChange={e => this.updateSearchQuery(e)}
                            />
                          </div>
                          <div className="col-md-3">
                            In:
                            <select
                              className="form-control"
                              id="searchType"
                              value={this.state.searchType}
                              onChange={e => this.updateSearchType(e)}
                            >
                              <option value="title">Title</option>
                              <option value="preacher">Preacher</option>
                              <option value="passage">Bible Passage</option>
                            </select>
                          </div>
                          <br />
                          <input
                            type="submit"
                            value="Search"
                            className="btn btn-primary sermon-search-button"
                          />
                        </form>
                      </div>

                      <div className="view-content">
                        <table className="views-table cols-6">
                          <thead>
                            <tr>
                              <th />
                              <th>Sermon Series</th>
                              <th>Bible Passage(s)</th>
                              <th>Preacher</th>
                              <th>Date Preached</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.sermons.map(sermon => (
                              <tr key={sermon.nid} className="odd even">
                                <td style={{padding: '0px 5px 0px 5px'}}>
                                  <a href={`/sermon/${sermon.nid}`}>
                                    {sermon.node_title}
                                  </a>
                                </td>
                                <td style={{padding: '0px 5px 0px 5px'}}>
                                  <a href={'/series/' + sermon.series_id}>
                                    {sermon.sermonseries}
                                  </a>
                                </td>
                                <td style={{padding: '0px 5px 0px 5px'}}>
                                  {sermon.text ? sermon.text : ''}
                                </td>
                                <td style={{padding: '0px 5px 0px 5px'}}>
                                  {sermon.preacher}
                                </td>
                                <td style={{padding: '0px 5px 0px 5px'}}>
                                  {sermon.datepreached}
                                </td>
                                <td style={{padding: '0px 5px 0px 5px'}}>
                                  <a
                                    href={sermon.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <i className="fa fa-download" />
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <br />
                        <span style={{float: 'left'}}>{prevSermonsLink}</span>
                        <span>{loadingIcon}</span>
                        {/* {showPageNumber} */}

                        {/* Only display the waypoint after number of pages has been set in state */}
                        {this.state.sermonPages &&
                        !this.state.viewingRefinedList ? (
                          <Waypoint onEnter={this.handleWaypointEnter} />
                        ) : (
                          ''
                        )}

                        {this.state.sermonsRemaining &&
                        !this.state.loadingSermons &&
                        !this.state.viewingRefinedList ? (
                          <div className="text-center">
                            <button
                              className="btn btn-primary sermon-load-more"
                              onClick={this.handleWaypointEnter}
                            >
                              Load More...
                            </button>
                          </div>
                        ) : (
                          ''
                        )}
                        {this.state.sermonsRemaining ||
                        this.state.viewingRefinedList ? (
                          ''
                        ) : (
                          <div className="text-center">
                            No more sermons to load
                          </div>
                        )}
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
