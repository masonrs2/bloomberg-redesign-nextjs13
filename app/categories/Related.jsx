import React from 'react'
import Link from 'next/link'

async function getNewsItems(catergoryId) {
  const res = await fetch(`https://inshorts.deta.dev/news?category=${catergoryId}`)
  const data = await res.json()
  console.log(data.data)
  console.log(typeof data.data)
  return data.data
}

const Related = async ({ categoryId }) => {
  let newsItems = await getNewsItems(categoryId) 
  // const moreNewsItems = newsItems.slice(0,8)
  // newsItems = newsItems.slice(0,4)

  const truncateText = (text, size) => {
    if(text?.length > size) return text.slice(0, size) + '...'
    else return text;
  }

  return (
    <div className="col-span-2 xl:ml-4 lg:ml-2 border-r border-dotted border-gray-300/80">
        {
            newsItems.slice(0,5).map((item, id) => (
            <div className={`flex cursor-pointer hover:bg-gray-300/40 border-b-2 lg:flex-col 2xl:flex-row border-gray-300/80 border-dotted ${id === 0 ? "pb-4" : "py-4"}`}>
              <Link href={item.url} className="2xl:flex">
                <img src={item.imageUrl} className="w-32 h-28 md:w-full 2xl:w-56 md:h-24 object-fill" />
                <div className="flex flex-col 2xl:px-4 pl-2 lg:px-0">
                    <div className="flex flex-row gap-8 justify-between md:mt-1 2xl:mt-0 ">
                        <p className="text-xs text-gray-500">{item.date.split(',')[0]}</p>
                        <p className="text-xs text-gray-500">10 min read</p>
                    </div>
                    <h2 className="font-semibold mt-1 ">{item.title}</h2>
                    <p className="text-xs lg:hidden mt-1 font-medium">{truncateText(item.content, 100)}</p>
                </div>
              </Link>
            </div>
            ))
          }

          {
              newsItems.slice(6,10).map((item, id) => (
                <div className={`md:hidden cursor-pointer hover:bg-gray-300/50 flex border-b-2 border-gray-300/80 border-dotted ${id === 0 ? "pb-4" : "py-4"}`}>
                    <img src={item.imageUrl} className="w-32 h-28md:w-56 h-24 object-fill" />
                    <div className="flex flex-col px-4">
                        <div className="flex flex-row gap-8 justify-between ">
                            <p className="text-xs text-gray-500">{item.date.split(',')[0]}</p>
                            <p className="text-xs text-gray-500">10 min read</p>
                        </div>
                        <h2 className="font-semibold mt-1 ">{item.title}</h2>
                        <p className="text-xs lg:hidden mt-1">{truncateText(item.content, 100)}</p>
                    </div>
                </div>
                        ))
                    }
      </div>
  )
}

export default Related