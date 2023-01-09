import React, { useEffect,useRef} from 'react';
import testimonial__1 from '../assets/ec98824ea2dacb618e95f750be66e52b.png';
import '../styles/Testimonial.css';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';

const testimonialData = [
  {
    id: 1,
    name: 'Mike taylor',
    role: 'Lahore, Pakistan',
    description: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    alt: 'testimonial__1',
    src:testimonial__1
  },
  {
    id: 2,
    name: 'Mike taylor',
    role: 'Lahore, Pakistan',
    description: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    alt: 'testimonial__1',
    src:testimonial__1
  },
  {
    id: 3,
    name: 'Mike taylor',
    role: 'Lahore, Pakistan',
    description: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    alt: 'testimonial__1',
    src:testimonial__1
  },
  {
    id: 4,
    name: 'Mike taylor',
    role: 'Lahore, Pakistan',
    description: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    alt: 'testimonial__1',
    src:testimonial__1
  },
  {
    id: 5,
    name: 'Mike taylor',
    role: 'Lahore, Pakistan',
    description: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    alt: 'testimonial__1',
    src:testimonial__1
  },
  {
    id: 6,
    name: 'Mike taylor',
    role: 'Lahore, Pakistan',
    description: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
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
            <p><span>“</span>{description}</p>
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
       <div className="custom-shape-divider-top-1673115049">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
        fill='#9c3cb4'>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
</div>
      <div className="custom-shape-divider-top-1673115039">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
        fill='#9c3cb4'>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
</div>
      </section>
  )
}

export default Testimonial