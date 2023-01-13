import '../styles/ServiceCard.css';

const ServiceCard = ({img,description,title}) => {
  return (
    <div className='service__card-wrapper grid_center'>
      <div className='service__card-container grid_center'>
        <div className='service__card-container_image'>
        <img src={img} alt={title} />
          <span />
          </div>
        <h5>{title}</h5>
        <p className='philosopher_black'>{description}</p>
      </div>
      <div/>
    </div>
  )
}

export default ServiceCard