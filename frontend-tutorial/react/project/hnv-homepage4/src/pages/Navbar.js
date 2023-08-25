/* eslint-disable no-undef */
import React, {useState} from 'react';
import { useEffect } from 'react';
import styled from '@emotion/styled';



export const MenuItems = [
  {
    title: 'Home',
    url: '/',
    cName: 'nav-links',

  },
  {
    title: 'Members',
    url: '/members',
    cName: 'nav-links',
  },
  {
    title: 'Papers',
    url: '/papers',
    cName: 'nav-links',
  },
  {
    title: 'Photo',
    url: '/photo',
    cName: 'nav-links',
  },
  {
    title: 'Contact us',
    url: '/contact',
    cName: 'nav-links',
  },
];

const Menu= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  

`

const Nav__logo = styled.a` 
  font-size: 70px;
  padding-left: 100px;
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isScroll ? "white" : "skyblue")};

`;

const Menu__links = styled.a`  
  text-decoration: none;
  margin-right: 50px;
  color: ${props => (props.isScroll ? "white" : "skyblue")};
  &:hover {
   background: rgba(255, 255, 255, 0.3);
   transition: background 1s ease-out;  }
 `
 
 ;

const Nav__bar =  styled.div`
  display: flex;
  padding: 0 0px;
  height: 100px;
  background-color: grey;
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
  background-color: grey;
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
         <Nav__logo isScroll={isScroll}  href={"/"}>로고</Nav__logo>
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
      //           <a className={item.Name} href={item.url}>
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