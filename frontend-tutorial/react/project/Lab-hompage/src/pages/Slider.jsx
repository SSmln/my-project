import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
// import Particle from "../Particle";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      adaptiveHeight: true,
    };
    return (
      <div className=" items-center max-w-[1240px] mx-auto px-4 ">
        <Slider className="z-[-1]" {...settings}>
          <div>
            <img
              className="w-full h-[828.46px] overflow-hidden opacity-[0.8] object-cover"
              src="/img/slider1.jpeg "
              alt=""
            />

            {/* <Particle/> */}
          </div>
          <div>
            <img
              className="w-full h-[828.46px] overflow-hidden opacity-[0.8] object-cover"
              src="/img/slider3.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[828.46px] overflow-hidden opacity-[0.8] object-cover"
              src="/img/symembpage.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
