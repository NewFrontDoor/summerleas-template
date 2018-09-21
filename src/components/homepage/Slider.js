/* eslint-disable */
import React, { Component } from 'react';
import _ from 'lodash';

import slider1 from '../../assets/img/slider1.png';
import slider2 from '../../assets/img/slider2.png';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      slides: [{
        "src": slider1,
        "alt": "Welcome to <Our Church>",
        "caption": null
      },
      {
        "src": slider2,
        "alt": "",
        "caption":
        {
          "header": "Header",
          "description": "Description",
          "linkText": "Link div text",
          "href": "#"
        }
      }]
    };
  }

  render() {

    var slideshow = _.map(this.state.slides, (slide) => {

      if (slide.caption !== null) {
        return (
          <li key={_.uniqueId()}>
            <figure>
              <img className="img-responsive img-full-width" src={slide.src} width="1440" height="600" />
              <figcaption className="overlay overlay-30 text-center">
                <div className="highlighted-slider-2-content">
                  <h1 className="slider-title">{slide.caption.header}</h1>
                  <p className="slider-description">{slide.caption.description}</p>
                  <a href={slide.caption.href} className="btn btn-default">{slide.caption.linkText}</a>
                </div>
              </figcaption>
            </figure>
          </li>
        );
      }

      else {
        return (
          <li key={_.uniqueId()}>
            <figure>
              <a href="#">
                <img className="img-responsive img-full-width" src={slide.src} width="1440" height="600" alt={slide.alt} title={slide.alt} />    </a>
            </figure>
          </li>
        );
      }



    });
    return (
      <section>
        <div id="highlighted-2-region" className="highlighted region-0 block-0 bg-color-grayLight1 text-color-light" >
          <div className="region region-highlighted-2">
            <div id="block-views-front-page-slider-block" className="block block-views">
              <div className="content">
                <div className="view view-front-page-slider view-id-front_page_slider view-display-id-block">
                  <div className="view-content">
                    <div className="highlighted-slider-2">
                      <div className="flex-bullet-slider">
                        <ul className="slides">
                          {slideshow}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default Slider;
