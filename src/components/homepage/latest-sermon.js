import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-responsive-audio-player';
import '../../assets/css/audioplayer.css';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

const Img = styled('img')`
  width: 100%;
  height: 100%;
`;

export default function LatestSermon({
  latestSermon: {nid, sermon_img, node_title, preacher, url}
}) {
  return (
    <section>
      <h2>Latest Sermon</h2>
      {node_title ? (
        <div>
          <Img src={sermon_img} />
          <Link to={`/sermon/${nid}`}>{node_title}</Link>
          <div>{preacher}</div>
          <AudioPlayer
            playlist={[{url}]}
            controls={['playpause', 'spacer', 'progress']}
          />
          <a href={url}>Download Sermon</a>
        </div>
      ) : (
        'loading...'
      )}
    </section>
  );
}

LatestSermon.propTypes = {
  latestSermon: PropTypes.object.isRequired,
  nid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sermon_img: PropTypes.string.isRequired,
  node_title: PropTypes.string.isRequired,
  preacher: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
