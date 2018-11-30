/* eslint-disable */
import React, { Component } from 'react';

import Person from '../models/Person';
import Male from '../../assets/img/people/Male.png';
import Female from '../../assets/img/people/Female.png';

class OurPeople extends Component {

  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Our People</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">Our People</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content-region">
          <div className="container">
            <div className="row">
              <div id="main-content-region" className="main-content col-xs-12">
                <div className="region region-content">
                  <div id="block-system-main" className="block block-system">
                    <div className="content">
                      <div className="node node-page clearfix">
                        <div className="content">
                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="header-lightBlue text-center">Elders</h2>

                              <Person name="Elder 1" image={Male} title="Pastor" />
                              <Person name="Elder 2" image={Male} title="Elder" />
                              <Person name="Elder 3" image={Male} title="Elder" />
                              <Person name="Elder 4" image={Male} title="Elder" />

                            </div>

                            <div className="row">
                              <div className="col-md-12">
                                <h2 className="header-lightBlue text-center">Deacons</h2>

                                <Person name="Deacon 1" image={Male} title="Deacon" />
                                <Person name="Deacon 2" image={Male} title="Deacon" />
                                <Person name="Deacon 3" image={Male} title="Deacon" />

                              </div>


                            </div>




                          </div>

                        </div>



                      </div>
                    </div>
                  </div>  </div>



              </div>




            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default OurPeople;
