//yahan mst kaam krenge ki header footer same rhega aur andar home,aboutus, sb change hoga

import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'
//the place where we give Outlet we can change the things there 

function Layout() {
  return (
    <>

        <Header/>
        <Outlet/>
        <Footer/>
      
    </>
  )
}

export default Layout
