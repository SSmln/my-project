import { Routes, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Papers from "./pages/Papers";
import Photo from "./pages/Photo";
import Contact from "./pages/Contact";
import Test from "./pages/Test"

function App() {
  return (
  
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/members" element={<Members />} />
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
