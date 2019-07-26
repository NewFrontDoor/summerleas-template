import React from 'react';
import PropTypes from 'prop-types';
import GoogleMap from '../models/google-map';

export default function WhereToFindUs({
  churchDetails: {churchName, streetAddress, city, state}
}) {
  return (
    <section className="col-md-4 col-xs-12">
      <h2>Where to Find Us</h2>
      <div className="content">
        <GoogleMap id="map_canvas" height="360px" />
        <a href="https://goo.gl/maps/yF5VjdUgXPq">{churchName}</a>
        <p>{streetAddress}</p>
        <p>
          {city}, {state}
        </p>
      </div>
    </section>
  );
}

WhereToFindUs.propTypes = {
  churchDetails: PropTypes.object.isRequired,
  churchName: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};
