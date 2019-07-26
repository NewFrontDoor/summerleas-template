import React from 'react';
import PropTypes from 'prop-types';

export default function GoogleMap({id, height, mapWidth}) {
  return (
    <div
      id={id}
      className="google-map"
      style={{maxHeight: height, maxWidth: mapWidth}}
    />
  );
}

GoogleMap.propTypes = {
  props: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  mapWidth: PropTypes.number
};
