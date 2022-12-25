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
    </nav>
  )
}

export default Navbar