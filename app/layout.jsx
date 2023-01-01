import '../styles/globals.css'
import Navbar from './Navbar'
import Home from './Home'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <div className="w-full h-screen bg-gray-100 font-signika">
          <Navbar />
          {/* <Home /> */}
          {children}
        </div>
      </body>
    </html>
  )
}
