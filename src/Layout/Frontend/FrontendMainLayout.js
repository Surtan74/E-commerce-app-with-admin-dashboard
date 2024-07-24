import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from '../../Components/Frontend/Footer'

const FrontendMainLayout = () => {
  return (
    <>
        <Navbar />
        <div>
            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default FrontendMainLayout