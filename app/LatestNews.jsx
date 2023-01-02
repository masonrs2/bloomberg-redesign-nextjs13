import Image from 'next/image';
import React from 'react'
import { IoIosArrowDropright } from 'react-icons/io'
import { isTemplateExpression } from 'typescript';
import Link from 'next/link'

async function getCrypto() {

    const res = await fetch("https://content.guardianapis.com/search?show-elements=image&api-key=3a8f8ea6-da02-4207-a122-0520e8bce8ea")
    const data = await res.json()
    return data.response.results
}

const LatestNews = async () => {
    const truncateText = (text, size) => {
        if(text?.length > size) return text.slice(0, size) + '...'
        else return text;
    }
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laborum dolor reprehenderit quod illum expedita, perspiciatis placeat fugiat soluta repudiandae corporis dicta nihil voluptatibus dignissimos magnam illo, alias doloribus eos!"
    const newsItems = await getCrypto()
  return (
    <div className="border-r-2 border-dotted" >
        <div className="flex flex-col px-2 pr-2">
            <div className="flex items-center gap-2 ">
                <h1 className="font-medium text-2xl lg:text-2xl pt-2 ">Latest News</h1>
                <IoIosArrowDropright  className="text-lg lg:text-xl  mt-4" />
            </div>
            {newsItems.map((item) => (
                <div key={item.id} className="flex flex-col py-4 pb-8 justify-start items-center border-b-2 border-dotted">
                    <div className="flex gap-3 justify-start items-center  w-full pb-3">
                        <div className="border-2 border-gray-200 ">
                            <p className="p-2 flex items-center justify-center h-8 text-sm font-semibold">{item.sectionName}</p>
                        </div>
                        <p className="text-gray-500 text-sm pt-3 pb-2">{item.webPublicationDate.split('T')[0]}</p>
                    </div>
                    <h1 className="font-bold text-lg lg:text-xl" >{item.webTitle}</h1>

                    <p className="text-gray-600 py-2 ">
                        {truncateText(lorem, 135)}
                    </p>
                    <div className="w-full pt-2">
                        <Link href={item.webUrl}>
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

export default LatestNews