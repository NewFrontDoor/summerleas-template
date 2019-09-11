import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.section`
  padding: 40px 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: ${props =>
      props.width === 'wide'
        ? '1170px'
        : props.width === 'medium'
        ? '970px'
        : '750px'};
  }
`;

export default function ContentWrapper({children, width}) {
  return <Wrapper width={width}>{children}</Wrapper>;
}
