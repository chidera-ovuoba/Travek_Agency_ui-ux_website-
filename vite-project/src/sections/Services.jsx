import React from 'react'
import '../styles/services.css';
import ServiceCard from '../components/ServiceCard';
import service_1 from '../assets/Group 48.png'
import service_2 from '../assets/Group 51.png'
import service_3 from '../assets/Group 49.png'
import service_4 from '../assets/Group 50.png'

const cardData = [
  {
    id:1,
    title: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it.',
    img:service_1
  },
  {
    id:2,
    title: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west hard for the.',
    img:service_2
  },
  {
    id:3,
    title: 'Local Events',
    description: 'Barton vanity itself do in it. Preferd to men it engrossed listening. ',
    img:service_3
  },
  {
    id:4,
    title: 'Customization',
    description: 'We deliver outsourced aviation services formilitary customers',
    img:service_4
  },
]
const Services = () => {
  return (
    <section className='services__section'>
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