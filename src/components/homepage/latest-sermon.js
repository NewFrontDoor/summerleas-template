import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-responsive-audio-player';
import '../../assets/css/audioplayer.css';

export default function LatestSermon({
  latestSermon: {nid, sermon_img, node_title, preacher, url}
}) {
  return (
    <section className="col-md-4 col-xs-12">
      <h2>Latest Sermon</h2>
      {node_title ? (
        <div className="content">
          <img
            className="latestSermon-img"
            src={sermon_img}
            width="600"
            height="450"
          />
          <a href={`/sermon/${nid}`}>{node_title}</a>
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
