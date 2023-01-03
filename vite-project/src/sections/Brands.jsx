import '../styles/Brands.css';
import Brand_1 from '../assets/image 27.png';
import Brand_2 from '../assets/image 28.png';
import Brand_3 from '../assets/image 29.png';
import Brand_4 from '../assets/image 30.png';
import Brand_5 from '../assets/image 31.png';

const BrandsData = [
  {
    id: 1,
    img:Brand_1
  },
  {
    id: 2,
    img:Brand_2
  },
  {
    id: 3,
    img:Brand_3
  },
  {
    id: 4,
    img:Brand_4
  },
  {
    id: 5,
    img:Brand_5
  }
]
const Brands = () => {
  return (
    <div className='brand__section'>
      {
        BrandsData.map(({ id, img }) => (
          <div className="brand__img-container" key={id}>
            <img src={img}  alt='brand__image'/>
          </div>
        ))
    }
    </div>
  )
}

export default Brands