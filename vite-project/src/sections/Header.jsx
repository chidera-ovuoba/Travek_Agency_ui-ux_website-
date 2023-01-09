import React, { useState } from 'react'
import '../styles/Header.css';
import BannerImg from '../assets/Image.png';
import {MdPlayArrow,MdCancel} from 'react-icons/md';
const Header = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <header>
      <div className="header__content-container">
      <h5>Best Destinations around the world</h5>
      <h1>Travel, enjoy and live a new and full life</h1>
      <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
      <div className="cta__btn-group">
      <button>Find out more</button>
      <div className='play__btn-group'>
      <div className='play__btn-container_circle' onClick={()=>setOpenVideo(true)} >
      <MdPlayArrow/>
        </div>
        <p>Play Demo</p>
        </div>
      </div>
      </div>
      <div className="header__img-container">
        <img src={BannerImg} alt='Banner' />
      </div>
      {openVideo && 
        <div className="iframe_youtube">
        <MdCancel onClick={()=>setOpenVideo(false)} />    
       <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY">
       </iframe>
       </div> 
      }
    </header>
  )
}

export default Header