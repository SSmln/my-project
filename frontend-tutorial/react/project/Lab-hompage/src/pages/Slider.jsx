import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider className="z-[-1]" {...settings}>
          <div>
            <img
              className="w-full h-full overflow-hidden opacity-[0.8]"
              src="/img/slider1.jpeg "
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full overflow-hidden"
              src="/img/slider3.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[828.46px] overflow-hidden"
              src="/img/slider6.jpeg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
