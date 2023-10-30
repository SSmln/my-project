import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-white  mt-[80px] w-[100%] bottom-0 h-[292px] float-left ">
        <div className="w-[500px] h-[292px] ">
          <div className="mt-[30px]">
            <img src="/img/logo.png" alt="" className="w-[300px]" />
            <p className="text-black mt-5 text-xl ml-7">
              Data Science & Business Analytics Lab.
              <br />
              School of Industrial and Management Engineering
              <br />
              College of Engineering, Korea University
            </p>
          </div>
        </div>
        <div className="w-[700px] h-[292px]">
          <div className="text-black text-[40px]  mt-[40px]">Contact Us</div>
          <div className="text-black mt-4 ml-[30px] overflow-hidden list-disc font-bold">
            <li>
              류한국 교수 (pilsung_kang@korea.ac.kr) 서울특별시 성북구 안암로
              145 고려대학교 자연계캠퍼스 창의관 801A호{" "}
            </li>
            <li>
              대학원 연구실 (총무 김재희 : jaehee_kim@korea.ac.kr) 서울특별시
              성북구 안암로 145 고려대학교 자연계캠퍼스 신공학관 208호,220호
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
