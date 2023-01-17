import React from 'react';
import bookATripImage from '../assets/Images_1/bookATripImageBackground.webp';
import '../styles/BookATrip.css';
import { BookATripContentData } from '../assets/data';

const BookATrip = () => {
  return (
    <section className='bookATrip__section flex_center'>
      <div className='bookATrip__content'>
      <div className='bookATrip__content_header'>
      <h4>Easy and Fast</h4>
      <h2>Book your next trip in 3 easy steps </h2>
        </div>
        <div className="bookATrip__content_main">
          {
            BookATripContentData.map(({id,img,title}) => (
              <div className="bookATrip__content_main-wrapper flex_center" key={id}>
                <img src={img} alt={title}/>
                <article>
                  <h6>{title}</h6>
                  <p className='philosopher_black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis dolore quae libero ex adipisci atque.</p>
                </article>
              </div>
            ))
        }
        </div>
      </div>
      <div className="bookATrip__image_container flex_center">
      <img src={bookATripImage} alt="bookATrip__image" />
      <div className="blurry_background"/>
      </div>
    </section>
  )
}

export default BookATrip