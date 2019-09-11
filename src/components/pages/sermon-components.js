import React from 'react';
import {Link} from 'react-router-dom'

export function CurrentSeries({latestSermon}) {
  if (latestSermon === null) {
    return null;
  }

  return (
    <section>
      <div className="views-field views-field-field-thumbnail-image">
        <div className="field-content">
          <Link to={'/series/' + latestSermon.series_id}>
            <img
              src={latestSermon.series_img}
              width="600"
              height="450"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="views-field views-field-title">
        <span className="field-content">
          <Link to={'/series/' + latestSermon.series_id}>
            {latestSermon.sermonseries}
          </Link>
        </span>
      </div>
    </section>
  );
}

export function LatestSermon({latestSermon}) {
  if (latestSermon === null) {
    return null;
  }

  return (
    <div className="views-row views-row-1 views-row-odd views-row-first views-row-last">
      <div className="views-field views-field-field-thumbnail-image">
        <div className="field-content">
          <Link to={`/sermon/${latestSermon.nid}`}>
            <img
              src={latestSermon.sermon_img}
              width="600"
              height="450"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="views-field views-field-title-1">
        <span className="field-content">
          {latestSermon.sermonseries ? (
            <Link
              dangerouslySetInnerHTML={{__html: latestSermon.sermonseries}}
              to={'/series/' + latestSermon.series_id}
            />
          ) : (
            ''
          )}
        </span>
      </div>
      <div>
        <span>
          <Link to={`/sermon/${latestSermon.nid}`}>
            {latestSermon.node_title ? latestSermon.node_title : `Untitled`}
          </Link>
        </span>
      </div>
      <div className="views-field views-field-field-preacher">
        <div
          dangerouslySetInnerHTML={{__html: latestSermon.preacher}}
          className="field-content"
        />
      </div>
    </div>
  );
}

export function RecentSeries({recentSeries}) {
  if (recentSeries === null) {
    return null;
  }

  return recentSeries.map(series => {
    return (
      <div
        key={series.series_id}
        className="views-row views-row-1 views-row-odd views-row-first col-sm-3"
      >
        <div className="views-field views-field-field-thumbnail-image">
          <div className="field-content">
            <Link to={'/series/' + series.series_id}>
              <img src={series.series_img} width="300" height="300" alt="" />
            </Link>
          </div>
        </div>
        <div className="views-field views-field-title">
          <span className="field-content">
            <Link
              dangerouslySetInnerHTML={{__html: series.node_title}}
              to={'/series/' + series.series_id}
            />
          </span>
        </div>
      </div>
    );
  });
}
