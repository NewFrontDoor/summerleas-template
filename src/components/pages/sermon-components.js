import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export function CurrentSeries({latestSermon}) {
  if (latestSermon === null) {
    return null;
  }

  return (
    <section>
      <Link to={'/series/' + latestSermon.series_id}>
        <img
          src={latestSermon.series_img}
          alt={latestSermon.sermonseries}
          style={{width: '100%'}}
        />
      </Link>
      <Link to={'/series/' + latestSermon.series_id}>
        <p>{latestSermon.sermonseries}</p>
      </Link>
    </section>
  );
}

export function LatestSermon({latestSermon}) {
  if (latestSermon === null) {
    return null;
  }

  return (
    <section>
      <Link to={`/sermon/${latestSermon.nid}`}>
        <img
          src={latestSermon.series_img}
          alt={latestSermon.sermonseries}
          style={{width: '100%'}}
        />
      </Link>
      <Link to={'/series/' + latestSermon.series_id}>
        <p>{latestSermon.sermonseries}</p>
      </Link>
      <Link to={`/sermon/${latestSermon.nid}`}>
        <p>{latestSermon.node_title ? latestSermon.node_title : `Untitled`}</p>
      </Link>
      <p>{latestSermon.preacher}</p>
    </section>
  );
}

export function RecentSeries({recentSeries}) {
  if (recentSeries === null) {
    return null;
  }

  return (
    <Wrapper>
      {recentSeries.map(series => (
        <div key={series.series_id}>
          <Link to={'/series/' + series.series_id}>
            <img
              src={series.series_img}
              alt={series.sermonseries}
              style={{width: '100%'}}
            />
          </Link>
          <Link
            dangerouslySetInnerHTML={{__html: series.node_title}}
            to={'/series/' + series.series_id}
          />
        </div>
      ))}
    </Wrapper>
  );
}

RecentSeries.propTypes = {
  recentSeries: PropTypes.array.isRequired
}

CurrentSeries.propTypes = {
  latestSermon: PropTypes.object.isRequired
};

LatestSermon.propTypes = {
  latestSermon: PropTypes.object.isRequired
}