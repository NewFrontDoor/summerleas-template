/** @jsx jsx */
import styled from '@emotion/styled';
import {jsx, css} from '@emotion/core';
import {
  IoIosPin,
  IoIosMail,
  IoLogoFacebook,
  IoLogoTwitter
} from 'react-icons/io';

const icon = css`
  stroke: white;
  stroke-width: 20px;
  fill: none;
  width: 2em;
  height: 2em;
  fill: #f0f0f0;
  @media (min-width: 700px) {
    margin-bottom: '20px';
  }
`;

const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  color: #f0f0f0;
  background-color: #2b2b2b;
  padding: 40px 7.5vw 20px 7.5vw;
  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'footer-left footer-centre footer-right';
  }
`;

const MetaGrid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #222222;
  padding: 0 10vw;
  align-items: center;
`;

const centered = css`
  text-align: center;
`;

export default function Footer() {
  return (
    <section>
      <Grid>
        <div css={centered}>
          <IoIosPin css={icon} />
          <p>
            <a href="https://goo.gl/maps/yF5VjdUgXPq">Location</a>
            <br />
            Address, City, State
          </p>
        </div>
        <div css={centered}>
          <IoIosMail css={icon} />
          <p>
            <a href="mailto:">Contact Email(s)</a>
            <br />
          </p>
        </div>
        <div css={centered}>
          <IoLogoFacebook css={icon} />
          <p>
            <a href="#">Social media page(s)</a>
            <br />
          </p>
        </div>
      </Grid>
      <MetaGrid>
        <div>
          <p>
            Website built and maintained by{' '}
            <a href="http://newfrontdoor.org">New Front Door</a>
          </p>
        </div>
        <div css={{textAlign: 'right'}}>
          <a href="https://www.facebook.com/NewFrontDoorIT/">
            <IoLogoFacebook css={icon} />
          </a>
          <a href="https://twitter.com/NewFrontDoorIT">
            <IoLogoTwitter css={icon} />
          </a>
          <a href="mailto:contactus@newfrontdoor.org">
            <IoIosMail css={icon} />
          </a>
        </div>
      </MetaGrid>
    </section>
  );
}
