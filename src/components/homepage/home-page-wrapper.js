import React from 'react';
import slider1 from '../../assets/img/slider1.png';
import slider2 from '../../assets/img/slider2.png';
import Carousel from '../carousel/carousel';
import Welcome from './welcome';
import HomePageContent from './home-page-content';
import styled from '@emotion/styled';

const SliderImg = styled('img')`
  width:100%;
  height: auto;
`;

const SliderWrapper = styled('div')`
  text-align: center;
`;

//Can use a carosel or single full width image
const useCarosel = true;

export default function HomePageWrapper({ globalSermons, setGlobalSermons, upcomingEventsData }) {
  console.log(globalSermons);
  return (
    <section>
      {useCarosel ? <Carousel autoplay delayLength={10000}>
        <img src={slider1} />
        <img src={slider2} />
        <img src={slider1} />
      </Carousel> : 
      <SliderWrapper>
        <SliderImg src={slider1} width="1440" height="600" />
      </SliderWrapper>}
      <Welcome />
      <HomePageContent
        globalSermons={globalSermons}
        setGlobalSermons={setGlobalSermons}
        upcomingEventsData={upcomingEventsData}
      />
    </section>
  );
}
