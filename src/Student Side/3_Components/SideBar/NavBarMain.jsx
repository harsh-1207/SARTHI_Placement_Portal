import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const NavBarMain = () => {
  return (
    <>
      <div className="main_wrapper" style={{height: '0px',width: '0px', display : "flex", margin: '0'}}>
        <NavBar />
        <Outlet />
        {/* <h1>hellp</h1> */}
      </div>
    </>
  )
}

export default NavBarMain