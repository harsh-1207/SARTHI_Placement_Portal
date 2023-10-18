import React from 'react'
import {NavLink} from 'react-router-dom'
import mainlogo from './logo.jpg'
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import Groups2Icon from '@mui/icons-material/Groups2';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CampaignIcon from '@mui/icons-material/Campaign';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <div className="header">
        <div className="side-nav">
          <div className="user">

            <img src={mainlogo} className="user-img" />

            <div className='user-name-email'>
              <h2>Harsh Bisht</h2>
              <p>harsh@gmail.com</p>
            </div>
            
            {/* <img src={mainlogo} className="star-img" /> */}

          </div>

          <header style={{background : 'transparent'}}>


          <nav className='navbar-wrapper'>

          <ul>
            <NavLink exact to="/">
              <li> <HomeIcon style={{fontSize : '5vh', background : 'transparent'}}/> <p>Home Page</p> </li>
            </NavLink>
            <NavLink exact to="/company-page">
            <li> <BusinessIcon style={{fontSize : '5vh', background : 'transparent'}}/> <p>Companies</p> </li>
            </NavLink>
            <NavLink exact to="/student-page">
            <li> <Groups2Icon style={{fontSize : '5vh', background : 'transparent'}}/> <p>Students</p> </li>
            </NavLink>
            <NavLink exact to="/applied-page">
            <li> <RecentActorsIcon style={{fontSize : '5vh', background : 'transparent'}}/> <p>Applied</p> </li>
            </NavLink>
            <NavLink exact to="/placed-page">
            <li> <PersonAddAltIcon style={{fontSize : '5vh', background : 'transparent'}}/> <p>Placed</p> </li>
            </NavLink>
            <NavLink exact to="/notice-page">
            <li> <CampaignIcon style={{fontSize : '5vh', background : 'transparent'}}/> <p>Notice</p> </li>
            </NavLink>
            <NavLink exact to="/profile-page">
            <li> <AccountCircleIcon style={{fontSize : '5vh', background : 'transparent'}}/> <p>Profile</p> </li>
            </NavLink>
          </ul>
          </nav>
          </header>

          <div className="footer-main">
          <ul>
            <li> <LogoutIcon style={{fontSize : '5vh', background : 'transparent'}}/> <p>Logout</p> </li>
          </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar