import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import Link from 'next/link'

async function getAllNewsItems() {
    const res = await fetch(`https://inshorts.deta.dev/news?category=all`)
    const data = await res.json()
    return data.data.slice(0,10)
}

const LatestStories = async () => {
    const allNewsItems = await getAllNewsItems()

    const truncateText = (text, size) => {
        if(text?.length > size) return text.slice(0, size) + '...'
        else return text;
    }
  return (
    <div className="py-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full gap-4"> 
        {
            allNewsItems.map((item, id) => (
                <div className="flex flex-col cursor-pointer hover:bg-gray-300/40">
                    <Link href={item.url}>
                        <div className="flex flex-col gap-2 pb-3">
                            <img src={item.imageUrl} className="w-full h-48" />
                            <h4 className="text-sm font-semibold">{truncateText(item.title, 53)}</h4>
                            <div className="flex">
                                <p className="text-xs text-gray-500">InShorts Breaking News</p>
                                
                                <AiFillCheckCircle className="ml-2" />
                            </div>

                            <div className="flex gap-3 items-center"> 
                                <p className="text-xs text-gray-500">By: {item.author}</p>
                                <span className="text-xs text-gray-600">•</span>
                                <p className="text-xs text-gray-500">{item.date.split(",")[0]}</p>
                            </div>

                        </div>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default LatestStories