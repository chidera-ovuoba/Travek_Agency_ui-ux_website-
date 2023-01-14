import React from 'react';
import playStore from '../assets/Images/Play Store.png';
import googlePlay from '../assets/Images/Google Play.png';
import '../styles/Footer.css';
import { footerData,socials } from '../assets/data';

const Footer = () => {
  return (
    <section className='footer__container grid_center'>
    <div className="footer__wrapper">
        <div className="footer__logo-container">
          <h3>Travel Buddy</h3>
          <span>Book your trip in minute, get full Control for much longer.</span>
        </div>
        <div className="footer__content_container">
          {
            footerData.map(({content,id,title}) => (
              <div className="footer__content-main" key={id}>
                <h5>{title}</h5>
                <article>
                {content.map((item) => (
                  <p key={item}>{item}</p>
                  ))}
                  </article>
                  </div>
          ))  
          }
        </div>
        <div className="footer__socials grid_center">
          <div className="socials_main">{ 
            socials.map(({ id,icon }) => (
              <span className='grid_center' key={id}>{icon()}</span>
          ))
          }</div>
          <p>Discover our app</p>
          <article>
          <img src={googlePlay} alt="google_play" />
          <img src={playStore} alt="play_store" />
          </article>
        </div>
    </div>
      <span>All rights reserved to @travelbuddy</span>
    </section>
  )
}

export default Footer