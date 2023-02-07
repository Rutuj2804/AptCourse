import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/loader/Loader'
import Success from '../components/message/Success'
import Navbar from "../components/navbar/index"
import Sidebar from "../components/sidebar/index"

const Layout = ({ children }) => {

  const sidebar = useSelector(state=>state.settings.sidebar)
  const success = useSelector(state=>state.settings.success)
  const isLoading = useSelector(state=>state.settings.isLoading)

  return (
    <div>
        <Navbar />
        <Sidebar open={sidebar} />
        { children }
        {success && !isLoading ? <Success/> : null}
        {isLoading ? <Loader /> : null}
    </div>
  )
}

export default Layout