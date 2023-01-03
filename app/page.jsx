import React from 'react'
import Tech from './Tech'
import Business from './Business'
import LatestNews from './LatestNews'
import { Suspense } from 'react'

const HomePage = async () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:px-16 xl:px-20 px-6">
     
        <Tech />
        <LatestNews />
        <Business />
        
    </div>
  )
}

export default HomePage