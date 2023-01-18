import React,{ useState } from 'react'
import travelBuddy from '../assets/Images_1/logoImg.webp';
import '../styles/Navbar.css'
import { navbarData } from '../assets/data';

const Navbar = () => {
  const [activeToggleState, setActiveToggleState] = useState(false);

  !activeToggleState ? document.querySelector('body').style.overflowY='scroll':document.querySelector('body').style.overflowY='hidden'

  const handleToggleClick = (e) => {
    e.target.classList.toggle('active',);
    setActiveToggleState((prev) => !prev);
  }
  const handleLinkClick = () => {
    setActiveToggleState(false);
    document.querySelector('.toggle').classList.remove('active');
  }

  return (
    <nav className='flex_between_end'>
      <div className='nav__logo-container'>
        <img src={travelBuddy} alt='travel_buddy'  />
        <h4>Travel Buddy</h4>
      </div>
      <div className="nav__links-container flex_between_end">
        <aside className={`${activeToggleState ? 'activeToggle':""} flex_between_end`}>
        {navbarData.map(({ label, id }) => (
          <a className="p__bolder" key={label} href={id} onClick={handleLinkClick}>{label}</a>
          ))}
          </aside>
        <div className={`${activeToggleState ? 'activeToggle':""} flex_end_center`}>
        <button className="signup__btn">Sign Up</button>
        </div>
      </div>
   <div className="toggle" onClick={handleToggleClick}></div>
    </nav>
  )
}

export default Navbar