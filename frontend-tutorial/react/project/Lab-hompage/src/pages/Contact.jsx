import React from "react";

import Baner from "./Baner";

const Contact = () => {
  const baner = {
    name: "Contact",
  };
  return (
    <>
      <Baner name={baner.name} />

      <div className="p-3 absolute z-[-1]">
        {/* <SubNavbar /> */}
        {/* <Particle/> */}
      </div>
    </>
  );
};

export default Contact;
