import React from 'react';
import PropTypes from 'prop-types';
import TitleBreadcrumb from './pages/title-breadcrumb';
import ContentWrapper from './content-wrapper';

export default function OtherPageContent({title}) {
  return (
    <section>
      <TitleBreadcrumb title={title} breadcrumbs={[['Home', '/']]} />
      <ContentWrapper>
        Sorry this page is still under construction, or does not exist.
      </ContentWrapper>
    </section>
  );
}

OtherPageContent.propTypes = {
  title: PropTypes.string
};
