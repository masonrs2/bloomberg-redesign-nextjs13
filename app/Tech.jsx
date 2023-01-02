import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDropright } from 'react-icons/io'
import { isTemplateExpression } from 'typescript';

async function fetchTechArticles() {

    const res = await fetch("https://inshorts.deta.dev/news?category=technology")
    const data = await res.json()
    console.log(data.data[4])
    console.log(typeof data.data[4])
    return data.data.slice(0,3)
}

const Tech = async () => {
    const newsItems = await fetchTechArticles()

    const truncateText = (text, size) => {
        if(text?.length > size) return text.slice(0, size) + '...'
        else return text;
    }
  return (
    <div className="border-r-2 border-dotted" >
        <div>
                <div className="flex gap-2 items-center pb-4">
                    <h1 className="font-medium text-2xl lg:text-2xl mt-2 ">Technology</h1>
                    <IoIosArrowDropright  className="text-lg lg:text-xl mt-1" />
                </div>
            {
                newsItems.map((newsItem, id) => (

            <div key={id} className={`flex flex-col px-2 pr-2 pb-4 border-b-2 border-dotted ${id === 0 ? "" : "pt-6"}`}>

                <img src={newsItem?.imageUrl} className="object-contain flex items-start justify-start" />
                
                <div className="flex justify-between">
                    <p className="text-gray-500 font-medium text-xs pt-3 pb-2">{newsItem?.date.split(',')[0]}</p>

                  
                </div>

                <h1 className="font-bold text-lg lg:text-xl pb-1">{newsItem.title}</h1>
                <p className="text-gray-600 py-2">{truncateText(newsItem.content,255)}</p>

                <p className="text-gray-700 font-medium text-xs pt-3 pb-2">By: {newsItem?.author}</p>

                <Link className="mt-2" href={newsItem.url}>
                    <button className="flex border p-1 text-xs border-black underline underline-offset-2 hover:scale-105 text-blue-700 duration-300 ">Continue Reading</button>
                </Link>

            </div>
                ))
            }
        </div>
    </div>
  )
}

export default Tech

 // var requestOptions = {
    //     method: 'GET'
    // };
    
    // var params = {
    //     api_token: 'NM2KWrGKuC6pdugVIRFLwob3kpPeL9SPyMbpPolS',
    //     categories: 'tech',
    //     language: 'en',
    //     limit: '50'
    // };
    
    // var esc = encodeURIComponent;
    // var query = Object.keys(params)
    //     .map(function(k) {return esc(k) + '=' + esc(params[k]);})
    //     .join('&');
    
    
    // const url = "https://newsdata.io/api/1/archive?apikey=pub_15154074c5f9d3a62913b17f38fd9c4fca54f&category=sports&language=en"

    // const res = await fetch("https://api.thenewsapi.com/v1/news/all?" + query, requestOptions)