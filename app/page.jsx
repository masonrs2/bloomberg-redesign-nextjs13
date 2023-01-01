import React from 'react'

import Tech from './Tech'



const HomePage = async () => {
    
  return (
    <div className="grid grid-cols-3 px-4 ">

        <Tech />

        <div  className="bg-gray-200">
            Home
        </div>

        <div className="bg-gray-300">
            Home
        </div>
    </div>
  )
}

export default HomePage