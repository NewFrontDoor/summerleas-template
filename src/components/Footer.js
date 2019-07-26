import React from 'react';

export default function Footer() {
  return (
    <section>
      <div
        id="footer-columns-region"
        className="footer-columns region-30 block-30 bg-color-grayDark2 text-color-light"
      >
        <div className="container">
          <div className="row">
            <div
              id="footer-first-column-region"
              className="footer-first-column col-xs-12 col-md-4"
            >
              <div className="region region-footer-first-column">
                <div className="block block-block">
                  <div className="content">
                    <div className="footer-address text-center">
                      <i className="icon ion-ios7-location-outline size-32 margin-bottom-20" />
                      <p>
                        <a href="https://goo.gl/maps/yF5VjdUgXPq">Location</a>
                        <br />
                        Address, City, State
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="footer-second-column-region"
              className="footer-second-column col-xs-12 col-md-4"
            >
              <div className="region region-footer-second-column">
                <div id="block-block-8" className="block block-block">
                  <div className="content">
                    <div className="footer-mail text-center">
                      <i className="icon ion-ios7-email-outline size-32 margin-bottom-20" />
                      <p>
                        <a href="mailto:">Contact Email(s)</a>
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="footer-third-column-region"
              className="footer-third-column col-xs-12 col-md-4"
            >
              <div className="region region-footer-third-column">
                <div className="block block-block">
                  <div className="content">
                    <div className="footer-phone text-center">
                      <i className="icon ion-social-facebook-outline size-32 margin-bottom-20" />
                      <p>
                        <a href="#">Social media page(s)</a>
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="region-10 block-10 bg-color-grayDark1 text-color-light">
        <div className="container">
          <div className="row">
            <div
              id="footer-left-region"
              className="footer-left region-bottom-sm-0 text-center-sm footer_left col-xs-12 col-md-6"
            >
              <div className="region region-footer-left">
                <div id="block-block-10" className="block block-block">
                  <div className="content">
                    <div className="copyright">
                      <p>
                        Website built and maintained by{' '}
                        <a href="http://newfrontdoor.org">New Front Door</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="footer-right-region"
              className="footer-right region-top-sm-0 text-right text-center-sm footer_right col-xs-12 col-md-6"
            >
              <div className="region region-footer-right">
                <div className="block block-block">
                  <div className="content">
                    <div className="social-networks-footer">
                      <a href="https://www.facebook.com/NewFrontDoorIT/">
                        <i className="icon ion-social-facebook" />
                      </a>
                      <a href="https://twitter.com/NewFrontDoorIT">
                        <i className="icon ion-social-twitter" />
                      </a>
                      <a href="mailto:contactus@newfrontdoor.org">
                        <i className="icon ion-email" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="back-to-top">
        <i className="ion-ios7-arrow-up" />
      </div>
    </section>
  );
}
