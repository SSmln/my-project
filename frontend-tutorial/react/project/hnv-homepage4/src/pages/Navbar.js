/* eslint-disable no-undef */
import React, {useState} from 'react';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


export const MenuItems = [
  {
    id: "1",
    title: 'Home',
    url: '/',
    cName: 'nav-links',

  },
  {
    id: "2",
    title: 'Members',
    url: '/members',
    cName: 'nav-links',
  },
  {
    id: "3",
    title: 'Papers',
    url: '/papers',
    cName: 'nav-links',
  },
  {
    id: "4",
    title: 'Photo',
    url: '/photo',
    cName: 'nav-links',
  },
  {
    id: "5",
    title: 'Contact us',
    url: '/contact',
    cName: 'nav-links',
  },
];

const Menu= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 200px;

`

const Nav__logo = styled.img` 
  margin-left : 250px;
  z-index: 500;
  cursor: pointer;
  background-size: contain;
  width: 60px;
  height: auto;
`;

const Menu__links = styled.a`  
  text-decoration: none;
  margin-right: 70px;
  font-weight: 500;
  position: relative;
  padding: 6px 12px;
  color: ${props => (props.isScroll ? "#4c5267" : "white")};
  &:hover {
    &&::after{
      width:100%;
    }}
 
   &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: grey;
    transition: all .5s ease-out;  
  }
 `
 
 ;

const Nav__bar =  styled.div`
  display: flex;
  padding: 0 0px;
  height: 100px;
  background-color: white;
  width : 100%;
  position: fixed;
  transition: all 0.2s ease-in-out;
  top: 0; right: 0; left: 0;
  opacity: ${props => (props.isScroll ? "1" : "0")};
  backdrop-filter: blur(30px);
  z-index: 1;
  position: fixed;
  text-decoration-line: none;  

  `;
  
const List = styled.li`

  list-style: none;
  
`;
const Nav__bar2 = styled.div`
  position: fixed;
  padding: 0 0px;
  height: 100px;
  width : 100%;
  top: 0; right: 0; left: 0;
  align-items: center;
  justify-content: space-between;
  display: flex;
  z-index: 2;
  background-color:transparent;

`;


function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 0 ? 
      setIsScroll(true) : setIsScroll(false)
    });
  }, [isScroll]);

  return (
    <div>
      <div> 
        <Nav__bar isScroll={isScroll} />
      </div>
        <Nav__bar2 >
          <Link to="/">
         <Nav__logo src={require("./image/logo.png")} />
         </Link>
        <Menu>     
        {MenuItems.map((item, index) => (
            <List key={index}> 
              <Menu__links isScroll={isScroll} className={item.cName} href={item.url}>
              {item.title} 
              </Menu__links>
            </List>
            ))}
        </Menu>
      </Nav__bar2>
    </div>
  );
}
export default Navbar;



      //  {/* <Nav className={`nav ${show && <Nav_black />}`} >
      //   <Navbar_logo>{" "}로고로고
      //   <Menu_items> 
      //       {MenuItems.map((item, index) => (
      //         <Key key={index}> 
      //           <a className={item.Name} 
        //          href={item.url}>
      //            {item.title}
      //           </a>
      //         </Key>
      //         ))
      //       }
            
      //     </Menu_items>
      //     <Fa_react />
      //   </Navbar_logo>
      //   <Menu_icon onClick={handleClick}>
      //     <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
      //   </Menu_icon>
      //  <ul className={clicked ? <Nav_menu active/> : <Nav_menu />} />   
      //   </Nav> */}