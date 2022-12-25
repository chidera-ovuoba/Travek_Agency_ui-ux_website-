import '../styles/ServiceCard.css';

const ServiceCard = ({img,description,title}) => {
  return (
    <div className='service__card-wrapper'>
      <div className='service__card-container'>
        <img src={img} alt={title} />
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <div/>
    </div>
  )
}

export default ServiceCard