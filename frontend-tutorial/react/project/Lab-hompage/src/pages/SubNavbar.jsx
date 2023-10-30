import React, { useState, useEffect } from "react";

import "../index.css";
import { Link } from "react-router-dom";
import { Menuitems } from "./Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { style } from "../../node_modules/@motionone/dom/lib/animate/style";
import Navbar from "./Navbar";
function MenuitemsList(props) {
  return Menuitems.map((item) => {
    return (
      <a className="p-4" key={item.id} href={item.url}>
        {item.title}
      </a>
    );
  });
}

const SubNavbar = () => {
  const [open, setOpen] = useState(1);
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    // <nav className=" w-[1920px] top-0 fixed z-[2] ">
    //   <div className="h-[100px] bg-transparent">
    //     <div className=" flex space-x-[1380px] h-[100px] text-black items-center">
    //       <div className="">
    //         <Link to="/" className=" font-[arial] ml-[40px] text-3xl ">
    //           CEMI
    //         </Link>
    //       </div>
    //       <div className="list-none space-x-[20px] cursor-pointer ">
    //         {MenuitemsList()}
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    // <div>
    //   <NavBar className>      </NavBar>
    //   <Slider className="top0 left0"></Slider>
    // </div>
    <>
      {" "}
      {position === 0 ? (
        <div className=" fixed w-[100%] top-0  flex  justify-center   items-center  mx-auto px-4 ">
          <div className="w-[700px] text-3xl font-bold text-[#00df9a]">
            <Link to="/" className=" font-[arial] ml-[40px] text-3xl  ">
              CEMI
            </Link>
          </div>
          <div className="w-[500px] nav-menu lg:flex hidden cursor-pointer   z-[2]">
            {MenuitemsList()}
          </div>

          <div onClick={handleOpen} className="block lg:hidden max-sm:hidden  ">
            {!open ? (
              <CloseIcon sx={{ color: "black" }} className="cursor-pointer" />
            ) : (
              <MenuIcon sx={{ color: "black" }} className="cursor-pointer " />
            )}
          </div>
          <div
            className={
              !open
                ? "absolute right-0 top-0 w-[100%] h-full z-[-1] bg-white border-b-2 opacity-90 lg:hidden max-sm:hidden  "
                : "hidden "
            }
          >
            <div className=" bg-white mt-10 underline underline-offset-8 text-black flex flex-col border-b-2 border-red-800 lg:hidden max-sm:hidden">
              <div className="flex flex-col w-[500px] ml-[100px] mt-5">
              {MenuitemsList()}
              </div>
              
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white fixed w-[100%] top-0  flex justify-center  items-center  mx-auto px-4 z-[2]">
          <div className="w-[700px] text-3xl font-bold text-[#00df9a]">
            <Link to="/" className=" font-[arial] ml-[40px] text-3xl ">
              CEMI
            </Link>
          </div>
          <div className="w-[500px] nav-menu-2 lg:flex hidden cursor-pointer text-black z-[2]">
            {MenuitemsList()}
          </div>

          <div onClick={handleOpen} className="block lg:hidden max-sm:hidden  ">
            {!open ? (
              <CloseIcon sx={{ color: "black" }} className="cursor-pointer" />
            ) : (
              <MenuIcon sx={{ color: "black" }} className="cursor-pointer " />
            )}
          </div>
          <div
            className={
              !open
                ? "absolute right-0 top-0 w-[100%] h-full z-[-1] bg-white border-b-2 opacity-90 lg:hidden max-sm:hidden  "
                : "hidden "
            }
          >
            <div className=" bg-white mt-10 underline underline-offset-8 text-black flex flex-col border-b-2 border-red-800 lg:hidden max-sm:hidden">
              <div className="flex  flex-col w-[500px] ml-[100px] mt-5">
              {MenuitemsList()}
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubNavbar;
