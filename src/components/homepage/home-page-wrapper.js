import React from 'react';
import Slider from './slider';
import Welcome from './welcome';
import HomePageContent from './home-page-content';

export default function HomePageWrapper() {
  return (
    <section>
      <div className="main-wrapper wide">
        <Slider />
        <Welcome />
        <HomePageContent />
      </div>
    </section>
  );
}
