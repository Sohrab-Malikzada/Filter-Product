import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Contact from './Contact'
import Home2 from './Home2'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Contact />
      <Home2 />
     {/* <h2>Footer</h2>  */}
    </div>
  )
}

export default Layout
