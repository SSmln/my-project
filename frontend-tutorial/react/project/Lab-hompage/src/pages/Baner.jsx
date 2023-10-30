import React from "react";

const Baner = (pagename) => {
  const c = {
    name: pagename,
  };

  return (
    <>
      <div className=" relative z-[-1]  mb-[20px] justify-center">
        <img
          src="img/symembpage.png"
          alt=""
          className="w-[100%] h-80 opacity-50 object-cover "
        />
        <div className="absolute left-[40%] h-10 w-[20%] top-[50%] p-12 border-1 rounded-lg text-center bg-red-900 opacity-80 text-black"></div>
        <h2 className="absolute left-[40%] h-10 w-[20%] top-[50%] p-7 border-none rounded-md text-center  text-white font-sans font-bold ">
          {c.name.name} {console.log(c.name.name)} <br />{" "}
          <h2 className="text-xs font-thin mt-2 ">In CEMI</h2>
        </h2>
      </div>
    </>
  );
};

export default Baner;
