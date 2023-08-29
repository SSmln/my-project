import React from 'react'
import "../index.css";
import { Menuitems } from './Navbar';

function ClickedMenuitemOn(item) {
  return Menuitems.map((item) => {
    if(window.location.pathname === (item.url) )
      return <a key={item.id}>
        {item.title}
      </a>   
      
 });
}

  

const Banner = () => {
  
  
  return ( 
    <div>
      {ClickedMenuitemOn()}
    </div>
  
  
    )
}

export default Banner