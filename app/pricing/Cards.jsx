"use client"

import React from 'react'
import { freeSubscription, proSubscription } from '../../assets/constants'
import { AiOutlineCheck } from 'react-icons/ai'

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 px-4 lg:gap-6">

        <div className="bg-white mt-10 rounded-md pb-12 border border-gray shadow-sm">
            <div className="flex flex-col pt-10 mx-12">
                <div className="flex flex-col items-center justify-center pb-8">
                    <h2 className="font-medium text-lg md:text-xl lg:text-2xl pb-3">Starter</h2>
                    <p className="text-2xl md:text-4xl lg:text-5xl font-bold flex gap-2">$29 <span className="uppercase text-sm text-gray-500 items-center justify-center flex font-semibold">/ mo</span>  </p>
                </div>

                <div className="flex flex-col pb-16">

                    {
                        freeSubscription.map((item) => (
                            <div key={item.id} className="flex pb-2">
                                <AiOutlineCheck className="text-blue-600 mr-3 mt-1" />
                                <p className="text-gray-600 w-48">{item.content}</p>
                            </div> 
                        ))
                    }
                </div>

                <button className="bg-blue-600 p-2 ml-8 rounded-md w-32 text-gray-200">Get Started</button>
             
            </div>
        </div>

        <div className="bg-black mt-10 rounded-md pb-12 lg:relative bottom-8">
            <div className="hidden lg:blcok w-full bg-blue-600 text-gray-200 uppercase text-center justify-center text-xs rounded-md">
                    <p className="py-2 ">Most Popular</p>
            </div>
            <div className="flex flex-col pt-10 mx-12">
                <div className="flex flex-col items-center justify-center pb-8">
                    <h2 className="font-medium text-lg md:text-xl lg:text-2xl text-gray-200 pb-3">Pro</h2>
                    <p className="text-2xl md:text-4xl lg:text-5xl font-bold flex gap-2 text-white ">$46 <span className="uppercase text-sm text-gray-500 items-center justify-center flex font-semibold">/ mo</span>  </p>
                </div>

                <div className="flex flex-col pb-10">

                    {
                        proSubscription.map((item) => (
                            <div key={item.id} className="flex pb-2">
                                <AiOutlineCheck className="text-blue-600 mr-3 mt-1" />
                                <p className="text-gray-200 w-48">{item.content}</p>
                            </div> 
                        ))
                    }
                </div>

                <button className="bg-blue-600 p-2 ml-8 rounded-md w-32 text-gray-300 ">Get Started</button>
             
            </div>
        </div>

        <div className="md:hidden lg:block bg-white mt-10 rounded-md pb-12 border border-gray shadow-sm">
            <div className="flex flex-col pt-10 mx-12">
                <div className="flex flex-col items-center justify-center pb-8">
                    <h2 className="font-semibold text-lg md:text-xl lg:text-2xl pb-3">Supporters</h2>
                    <p className="text-4xl md:text-5xl lg:text-5xl font-semibold flex gap-2">Custom  </p>
                </div>

                <div className="flex flex-col pb-16">

                    {
                        freeSubscription.map((item) => (
                            <div key={item.id} className="flex pb-2">
                                <AiOutlineCheck className="text-blue-600 mr-3 mt-1" />
                                <p className="text-gray-600 w-48">{item.content}</p>
                            </div> 
                        ))
                    }
                </div>

                <button className="bg-blue-600 p-2 ml-8 rounded-md w-32 text-gray-200 ">Get Started</button>
             
            </div>
        </div>
    </div>

    
  )
}

export default Cards