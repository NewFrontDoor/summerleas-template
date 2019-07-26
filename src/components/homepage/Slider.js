import React, {useState} from 'react';
import slider1 from '../../assets/img/slider1.png';
import slider2 from '../../assets/img/slider2.png';

export default function Slider() {
  const [slides, getSlides] = useState([
    {
      src: slider1,
      key: 'slider1',
      alt: 'Welcome to <Our Church>',
      caption: {
        header: null,
        description: null,
        linkText: null,
        href: null
      }
    },
    {
      src: slider2,
      key: 'slider2',
      alt: 'Welcome to Slider Two',
      caption: {
        header: null,
        description: null,
        linkText: null,
        href: null
      }
    }
  ]);

  return (
    <section>
      <div className="view view-front-page-slider view-id-front_page_slider view-display-id-block">
        <div className="highlighted-slider-2">
          <div className="flex-bullet-slider">
            <ul className="slides">
              {slides.map(slide => {
                return (
                  <li key={slide.key}>
                    <figure>
                      <img
                        className="img-responsive img-full-width"
                        src={slide.src}
                        width="1440"
                        height="600"
                      />
                      {slide.caption.header === null ? (
                        ''
                      ) : (
                        <figcaption className="overlay overlay-30 text-center">
                          <div className="highlighted-slider-2-content">
                            <h1 className="slider-title">
                              {slide.caption.header}
                            </h1>
                            <p className="slider-description">
                              {slide.caption.description}
                            </p>
                            <a
                              href={slide.caption.href}
                              className="btn btn-default"
                            >
                              {slide.caption.linkText}
                            </a>
                          </div>
                        </figcaption>
                      )}
                    </figure>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
