import { Routes, Route, Link, Switch } from "react-router-dom";
import './App.css';

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Members from "./pages/Members";
import Papers from "./pages/Papers";
import Photo from "./pages/Photo";
import Contact from "./pages/Contact";
import Test from "./pages/Test"
import Members1 from "./pages/Members1";
import Members2 from "./pages/Members2";
import Members3 from "./pages/Members3";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members1" element={<Members1 />} />
        <Route path="/members2" element={<Members2 />} />
        <Route path="/members3" element={<Members3 />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
