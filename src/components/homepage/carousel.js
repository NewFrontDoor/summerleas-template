import React, {useState, useEffect} from 'react';
import EmblaCarouselReact from 'embla-carousel-react';
import slider1 from '../../assets/img/slider1.png';
import slider2 from '../../assets/img/slider2.png';

const slides = [slider1, slider2, slider1];

export default function EmblaCarouselComponent() {
  const [embla, setEmbla] = useState(null);
  const scrollPrev = () => embla.scrollPrev();
  const scrollNext = () => embla.scrollNext();

  useEffect(() => {
    if (embla) {
      embla.on('select', () => {
        console.log(`Current index is ${embla.selectedScrollSnap()}`);
      });
    }
  }, [embla]);

  return (
    <>
      <EmblaCarouselReact
        htmlTagName="div"
        emblaRef={c => setEmbla(c)}
        options={{loop: false}}
      >
        <div style={{display: 'flex'}}>
          {slides.map((slide) => {
            return (
              <div key={slide.toString()} style={{flex: '0 0 100%'}}>
                <img src={slide} />
              </div>
            );
          })}
        </div>
      </EmblaCarouselReact>
      <button type="button" onClick={scrollPrev}>
        Previous
      </button>
      <button type="button" onClick={scrollNext}>
        Next
      </button>
    </>
  );
}
