import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export const Menuitems = [
  {
    id: "1",
    title: "Member",
    url: "/member",
    cName: "nav-links",
  },
  {
    id: "2",
    title: "Publication",
    url: "/Publication",
    cName: "nav-links",
  },
  {
    id: "3",
    title: "Projects",
    url: "/Projects",
    cName: "nav-links",
  },
  {
    id: "4",
    title: "Contact us",
    url: "/contact",
    cName: "nav-links",
  },
];
// async function logJSONData() {
//   const response = await fetch("http://210.94.242.37:8080/user_info/read");
//   const jsonData = await response.json();
//   console.log(jsonData);
//   return jsonData;
// }

function MenuitemsList(props) {
  return Menuitems.map((item) => {
    return (
      <a key={item.id} href={item.url}>
        {item.title}
      </a>
    );
  });
}

function ClickedMenuitemOn(item) {
  return Menuitems.map((item) => {
    if (window.location.pathname === item.url)
      return (
        <a className=" text-black  " key={item.id}>
          {item.title}
        </a>
      );
  });
}

const Testing = () => {
  return (
    <nav>
      <div className="absolute w-[1920px] top-0  h-[375px]  z-2">
        <div className="flex space-x-[1380px] h-[100px] text-black items-center">
          <div className="">
            <Link to="/" className=" font-[arial] ml-[40px] text-3xl ">
              CEMI
            </Link>
          </div>
          <div className="list-none space-x-[20px] cursor-pointer ">
            {MenuitemsList()}
          </div>
        </div>
        <div className=" absolute left-[48%] top-[50%] text-3xl ">
          {ClickedMenuitemOn()}
        </div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
        <div className="text-3xl">asd</div>
      </div>
    </nav>
  );
};

export default Testing;
