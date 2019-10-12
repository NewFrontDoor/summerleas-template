import React from 'react';
import slider1 from '../../assets/img/slider1.png';
import slider2 from '../../assets/img/slider2.png';
import Carousel from '@newfrontdoor/carousel';
import Welcome from './welcome';
import HomePageContent from './home-page-content';

export default function HomePageWrapper({globalSermons, setGlobalSermons}) {
  console.log(globalSermons);
  return (
    <section>
      <Carousel autoplay delayLength={10000}>
        <img src={slider1} />
        <img src={slider2} />
        <img src={slider1} />
      </Carousel>
      <Welcome />
      <HomePageContent
        globalSermons={globalSermons}
        setGlobalSermons={setGlobalSermons}
      />
    </section>
  );
}
