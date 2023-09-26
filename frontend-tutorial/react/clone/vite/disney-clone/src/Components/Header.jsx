import React, {useState}from 'react' // eslint-disable-line no-unused-vars
import logo from '/src/assets/images/logo.png' 
import {HiHome ,HiStar, HiPlay ,HiPlus ,HiDotsVertical} from "react-icons/hi";
import { HiMagnifyingGlass , HiTv} from "react-icons/hi2";
import profile from '/src/assets/images/profile.png' 
import HeaderItem from './HeaderItem';



function Header() {
    const [toggle , setToggle] = useState(false);
    const menu = [
      {
        id: 1,
        name: 'HOME',
        icon: HiHome
      },
      {
        id: 2,
        name: 'SEARCH',
        icon: HiMagnifyingGlass
      },
      {
        id: 3,
        name: 'WATCH LIST',
        icon: HiPlus
      },
      {
        id: 4,
        name: 'ORIGINALS',
        icon: HiStar
      },
      {
        id: 5,
        name: 'MOVIES',
        icon: HiPlay
      },
      {
        id: 6,
        name: 'SERIES',
        icon: HiTv
      },
    ]
  return (
    <div className='flex items-center gap-8 justify-between p-5 '>
      <div className='flex gap-8 items-center'>
        <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover' />
        
        <div className='hidden md:flex gap-8'> {/*작은화면*/}
        {menu.map((item)=> (
            <HeaderItem key={item.id} name={item.name} Icon={item.icon}/>
        ))}
        </div>


        <div className='flex md:hidden gap-5'> {/*풀화면*/}
        {menu.map((item,index)=> index<3 && (
            <HeaderItem key={item.id} name={''} Icon={item.icon}/>
        ))}
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical} />
            {toggle? <div className='absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map((item,index)=> index>2 && (
            <HeaderItem key={item.id} name={item.name} Icon={item.icon}/>
        ))}

            </div>:null}
      
          </div>
        </div>
        </div>   
        <img src={profile} 
        className=' w-[50px] h-[50px] rounded-full' />
    </div>
  )
}

export default Header
