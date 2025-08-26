"use client"
import React from 'react'
import { navLinks } from '@/constants'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import {ScrollTrigger ,SplitText} from 'gsap/all'




const Navbar = () => {
    
  return (
    <nav className='text-amber-100 backdrop-blur-md fixed gap-4 items-center z-30 flex-col sm:flex-row flex py-8 px-10 justify-between w-[100vw]'>
        <div className='Negra text-3xl flex items-center gap-2 flex-center '>
            <img src="/logo.png" alt="logo" className='h-8 w-8' />
            <span>Aryan Pour</span>
        </div>
        <div className='w-fit text-white '>
            <ul className='flex justify-evenly text-xs md:text-lg gap-8'>
            {navLinks.map((e)=>(
                <li  key={e.id} >
                    <a href={`#${e.id}`} > {e.value}</a>
                </li>
            ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
