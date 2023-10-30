import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";

export default class SimpleSlider extends Component {
  render() {
    window.onload = function () {
      $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      });
    };

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider className="z-[1]" {...settings}>
          <div>
            <img
              className="w-full h-full overflow-hidden opacity-[0.8]"
              src="/img/slider1.jpeg "
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full overflow-hidden opacity-[0.8]"
              src="/img/slider3.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[828.46px] overflow-hidden opacity-[0.8]"
              src="/img/slider6.jpeg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
