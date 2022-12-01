import React from 'react'
import { useState } from 'react';
import travelBuddy from '../assets/pnghut_world-royalty-free-illustration-vector-graphics-travel-logo-air.png';
import '../styles/Navbar.css'
const navbarData = [
  {
    label: 'Destinations',
    id:'#destinations'
  },
  {
    label: 'Hotels',
    id:'hotels'
  },
  {
    label: 'Flights',
    id:'flights'
  },
  {
    label: 'Bookings',
    id:'#bookings'
  },
  {
    label: 'Login',
    id: 'login'
  }
]
const Navbar = () => {
  const [activeToggleState, setActiveToggleState] = useState(false);

  const handleToggleClick = (e) => {
    e.target.classList.toggle('active');
    setActiveToggleState((prev) => !prev);
  }

  return (
    <nav>
      <div className='nav__logo-container'>
        <img src={travelBuddy} alt='travel_buddy'  />
        <h4>Travel Buddy</h4>
      </div>
      <div className="nav__links-container">
        <aside className={activeToggleState ? 'activeToggle':""}>
        {navbarData.map(({ label, id }) => (
          <a className="p__bolder" key={id} href={id.includes('#') ? id :'#' }>{label}</a>
          ))}
          </aside>
        <div className={activeToggleState ? 'activeToggle':""}>
        <button className="signup__btn">Sign Up</button>
        <select name="languages" id="lang" defaultValue='javascript'>
        <option value="english">EN</option>
        <option value="spanish">ES</option>
        <option value="french">FR</option>
        <option value="Danish">NL</option>
        </select>
        </div>
      </div>
   <div className="toggle" onClick={handleToggleClick}></div>
    <svg viewBox="0 0 500 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
  <g transform="translate(54.95371627807617, -15.4914398193359375)">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor: 'rgb(76, 161, 175)'}}></stop>
        <stop offset="100%" style={{stopColor: 'rgb(196, 224, 229)'}}></stop>
      </linearGradient>
    </defs>
    <path className="blob" d="M427,314Q378,378,314,365.5Q250,353,185,366.5Q120,380,121.5,315Q123,250,134.5,198Q146,146,198,120Q250,94,298,124Q346,154,411,202Q476,250,427,314Z" fill="url(#gradient)"></path>
  </g>
      </svg>
    </nav>
  )
}

export default Navbar