import React, { useEffect, useState } from "react";
import TestSlider from "./TestSlider";
import SubNavbar from "./SubNavbar";
import SwitchingTabs from "./SwitchingTabs";
import { TypeAnimation } from "react-type-animation";
import { DownloadDone } from "@mui/icons-material";
import Tabstest from "./SwitchingTabs";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  return (
    <>
      {/* {loading === true ? (
        <div className="fixed z-[1] top-0 right-0 left-0 bottom-0  bg-white ">
          <div className="animate-slideCenter w-[100%] h-[100%]">
            <img
              src="/public/img/dron.jpg"
            />
          </div>
          <div className="absolute">
          </div>
        </div>
      ) : (
       <div>dosomthing here</div> ) }  */}

      <div className="">
        <TestSlider />
        <div className="flex items-center justify-center  bg-white  w-[100%]  h-[496px] float-left ">
          <div className="w-[500px] h-[292px]  ">
            <div className=" mt-[30px]">
              <img src="/img/logo.png" alt="" className="w-[300px] mb-7" />
              <p className="text-black mt-1 text-lg ml-7 font-serif">
                <div className="font-bold">
                  Data Science & Business Analytics Lab.
                </div>
                School of Industrial and Management Engineering
                <br />
                <div className="font-bold">
                  College of Engineering, Korea University
                </div>
              </p>
            </div>
          </div>
          <div className="w-[700px] h-[292px]">
            <div className="text-black text-[50px] w-[466px] text-center font-serif font-bold mt-[30px]">
              Purpose
            </div>
            <div className="flex justify-center text-black mt-4 mr-2 overflow-hidden list-disc text-sm not-italic font-sans">
              <DownloadDone sx={{ color: "red", opacity: "0.5", p: "2px" }} />
              <p className="leading-loose">
                본 연구실 홈페이지는{" "}
                <b className="font-bold text-base ">"연구원들의 손자국 기록"</b>{" "}
                과<b className="font-bold text-base"> "더나은 세상"</b>을 <br />
                목적으로 운영되고 있습니다.
              </p>
            </div>
            <div className="flex justify-center text-black mt-4 mr-2 overflow-hidden list-disc text-sm not-italic font-sans">
              <DownloadDone sx={{ color: "red", opacity: "0.5", p: "2px" }} />
              <div className="leading-loose w-[466px]">
                <b className=" text-base font-bold ">"인공지능/머신러닝"</b> 과
                같은 분야를 취급하고 있습니다.
                <br />
                <b className=" text-base font-bold ">
                  관심있는 모든 분들을 환영합니다.
                </b>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className=" justify-center bg-[#f2f2f2]  w-[100%]  h-[690px] float-left md:flex hidden ">
          <div className="w-[1200px] h-[292px]  ">
            <div className=" text-center">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Our research focuses on abc",
                  2500, // wait 1s before replacing "Mice" with "Hamsters"
                  "Our research focuses on 123",
                  2500,
                  "Our research focuses on 567",
                  2500,
                  "Our research focuses on 890",
                  2500,
                ]}
                wrapper="span"
                speed={25}
                deletionSpeed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                className="w-[1200px] mt-20"
                repeat={Infinity}
              />
            </div>
            <div className="p-6 w-[100%] mx-auto">
              {/* <SwitchingTabs /> */}
              <Tabstest />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
