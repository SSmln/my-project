
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Banner from './pages/Banner';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Publication from './pages/Publication';
import Navbar from './pages/Navbar';
import Member from './pages/Member';
import './index.css'
import Projects from './pages/Projects';

function App() {
  return (
    <div className=''>
    <Navbar />
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/Banner" element={<Banner />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Member" element={<Member />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Publication" element={<Publication />} />
    </Routes>
  <Footer />
    
    </div>
    )
}

export default App
