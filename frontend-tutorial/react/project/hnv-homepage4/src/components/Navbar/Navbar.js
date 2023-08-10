import React, {useState, useEffect} from 'react';
import './Navbar.css';
import { MenuItems } from "./MenuItems";
// import { Link } from "react-router-dom";



function Navbar () {


    const [show, handleShow]= useState(false);

    
   
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className="Nav">
            
            <h1 className="navbar-logo"> 로고로고
                <i className="fab fa-react"></i>
            </h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index)=>{
                    return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                    )
                })}
            </ul>
        </div>
     
        )
    }
    export default Navbar;