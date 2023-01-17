import '../styles/Destinations.css';
import { FaMoneyBillWave } from 'react-icons/fa';
import { MdAirplanemodeActive ,MdLocationOn} from 'react-icons/md';
import { destinationData } from '../assets/data';
 

const Destinations = () => {
 
  return (
    <section className='destination__section grid_center' id='destinations'>
      <div className='destination__section_header'>
      <h4 className='Acme_white'>Top Selling</h4>
      <h2>Top Destinations </h2>
      </div>
        <div className="destination__section_cards flex_center">
        {destinationData.map(({id,img,price,title,time}) => <div className='destination__card' key={id}>
          <img className='destinaton__card_img full_width-height' src={img} alt={title} width='100%' height='100%' />
          <div className='ribbon grid_center'></div>
            <div className="destination__content absolute_center">
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