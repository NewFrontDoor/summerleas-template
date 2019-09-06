import React from 'react';

export default function OtherPageContent({title, category}) {
  return (
    <section>
      <div
        id="top-content-region"
        className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1"
      >
        <div className="container">
          <div className="row">
            <div
              id="top-content-left-region"
              className="top-content-left col-xs-12 col-md-6 text-center-sm"
            >
              <div id="page-title-block" className="page-title block">
                <h1>{title}</h1>
              </div>
            </div>

            <div
              id="top-content-right-region"
              className="top-content-right col-xs-12 col-md-6 text-right text-center-sm"
            >
              <div
                id="page-breadcrumbs-block"
                className="page-breadcrumbs block"
              >
                <div className="breadcrumbs">
                  <a href="/">Home</a>
                  <span className="delimiter">›</span>
                  <span title="" className="nolink">
                    {category}
                  </span>
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
                        Sorry this page is still under construction, or does not
                        exist.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
