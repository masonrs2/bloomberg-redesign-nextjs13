import React from 'react'
import {navItems} from '../assets/constants'

const NavLinks = () => {
    const smallNavItems = navItems.slice(0, 5)
  return (
    <div>
        <div className="bg-gray-100 hidden lg:grid lg:grid-cols-11 md:text-sm text-xs w-screen gap-2 pb-5 md:pb-10 px-10 font-bold hover:text-black cursor-pointer " >
            {
                navItems.map((item) => (
                    <div className="" key={item.id}>
                        <p className="flex items-center hover:scale-105 duration-300 hover:text-black justify-center pt-6 text-gray-600">
                            {item.content}
                        </p>
                    </div>
                ))
            }
        </div>
        
        <div className="bg-gray-100 lg:hidden lg:text-lg grid grid-cols-5 underline decoration-b decoration-slate-500 underline-offset-4 cursor-pointer font-bold text-sm w-screen pb-5 md:pb-10 px-10 " >
            {
                smallNavItems.map((item) => (
                    <div key={item.id}>
                        <p onClick={() => setActiveStyle(true)} className="flex hover:text-black items-center hover:scale-105 duration-300 justify-center pt-6  text-gray-600">
                            {item.content}
                        </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default NavLinks