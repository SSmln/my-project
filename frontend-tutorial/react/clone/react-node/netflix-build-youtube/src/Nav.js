import React, { useEffect } from 'react'
import './Nav.css';
import { useState } from 'react';

function Nav() {
  const [show , handleShow]=  useState(false);

  const transitionNavBar = () => {
    if( window.scrollY  > 100 ){
      handleShow(true);
    }
    else {
      handleShow(false);
    }  
  }


  useEffect(()=>{
    window.addEventListener("scroll", transitionNavBar);
    return() => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className ={`nav ${show && 'nav__black'}`}>
      <div className='nav__contents'>
        <img 
        className= "nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="" />
      
        <img
        className="nav__avatar"
        src="https://img.vogue.co.kr/vogue/2022/08/style_630dd03627f1f-930x523.jpeg" alt="" />
       
      
      </div>
    </div>
  );
}

export default Nav
