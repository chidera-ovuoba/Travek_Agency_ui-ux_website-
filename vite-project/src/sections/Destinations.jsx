import '../styles/Destinations.css';
import destinationImg_1 from '../assets/pexels-berk-ozdemir-3779816.jpg'
import destinationImg_2 from '../assets/pexels-louis-1530259.jpg'
import destinationImg_3 from '../assets/pexels-pixabay-64271.jpg';
import { IoIosSend } from 'react-icons/io';
import { FaPaperPlane,FaMoneyBillWave } from 'react-icons/fa';
import { MdAirplanemodeActive ,MdLocationOn} from 'react-icons/md';
import { useEffect, useRef } from 'react';

const destinationData = [
  {
    id:1,
    title: 'Kyoto, Japan',
    price: '$5.42k',
    time:'10 Days Trip',
    img:destinationImg_1,
  },
  {
    id:2,
    title: 'Paris,France',
    price: '$15k',
    time:'14 Days Trip',
    img:destinationImg_2
  },
  {
    id:3,
    title: 'New York, USA',
    price: '$4.2k',
    time:"12 Days Trip",
    img:destinationImg_3
  },
]

const Destinations = () => {
 
  return (
    <section className='destination__section'>
      <div className='destination__section_header'>
      <h4>Top Selling</h4>
      <h2>Top Destinations </h2>
      </div>
        <div className="destination__section_cards">
        {destinationData.map(({id,img,price,title,time}) => <div className='destination__card' key={id}>
          <img className='destinaton__card_img' src={img} alt={title} />
          <div className='ribbon'></div>
            <div className="destination__content">
                <p><span><MdLocationOn/></span>{title}</p>
                <p><span><FaMoneyBillWave/></span>{price}</p>
                <p><span><MdAirplanemodeActive/></span>{time}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Destinations