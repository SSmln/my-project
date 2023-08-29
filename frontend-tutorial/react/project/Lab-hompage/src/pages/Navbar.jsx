import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';

export const Menuitems = [
  {
    id: "1",
    title: 'Member',
    url: '/member',
    cName: 'nav-links',
   
  },
  { 
    id: "2",
    title: 'Publication',
    url: '/Publication',
    cName: 'nav-links',

  },
  {
    id: "3",
    title: 'Projects',
    url: '/Projects',
    cName: 'nav-links',
  },
  {
    id: "4",
    title: 'Contact us',
    url: '/contact',
    cName: 'nav-links',
  },
];

function MenuitemsList(props) {
  return Menuitems.map((item) => {
      return <a key={item.id} href={item.url}>
        {item.title}
      </a>   
      
 });
}


const Navbar = () => {
  return (
  <div className='bg-gray-500 h-36 flex justify-center'>
    <div className="width-full h-28 bg-black flex justify-center">
      <div to="/"className="flex space-x-72 bg-purple-100 items-center ">
       <Link to = "/">
        <img className="cursor-pointer" src='/img/logo.png' />    
       </Link>
        <div className=''>
          <a className="flex list-none menu_items space-x-9 cursor-pointer text-sky-400/100" >
            {MenuitemsList()}
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar

