import React from 'react';
import {Link} from 'react-router-dom';

export default function TitleBreadcrumb({title, breadcrumbs}) {
  return (
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
            <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
              <div className="breadcrumbs">
                {breadcrumbs.map(crumb => {
                  return (
                    <React.Fragment key={crumb[0]}>
                      {!crumb[1] ? (
                        <span>{crumb[0]}</span>
                      ) : (
                        <Link to={crumb[1]}>{crumb[0]}</Link>
                      )}
                      <span className="delimiter">›</span>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
