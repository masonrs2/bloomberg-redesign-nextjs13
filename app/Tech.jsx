import React from 'react'
import { IoIosArrowDropright } from 'react-icons/io'

async function getCrypto() {
    var requestOptions = {
        method: 'GET'
    };
    
    var params = {
        api_token: 'NM2KWrGKuC6pdugVIRFLwob3kpPeL9SPyMbpPolS',
        categories: 'tech',
        search: 'apple',
        limit: '50'
    };
    
    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(function(k) {return esc(k) + '=' + esc(params[k]);})
        .join('&');
    
    // const url = "https://newsdata.io/api/1/archive?apikey=pub_15154074c5f9d3a62913b17f38fd9c4fca54f&category=sports&language=en"

    const res = await fetch("https://api.thenewsapi.com/v1/news/all?" + query, requestOptions)
    const data = await res.json()
    const info = data.data[0].image_url
    console.log(info)
    console.log(typeof info)
    return data
}

const Tech = async () => {
    const techItem = await getCrypto()
  return (
    <div className="">
        <div className="flex gap-2 items-center ">
            <h1 className="font-medium text-xl lg:text-2xl">Crypto</h1>
            <IoIosArrowDropright  className="text-lg lg:text-xl mt-[2px]" />
        </div>
    </div>
  )
}

export default Tech