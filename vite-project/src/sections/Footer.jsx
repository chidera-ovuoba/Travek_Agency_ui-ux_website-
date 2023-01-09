import React from 'react';
import playStore from '../assets/Play Store.png';
import googlePlay from '../assets/Google Play.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

const footerData = [
  {
    id: 1,
    title: 'Company',
    content:['About','Careers','Mobile']
   }, 
  {
    id: 2,
    title: 'Contact',
    content:['Help/FAQ','Press','Affilates']
   },  
  {
    id: 3,
    title: 'More',
    content:['Airlinefees','Airline','Low fare tips']
   }  
]
const socials = [
  {
    icon: <FaFacebookF />,
    id:1
  },
  {
    icon: <FaInstagram />,
    id:2
  },
  {
    icon: <FaTwitter />,
    id:3
  },
]
const Footer = () => {
  return (
    <div className='footer__container'>
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
        <div className="footer__socials">
          <div className="socials_main">{ 
            socials.map(({ id,icon }) => (
              <span key={id}>{icon}</span>
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
    </div>
  )
}

export default Footer