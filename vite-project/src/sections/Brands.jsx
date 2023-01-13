import '../styles/Brands.css';
import { BrandsData } from '../assets/data';

const Brands = () => {
  return (
    <div className='brand__section'>
      {
        BrandsData.map(({ id, img }) => (
          <div className="brand__img-container" key={id}>
            <img src={img}  alt='brand__image' className='full_width-height'/>
          </div>
        ))
    }
    </div>
  )
}

export default Brands