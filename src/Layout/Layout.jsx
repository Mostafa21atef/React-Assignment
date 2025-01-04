import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Info from '../Info/Info'
import '../css/Home.css'
export default function Layout() {
  return <>
  <Navbar />
  <div className="container-fluid pt-5 ">
  <Outlet />
  <Info />
  </div>

<Footer />
  </>
}
