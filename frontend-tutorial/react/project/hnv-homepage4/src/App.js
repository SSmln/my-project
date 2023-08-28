/* eslint-disable react/jsx-no-undef */
import {
  Routes, Route
} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Members from './pages/Members';
import Home from './pages/Home';
import Papers from "./pages/Papers"
import Photo from './pages/Photo';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Testing from './pages/Testing';
import './App.css';
import Banner from './pages/Banner';

// const SubNavbarOn= () =>{
//   if(window.location.pathname === '/' && '/home')
//   return null;
//   return (
//     <SubNavbar />
//     );
// }


// const NavbarOn= () =>{
//   if(window.location.pathname === '/' && '/home' )
//   return (
//     <Navbar />
//     );
// }
function App() {
  return (
    <div className="App">
      {/* <NavbarOn /> */}
      {/* <SubNavbarOn /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/banner" element={<Banner />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
