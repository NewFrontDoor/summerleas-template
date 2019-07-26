import React from 'react';

export function CurrentSeries({latestSermon}) {
  if (latestSermon === null) {
    return null;
  }

  return (
    <section>
      <div className="views-field views-field-field-thumbnail-image">
        <div className="field-content">
          <a href={'/series/' + latestSermon.series_id}>
            <img
              src={latestSermon.series_img}
              width="600"
              height="450"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="views-field views-field-title">
        <span className="field-content">
          <a href={'/series/' + latestSermon.series_id}>
            {latestSermon.sermonseries}
          </a>
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
          <a href={`/sermon/${latestSermon.nid}`}>
            <img
              src={latestSermon.sermon_img}
              width="600"
              height="450"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="views-field views-field-title-1">
        <span className="field-content">
          {latestSermon.sermonseries ? (
            <a
              dangerouslySetInnerHTML={{__html: latestSermon.sermonseries}}
              href={'/series/' + latestSermon.series_id}
            />
          ) : (
            ''
          )}
        </span>
      </div>
      <div>
        <span>
          <a href={`/sermon/${latestSermon.nid}`}>
            {latestSermon.node_title ? latestSermon.node_title : `Untitled`}
          </a>
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
            <a href={'/series/' + series.series_id}>
              <img src={series.series_img} width="300" height="300" alt="" />
            </a>
          </div>
        </div>
        <div className="views-field views-field-title">
          <span className="field-content">
            <a
              dangerouslySetInnerHTML={{__html: series.node_title}}
              href={'/series/' + series.series_id}
            />
          </span>
        </div>
      </div>
    );
  });
}
