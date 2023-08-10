"use client"
import React from 'react'
import Image from 'next/image'
import { HiBell, HiChat, HiSearch } from 'react-icons/hi';
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react"



function Header() {
  const { data: session } = useSession();

  console.log(session)

  return (
    <div className='flex gap-3 items-center P-6' >
      <Image src='/pinterest logo.png' alt='logo' 
      width={50} height={50}
      className='hover:bg-gray-300 p-2 
      rounderd-full cursor-pointer'/>
      <button className='bg-black
      text-white p-2 px-4 rounded-full'>Home</button>
      <button className='font-semibold p-2 px-4 rounded-full'>Create</button>
   
      <div className='bg-[#e9e9e9] p-3 
      flex gap-3 item-center rounded-full w-full hideen md:flex' >
   
  
      <HiSearch className='text-[25px] 
      text-gray-500'/>
      <input type="text" placeholder='Search' 
      className='bg-transparent outline-none '/>

 
      </div>
      <HiSearch className='text-[25px] 
      text-gray-500 md:hidden ' />


      <HiBell className='text-[50px] text-gray-500'/>
      <HiChat className='text-[50px] text-gray-500'/>
      {/* <Image src="/man.png" alt = 'user-image' width = {50} height={50}
      className='' /> */}
    
      <button className='font-semibold p-2 px-4 rounded-full'
      onClick={() => signIn()}>Login</button>
    
    </div>
  )
}

export default Header;
