import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <div className=" h-[292px] bg-white flex justify-center mt-12 ">
      <div className="w-[960px] bg-blue-300 text-white justify-center ">
        <div className="justify-center h-[157px]" />
        <p> Data Science & Business Analytics Lab.</p>
        <br />
        <p>School of Industrial and Management Engineering</p>
        <br />
        <p>College of Engineering, Korea University</p>
      </div>
      <div className="w-[960px] bg-red-300 ">Footer-contactus</div>
    </div>
  );
};

export default Footer;
