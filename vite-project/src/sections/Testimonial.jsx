import React, { useEffect,useRef} from 'react';
import testimonial__1 from '../assets/ec98824ea2dacb618e95f750be66e52b.png';
import '../styles/Testimonial.css';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';

const testimonialData = [
  {
    id: 1,
    name: 'Mike taylor',
    role: 'Lahore, Pakistan',
    description: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
    alt: 'testimonial__1',
    src:testimonial__1
  },
  {
    id: 2,
    name: 'Mike taylor',
    role: 'Lahore, Pakistan',
    description: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
    alt: 'testimonial__1',
    src:testimonial__1
  },
  {
    id: 3,
    name: 'Mike taylor',
    role: 'Lahore, Pakistan',
    description: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
    alt: 'testimonial__1',
    src:testimonial__1
  },
  {
    id: 4,
    name: 'Mike taylor',
    role: 'Lahore, Pakistan',
    description: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
    alt: 'testimonial__1',
    src:testimonial__1
  },
  {
    id: 5,
    name: 'Mike taylor',
    role: 'Lahore, Pakistan',
    description: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
    alt: 'testimonial__1',
    src:testimonial__1
  },
  {
    id: 6,
    name: 'Mike taylor',
    role: 'Lahore, Pakistan',
    description: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
    alt: 'testimonial__1',
    src:testimonial__1
  },
]


const Testimonial = () => {
  const testimonialRef = useRef(null);
  const buttonRef = useRef(null);
  const sliderRef = useRef(null);  
  useEffect(() => {
    let testimonialIndex = testimonialData.length;
    buttonRef.current.children[0].addEventListener('click', () => {
      sliderRef.current.querySelectorAll(`div`).forEach((slide)=>slide.classList.remove('activeSlide'))
      testimonialIndex -= 1;
      if (testimonialIndex < 0) {
        testimonialIndex = 0
      }
       if (testimonialIndex >= testimonialData.length) {
          testimonialIndex = testimonialData.length
      }
      let testimonialContainer = testimonialRef.current.querySelector(`.testimonial__card_wrapper:nth-of-type(${testimonialIndex + 1})`);
      sliderRef.current.querySelector(`div:nth-of-type(${testimonialIndex + 1})`).classList.add('activeSlide')
      if (testimonialContainer.nextSibling?.classList.contains('moveup')) {
        testimonialContainer.nextSibling.classList.add('movetop')
      } else {
        
      }
          testimonialContainer?.classList.add('moveup');
              
   })
    buttonRef.current.children[1].addEventListener('click', () => {
     sliderRef.current.querySelectorAll(`div`).forEach((slide)=>slide.classList.remove('activeSlide'))
     testimonialIndex += 1;
     if (testimonialIndex >= testimonialData.length) {
       testimonialIndex = testimonialData.length
      }
      if (testimonialIndex <= 0) {
        testimonialIndex = 1
      }
     let testimonialContainer = testimonialRef.current.querySelector(`.testimonial__card_wrapper:nth-of-type(${testimonialIndex})`)

       sliderRef.current.querySelector(`div:nth-of-type(${testimonialIndex + 1 === 7 ? 6 : testimonialIndex + 1})`).classList.add('activeSlide')
       if (testimonialIndex + 1 === 7) {
         sliderRef.current.querySelectorAll(`div`).forEach((slide)=>slide.classList.remove('activeSlide'))
         }
      if (testimonialContainer.nextSibling?.classList.contains('movetop')) {
        testimonialContainer.nextSibling.classList.remove('movetop')
      } else {
        
      }
      testimonialContainer?.classList.remove('moveup');
      
   })

  }, [])

  return (
    <section className='testimonial__section'>
      <div className='testimonial__content'>
      <div className='testimonial__content_header'>
      <h4>Testimonials</h4>
      <h2>What people say about Us. </h2>
        </div>

        <div className='slider__icon-container' ref={sliderRef}>{testimonialData.map(({id}) => (<div data-index={id} key={id} />))}</div>
      </div>
      <div className="testimonial__card_container-outer">
      <div className="testimonial__card_container-inner" ref={testimonialRef}>
      {testimonialData.map(({alt,description,name,role,src,id}) => (
        <div className="testimonial__card_wrapper" key={id}>
        <div className="testimonial__card">
        <img src={src} alt={alt} />
            <p>{description}</p>
            <article className="testimonial__person">
              <h6>{name}</h6>
              <span>{role}</span>
            </article>
          </div>
        </div>
        ))}
        </div>
        <div className="testimonial_buttons" ref={buttonRef}>
        <span><MdArrowUpward/></span>
         <span><MdArrowDownward/></span>
        </div>
        </div>
      </section>
  )
}

export default Testimonial