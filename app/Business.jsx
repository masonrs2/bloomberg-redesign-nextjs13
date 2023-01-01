import React from 'react'
import { IoIosArrowDropright } from 'react-icons/io'
import Link from 'next/link'

async function fetchBusinessArticles() {
    const res = await fetch("https://inshorts.deta.dev/news?category=business")
    const data = await res.json()
    
    return data.data.slice(0,11);
}

const Business = async () => {
    const newsItems = await fetchBusinessArticles()
  return (
    <div >
        <div className="flex flex-col px-2 pr-2">
            <div className="flex items-center gap-2 ">
                <h1 className="font-medium text-2xl lg:text-2xl pt-2 ">Business</h1>
                <IoIosArrowDropright  className="text-lg lg:text-xl  mt-4" />
            </div>
            {newsItems.map((item) => (
                <div className="flex xl:flex-row flex-col gap-2 border-b-2 border-dotted ">
                    <div key={item.id} className="flex flex-col py-4 pb-8 justify-start items-center ">
                        <div className="flex gap-3 justify-start items-center  w-full pb-3">
                            <div className="border-2 border-gray-200 ">
                                <p className="p-2 flex items-center justify-center h-8 text-sm font-semibold">Business</p>
                            </div>
                            <p className="text-gray-500 text-sm pt-3 pb-2">{item.date.split(',')[0]}</p>
                        </div>
                        <h1 className="font-bold text-lg lg:text-xl" >{item.title}</h1>

                        <p className="text-gray-600 py-2 ">
                        
                        </p>
                        <div className="w-full hidden xl:block">
                            <Link href={item.url}>
                                <button className="flex border p-1 text-xs border-black underline underline-offset-2 hover:scale-105 text-blue-700 duration-300  ">Continue Reading</button>
                            </Link>
                        </div>

                        <img src={item.imageUrl} className="lg:hidden rounded object-contain xl:h-36 mt-4" />
                    </div>

                    <img src={item.imageUrl} className="hidden lg:block rounded object-contain xl:h-36 mt-4" />

                    <div className="w-full xl:hidden pb-6">
                            <Link href={item.url}>
                                <button className="flex border p-1 text-xs border-black underline underline-offset-2 hover:scale-105 text-blue-700 duration-300  ">Continue Reading</button>
                            </Link>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Business