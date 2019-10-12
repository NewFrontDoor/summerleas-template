import React from 'react';
import PropTypes from 'prop-types';
import {MapLayoutSimple} from '@newfrontdoor/location-map';

export default function WhereToFindUs({
  churchDetails: {churchName, streetAddress, city, state}
}) {
  return (
    <section>
      <h2>Where to Find Us</h2>

      <MapLayoutSimple 
        location={{
          location: {lat: -42.998185, lng: 147.29004},
          latcentrepoint: -42.998185,
          lngcentrepoint: 147.29004
        }}
        mapsKey="AIzaSyBTThwaQ-dHQVR-gjylEOexM1TdWKl7RRQ"
      />
      <a href="https://goo.gl/maps/yF5VjdUgXPq">{churchName}</a>
      <p>{streetAddress}</p>
      <p>
        {city}, {state}
      </p>
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
