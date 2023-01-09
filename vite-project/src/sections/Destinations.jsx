import '../styles/Destinations.css';
import destinationImg_1 from '../assets/pexels-berk-ozdemir-3779816.jpg'
import destinationImg_2 from '../assets/pexels-louis-1530259.jpg'
import destinationImg_3 from '../assets/pexels-pixabay-64271.jpg';
import { FaPaperPlane,FaMoneyBillWave } from 'react-icons/fa';
import { MdAirplanemodeActive ,MdLocationOn} from 'react-icons/md';

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
    title: 'Paris, France',
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
      <div className="custom-shape-divider-top-1673115049">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
        fill='#399adf'>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
</div>
      <div className="custom-shape-divider-top-1673115039">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
        fill='#399adf'>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
</div>
    </section>
  )
}

export default Destinations