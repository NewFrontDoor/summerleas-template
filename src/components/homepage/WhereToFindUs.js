/* eslint-disable */
import React, { Component } from 'react';
import GoogleMap from '../models/GoogleMap';


class WhereToFindUs extends Component {
  render() {
    return (
      <section>
        <div className="col-md-4 col-xs-12">
          <div className="region region-content-2-2">
            <div className="block block-block">
              <h2 >Where to Find Us</h2>
              <div className="content">
                <GoogleMap id="map_canvas" height="360px" />
                <div><a href="https://goo.gl/maps/yF5VjdUgXPq">Church Name or Place</a></div>
                <div>Address -- Change lat and long in index.html</div>
                <div>City, State</div>  </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhereToFindUs;
