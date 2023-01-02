"use client"

import React, { useState } from 'react'
import Toggle from 'react-styled-toggle';
import Switch from 'react-switch';
import Cards from './Cards'

const page = () => {
    const [toggleSwitch, setToggleSwitch] = useState(false)
  return (
    <div className="w-screen mb-10">
        <div className="flex flex-col items-center justify-center pt-6 lg:pt-12">
            <h1 className="text-3xl font-medium pb-3">Choose your plan</h1>
            <p className="text-gray-500  ">14 days unlimited free trial. No contract or credit card required.</p>

            <div className="flex pt-6 items-center  ">
                <div className="flex flex-row pr-4 items-center" onClick={() => setToggleSwitch(!toggleSwitch)}>
                    <p className="pr-3 font-medium">
                        Monthly
                    </p>
                        <Toggle width={65} backgroundColorUnchecked="white" backgroundColorButton='black' />
                </div>
                <div className="flex gap-2">
                    <p className="text-gray-500 pr-1 pt-[2px] ">Yearly</p>
                    <span className="outline outline-blue-600 rounded-xl p-1 px-2 text-sm text-blue-600">30% Off</span>
                </div>
            </div>

            <div className="py-4 pt-5 flex flex-col">
                <p className="text-gray-400 text-xs uppercase mb-5">Number of Monthly Visitors</p>
                <div className="bg-gray-300 rounded-lg h-2 w-[450px] sm:w-[600px] md:w-[750px]">
                    <div className="bg-blue-600 rounded-lg h-2 w-1/3 z-10 mb-3"></div>
                    <span className="w-1/3 flex items-center justify-end">
                        <div className="bg-black text-gray-200 p-2 px-4 text-sm relative left-6 rounded-lg">10k</div>
                    </span>
                </div>

            </div>
            <div className="mt-16">
                <Cards toggleSwitch={toggleSwitch} />
            </div>
        </div>
    </div>
  )
}

export default page