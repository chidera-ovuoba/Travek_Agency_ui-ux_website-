import React from 'react';
import bookATripImage from '../assets/Image (2).png';
import '../styles/BookATrip.css';
import contentImage_1 from '../assets/Group 12.png'
import contentImage_2 from '../assets/Group 7.png'
import contentImage_3 from '../assets/Group 11.png'

const BookATripContentData=[
  {
    id:11,
    title: "Make Payment",
    img: contentImage_1
  },
  {
    id:12,
    title: "Choose Destination",
    img: contentImage_2
  },
  {
    id:13,
    title: "Reach Airport on Selected Date",
    img: contentImage_3
  }
]
const BookATrip = () => {
  return (
    <section className='bookATrip__section'>
      <div className='bookATrip__content'>
      <div className='bookATrip__content_header'>
      <h4>Easy and Fast</h4>
      <h2>Book your next trip in 3 easy steps </h2>
        </div>
        <div className="bookATrip__content_main">
          {
            BookATripContentData.map(({id,img,title}) => (
              <div className="bookATrip__content_main-wrapper" key={id}>
                <img src={img} alt={title}/>
                <article>
                  <h6>{title}</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis dolore quae libero ex adipisci atque.</p>
                </article>
              </div>
            ))
        }
        </div>
      </div>
      <div className="bookATrip__image_container">
      <img src={bookATripImage} alt="bookATrip__image" />
      <div className="blurry_background"/>
      </div>
    </section>
  )
}

export default BookATrip