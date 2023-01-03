"use client"

import React, { useState } from 'react'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import NavLinks from './NavLinks'
import Link from 'next/link'

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    
    return (
        <div className="shadow-xl flex flex-col shadow-gray-100  just">
            <div className="p-4 flex justify-between items-center border-b-2 border-gray-300/80 border-dotted">
                {
                    toggleNav  ? 
                    <FaWindowClose 
                        size={25} 
                        className="cursor-pointer" 
                        onClick={() => setToggleNav(!toggleNav)}
                    />
                    : 
                        <FaBars 
                            size={25} 
                            className="cursor-pointer" 
                            onClick={() => setToggleNav(!toggleNav)}
                        />
                }
                
                <Link href="/">
                    <h1 className="hidden md:block text-black font-extrabold md:text-2xl lg:text-3xl">Bloomberg</h1>
                </Link>
            
                    <div className="flex flex-row gap-3 pr-3">                      
                            <button className="flex justify-center items-center gap-2 outline p-2 w-[105px] bg-black text-gray-200 font-light "><AiOutlineUser size={23}  /> Sign In</button>
                            <Link href="/pricing">
                                <button className="outline p-2 w-[105px] font-light ">Subscribe</button>
                            </Link>
                    </div>
            </div>
            
            <div className="">
                <NavLinks />
            </div>
    </div>
  )
}
// async function getNotes() {
    
//     const url = "https://newsdata.io/api/1/news?apikey=pub_15154074c5f9d3a62913b17f38fd9c4fca54f&category=sports&language=en"

//     const res = await fetch(url)
//     const data = await res.json()
//     return data

// }

export default Navbar