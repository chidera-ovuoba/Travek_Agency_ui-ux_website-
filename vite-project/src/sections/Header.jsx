import React, { useState } from 'react'
import '../styles/Header.css';
import BannerImg from '../assets/Image.png';
import {MdPlayArrow,MdCancel} from 'react-icons/md';
const Header = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <header className='grid_center'>
      <div className="header__content-container grid_start">
      <h5 className='uppercase_Rowdies_blue'>Best Destinations around the world</h5>
      <h1 className='capitalize_Acme_purple'>Travel, enjoy and live a new and full life</h1>
      <p className='philosopher_black'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
      <div className="cta__btn-group">
      <button className='Acme_white'>Find out more</button>
      <div className='play__btn-group flex_center'>
      <div className='play__btn-container_circle grid_center' onClick={()=>setOpenVideo(true)} >
      <MdPlayArrow/>
        </div>
        <p className='Acme_black'>Play Demo</p>
        </div>
      </div>
      </div>
      <div className="header__img-container">
        <img src={BannerImg} alt='Banner' />
      </div>
      {openVideo && 
        <div className="iframe_youtube full_width-height grid_center fixed_center">
        <MdCancel onClick={()=>setOpenVideo(false)} />    
       <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY">
       </iframe>
       </div> 
      }
    </header>
  )
}

export default Header