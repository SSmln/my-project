import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Publication from "./pages/Publication";
import Navbar from "./pages/Navbar";
import Member from "./pages/Member";
import "./index.css";
import Projects from "./pages/Projects";
import Slider from "./pages/Slider";
import SubNavbar from "./pages/SubNavbar";
import Testing from "./pages/Testing";

function App() {
  const SliderControll = () => {
    if (window.location.pathname == "/") return <Slider />;
  };

  const SubNavControll = () => {
    if (window.location.pathname == "/") return <SubNavbar />;
  };

  const NavControll = () => {
    if (window.location.pathname !== "/") return <Navbar />;
  };

  const SubNavControllOhers = () => {
    if (window.location.pathname !== "/") return <SubNavbar />;
  };

  return (
    <div className="">
      <SliderControll />
      <NavControll />
      <SubNavControll />
      <SubNavControllOhers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Member" element={<Member />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Publication" element={<Publication />} />
        <Route path="/SubNavbar" element={<SubNavbar />} />
        <Route path="/Testing" element={<Testing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
