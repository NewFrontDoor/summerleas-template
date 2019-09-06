import React from 'react';
import AudioPlayer from 'react-responsive-audio-player';
import '../../assets/css/audioplayer.css';

export default function SermonBlock({
  sermon: {
    node_title,
    sermon_img,
    datepreached,
    preacher,
    url,
    series_id,
    sermonseries,
    text
  }
}) {
  return (
    <section key={`${node_title}-key`} style={{display: 'flex'}}>
      <div style={{flex: '0 1 auto'}}>
        <img className="img-responsive sermon-page-image" src={sermon_img} />
      </div>
      <div style={{flex: '0 1 auto', width: '200px'}}>
        <div className="field field-name-field-date-preached field-type-datetime field-label-above">
          <div className="field-label">Date Preached: </div>
          <p>{datepreached}</p>
        </div>
        <div className="field field-name-field-preacher field-type-text field-label-above">
          <div className="field-label">Preacher: </div>
          <p>{preacher}</p>
        </div>
        <div className="field field-name-field-sermon field-type-file field-label-above">
          <div className="field-label">Sermon: </div>
          <div style={{padding: '0', maxWidth: '360px'}}>
            <AudioPlayer
              playlist={[{url}]}
              controls={['playpause', 'spacer', 'progress']}
            />
          </div>
          <a href={url}>Download</a>
        </div>
        <div className="field field-name-field-sermon-series field-type-node-reference field-label-above">
          <div className="field-label">Sermon Series: </div>
          <a href={'/series/' + series_id}>{sermonseries}</a>
        </div>
        {text ? (
          <div className="field field-name-field-bible-book-s- field-type-taxonomy-term-reference field-label-above">
            <div className="field-label">Bible Passage(s): </div>
            <p>{text}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
