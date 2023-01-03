import React from 'react'
import { isTemplateSpan } from 'typescript'
import LatestStories from '../LatestStories'
import AllNews from '../AllNews'
import Related from '../Related'

async function getNewsItems(catergoryId) {
    const res = await fetch(`https://inshorts.deta.dev/news?category=${catergoryId}`)
    const data = await res.json()
    console.log(data.data)
    console.log(typeof data.data)
    return data.data
}

const page = async ({params}) => {
    let newsItems = await getNewsItems(params.id)
    const featuredStory = newsItems[6]
    newsItems = newsItems.slice(0,4)

    const truncateText = (text, size) => {
        if(text?.length > size) return text.slice(0, size) + '...'
        else return text;
    }

  return (
    <div className="w-screen lg:px-16 xl:px-24 px-6">
        <div className="flex flex-col ">
            <h1 className="font-bold text-3xl lg:text-4xl py-4 pb-12 flex justify-center items-center capitalize" >{params.id}</h1>
            <div className=" grid gap-4 grid-cols-1 md:grid-cols-5 lg:grid-cols-7 pb-8 border-b-2 border-gray-300/80 border-dotted">

                <div className="lg:grid md:col-span-3 lg:col-span-3 ">
                    <div className="flex flex-col">
                        <img src={featuredStory?.imageUrl} className="w-[800px] h-[500px] bg-slate-600 " />
                        <div className="flex flex-col pt-3">
                            <h2 className="font-semibold text-xl lg:text-2xl ">{featuredStory.title}</h2>

                            <div className="flex flex-row gap-8 justify-between my-1 mt-2 items-center ">
                                <p className="text-xs text-gray-500">By: {featuredStory.author}</p>
                                <p className="text-xs text-gray-500">{featuredStory.date.split(',')[0]}</p>
                            </div>

                            <p className="mt-2 text-sm md-text-md text-gray-700">{featuredStory.content}</p>
                        </div>
                    </div>
                </div>


                <Related categoryId={params.id} />
                <AllNews />

            </div>
                <h1 className="font-semibold text-2xl xl:text-3xl mb-4 pt-6">Latest Stories</h1>
                <LatestStories />
            </div>
    </div>
  )
}

export default page