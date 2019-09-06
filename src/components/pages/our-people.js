import React, {Component} from 'react';
import TitleBreadcrumb from './title-breadcrumb';

import Person from '../models/person';
import Male from '../../assets/img/people/Male.png';
import Female from '../../assets/img/people/Female.png';

class OurPeople extends Component {
  render() {
    return (
      <section>
        <TitleBreadcrumb
          title="Our People"
          breadcrumbs={[['Home', '/'], ['Our people', '']]}
        />
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
                              <h2 className="header-lightBlue text-center">
                                Elders
                              </h2>

                              <Person
                                name="Elder 1"
                                image={Male}
                                title="Pastor"
                              />
                              <Person
                                name="Elder 2"
                                image={Male}
                                title="Elder"
                              />
                              <Person
                                name="Elder 3"
                                image={Male}
                                title="Elder"
                              />
                              <Person
                                name="Elder 4"
                                image={Male}
                                title="Elder"
                              />
                            </div>

                            <div className="row">
                              <div className="col-md-12">
                                <h2 className="header-lightBlue text-center">
                                  Deacons
                                </h2>

                                <Person
                                  name="Deacon 1"
                                  image={Male}
                                  title="Deacon"
                                />
                                <Person
                                  name="Deacon 2"
                                  image={Male}
                                  title="Deacon"
                                />
                                <Person
                                  name="Deacon 3"
                                  image={Male}
                                  title="Deacon"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurPeople;
