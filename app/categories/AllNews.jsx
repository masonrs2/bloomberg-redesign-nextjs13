import React from 'react'
import Link from 'next/link'

async function getAllNewsItems() {
    const res = await fetch(`https://inshorts.deta.dev/news?category=all`)
    const data = await res.json()
    return data.data.slice(11,16)
}

const AllNews = async () => {
    const newsItems = await getAllNewsItems()
  return (
    <div className="hidden md:block col-span-2 xl:ml-4 lg:ml-2">
    {
        newsItems.map((item, id) => (
            <div className={`hidden cursor-pointer hover:bg-gray-300/40 lg:flex lg:flex-col  2xl:flex-row border-b-2 border-gray-300/80 border-dotted ${id === 0 ? "pb-4" : "py-4"}`}>
                <Link href={item.url} className="2xl:flex">    
                    <img src={item.imageUrl} className="w-28 2xl:w-56 md:w-full h-24 object-fill" />
                    <div className="flex flex-col 2xl:px-4  md:mt-1 2xl:mt-0">
                        <div className="flex flex-row gap-8 justify-between ">
                            <p className="text-xs text-gray-500">{item.date.split(',')[0]}</p>
                            <p className="text-xs text-gray-500">10 min read</p>
                        </div>
                        <h2 className="font-semibold mt-1 ">{item.title}</h2>
                    </div>
                </Link>
            </div>

        ))
    }
    </div>
  )
}

export default AllNews