import React from 'react'
import Tech from './Tech'
import Business from './Business'
import LatestNews from './LatestNews'

const HomePage = async () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-4 ">

        <Tech />
        <LatestNews />
        <Business />

        <div className="bg-gray-300">
            Home
        </div>
    </div>
  )
}

export default HomePage