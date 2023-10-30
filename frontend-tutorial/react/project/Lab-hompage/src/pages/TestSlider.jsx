import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "./TestSlider.module.css";

import Particle from "../Particle";
import Baner from "./Baner";

export default function TestSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    adaptiveHeight: true,
    fade: true,
    arrows: false,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  };
  //{/* // <div className=" items-center max-w-[1240px] mx-auto px-4 "> */}
  return (
    <div className=" items-center   ">
      <Slider className="z-[-1] bg-white" {...settings}>
        <div>
          <img
            className="w-full h-[680px] overflow-hidden opacity-[0.8] object-cover"
            src="/img/dron.jpg "
            alt=""
          />
          {/* <div className="absolute bottom-1/2 left-[auto] font-bold text-4xl text-white uppercase ">
            <div className=" justify-center items-center">
            <div className=" justify-center">
              <ExampleComponent />
            </div>
            <div className="w-[]">
              <ExampleComponent2 />
            </div>
            </div>
          </div> */}
          <div>
            <h2 className=" animate-slideTop absolute  h-10 w-[100%] top-[40%] p-7 border-none rounded-md antialiased text-3xl text-center  text-white font-sans font-bold ">
              Data Mining & Quality Analystics Lab. <br />
              <h2 className=" animate-slideLeft mt-3 antialiased text-base font-thin  ">
                {" "}
                Our lab is dedicated to research with passion <br />
                for Data mining
              </h2>
            </h2>
          </div>
        </div>
        <div>
          <img
            className="w-full h-[680px] overflow-hidden opacity-[0.8] object-cover"
            src="/img/dogrobo.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[680px] overflow-hidden opacity-[0.7] object-cover"
            src="/img/symembpage.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[680px] overflow-hidden opacity-[0.8] object-cover"
            src="/img/fuck.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

// export default {TestSlider};
