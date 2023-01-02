import React from 'react'

const Footer = () => {
  return (
    <div className=" rounded-lg shadow-xl xl:px-32 lg:px-16 border-t-2 border-dotted pt-4 pb-5 px-8 mt-9 ">
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row text-white gap-3 text-sm relative bottom-2">
                <p className="text-gray-500">Disclaimer</p>
                <p className="text-gray-500">Terms of Service</p>
                <p className="text-gray-500">Privacy Policy</p>
                <p className="text-gray-500">About Us</p>
            </div>            
            <p className="text-gray-700 text-sm ">© 2022 Bloomberg News Co. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer