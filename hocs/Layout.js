import React from 'react'
import Navbar from "../components/navbar/index"

const Layout = ({ children }) => {
  return (
    <div>
        <Navbar />
        { children }
    </div>
  )
}

export default Layout