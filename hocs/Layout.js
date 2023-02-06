import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from "../components/navbar/index"
import Sidebar from "../components/sidebar/index"

const Layout = ({ children }) => {

  const sidebar = useSelector(state=>state.settings.sidebar)

  return (
    <div>
        <Navbar />
        <Sidebar open={sidebar} />
        { children }
    </div>
  )
}

export default Layout