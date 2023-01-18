import React from 'react'
import '../styles/services.css';
import ServiceCard from '../components/ServiceCard';
import { cardData } from '../assets/data';


const Services = () => {
  return (
    <section className='services__section grid_center' id='services'>
      <div className='services__section_header'>
      <h4>CATEGORY</h4>
        <h2>We Offer Best Services</h2>
        
      </div>
      <div className="services__section_cards">
        {cardData.map((card) => <ServiceCard {...card} key={card.id} />)}
      </div>

    </section>
  )
}

export default Services