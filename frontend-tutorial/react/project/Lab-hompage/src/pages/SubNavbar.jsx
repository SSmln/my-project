import React from "react";

import "../index.css";
import { Link } from "react-router-dom";
import { Menuitems } from "./Navbar";

function MenuitemsList(props) {
  return Menuitems.map((item) => {
    return (
      <a key={item.id} href={item.url}>
        {item.title}
      </a>
    );
  });
}

const SubNavbar = () => {
  return (
    <nav className=" w-[1920px] top-0 fixed ">
      <div className=" h-[100px] bg-transparent">
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
      </div>
    </nav>
  );
};

export default SubNavbar;
