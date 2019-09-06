import React from 'react';
import EmblaCarouselComponent from './carousel';
import Welcome from './welcome';
import HomePageContent from './home-page-content';

export default function HomePageWrapper() {
  return (
    <section>
      <div className="main-wrapper wide">
        <EmblaCarouselComponent />
        <Welcome />
        <HomePageContent />
      </div>
    </section>
  );
}
