import '../styles/globals.css'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import { Suspense } from 'react'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <div className="w-full h-full bg-gray-100 font-signika">
          <div className="">
            <Navbar />
            {/* <Home /> */}
              {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
