/* eslint-disable */
import React, { Component } from 'react';
import _ from 'lodash';
import { decode } from 'he'

import { getFromDrupalAPI } from '../../utils/fetchJSON';

import '../../assets/css/allsermonspage/css_ctvtxTMYPLy1gdv3lVTneGtWHVwWHoP476bpbqSql9o.css';
import '../../assets/css/allsermonspage/css_nnBtPUJp1fJS2GsB41ThE6FDdZwUsGHSwaEUER2e1oo.css';
import '../../assets/css/allsermonspage/css_PGbJgHCUCBf4dg7K9Kt8aAwsApndP4GZ9RuToPy3-Fk.css';
import '../../assets/css/allsermonspage/css_TRZgPl9A0LjXjIaop2Mnuyu5AAgskji-vAnShbyyBXY.css';
import '../../assets/css/allsermonspage/css_uyDmOe2sjPMSKgtMaUqVxDRgnvOYkOnT_tIsvpiVsRg.css';
import '../../assets/css/allsermonspage/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css';
import '../../assets/css/allsermonspage/css_YLWdW6wV7Ski57_eSxMdUCyO9zKEBlsYDkC-PNa2_KM.css';

class SermonSeriesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sermons: null,
            seriesImgThumb: null,
            seriesImgFull: null,
            sermonSeriesID: this.props.match.params.nid,
            loaded: false
        }
    }

    componentWillMount() {
        var that = this;
        getFromDrupalAPI('all_sermons_api?filters[sermonSeries]=' + this.state.sermonSeriesID, function (data) {
            that.setState({ sermons: data, seriesImgThumb: data[0].series_img, seriesImgFull: data[0].series_full_img })
        });
    }


    render() {
        var seriesTitle = "Series Title";
        if (this.state.sermons) {

            if (this.state.sermons.length > 0) {
                var seriesImg = this.state.seriesImgFull ? this.state.seriesImgFull : this.state.seriesImgThumb;
                seriesTitle = this.state.sermons[0].sermonseries;
                var tdPadding = { padding: "0px 5px 0px 5px" };
                var sermons = _.map(this.state.sermons, (sermon) => {
                    return (
                        <tr key={_.uniqueId()} className="odd even">
                            {sermon.node_title ? <td style={tdPadding} dangerouslySetInnerHTML={{ __html: sermon.node_url }} /> : <td style={tdPadding}></td>}


                            <td style={tdPadding}>{sermon.text ? decode(sermon.text) : ''}</td>
                            <td style={tdPadding}>{decode(sermon.preacher)}</td>
                            <td style={tdPadding}>{sermon.datepreached}</td>
                            <td style={tdPadding}><a href={sermon.url} target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i></a></td>
                        </tr>
                    )
                }
                )
            }
            else {
                var sermons = (<div className="content"><p>Sorry, this sermon series could not be found.</p>
                    <p>You can find all of our available sermons on <a href="/allsermons">this page.</a> </p></div>)
            }

        }

        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>{seriesTitle !== "Series Title" ? seriesTitle : ""}</h1>
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

                                            <div>
                                                <img className="img-responsive sermon-series-page-image" src={seriesImg ? seriesImg : ''} />
                                            </div>
                                            <br />
                                            <div className="view-content">
                                                <h2 className="header-lightBlue">Sermons</h2>
                                                <table className="views-table cols-6">
                                                    <thead>
                                                        <tr>
                                                            <th></th>
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

export default SermonSeriesPage;
