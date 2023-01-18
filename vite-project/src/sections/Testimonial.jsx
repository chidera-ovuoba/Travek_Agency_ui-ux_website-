import React, {useState} from 'react';
import '../styles/Testimonial.css';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import { testimonialData } from '../assets/data';




const Testimonial = () => {
  let [testimonialIndex, setTestimonialIndex] = useState(testimonialData.length);

  
  const handleUpClick = () => {
    document.querySelectorAll('.slider__icon').forEach((slide) => slide.classList.remove('activeSlide'));
    let testimonialContainer = document.querySelector(`.testimonial__card_wrapper:nth-of-type(${testimonialIndex})`);
    document.querySelector(`.slider__icon:nth-of-type(${testimonialIndex})`).classList.add('activeSlide')
    testimonialContainer?.classList.add('moveup');
      if (testimonialContainer.nextSibling?.classList.contains('moveup')) {
        testimonialContainer.nextSibling.classList.add('movetop')
      } else {
        
      }
    setTestimonialIndex(testimonialIndex - 1)

  }
  const handleDownClick = () => {
    document.querySelectorAll('.slider__icon').forEach((slide) => slide.classList.remove('activeSlide'));
    let testimonialContainer = document.querySelector(`.testimonial__card_wrapper:nth-of-type(${testimonialIndex + 1})`);
    testimonialContainer?.classList.remove('moveup');
    if (testimonialIndex + 1 >= testimonialData.length) {
      document.querySelectorAll(`.slider__icon`).forEach((slide)=>slide.classList.remove('activeSlide'))
    } else {
      document.querySelector(`.slider__icon:nth-of-type(${testimonialIndex + 1 === 1 ? 2 : testimonialIndex + 2 >= testimonialData.length + 1 ? testimonialData.length:testimonialIndex + 2})`).classList.add('activeSlide')
    }
      if (testimonialContainer.nextSibling?.classList.contains('movetop')) {
        testimonialContainer.nextSibling.classList.remove('movetop')
      } else {
        
      }
    setTestimonialIndex(testimonialIndex + 1)
  }


  return (
    <section className='testimonial__section flex_center' id='testimonial'>
      <div className='testimonial__content'>
      <div className='testimonial__content_header'>
      <h4>Testimonials</h4>
      <h2>What people say about Us. </h2>
        </div>

        <div className='slider__icon-container flex_end_center'>{testimonialData.map(({id}) => (<div data-index={id} key={id} className='slider__icon'/>))}</div>
      </div>
      <div className="testimonial__card_container-outer flex_end_center">
      <div className="testimonial__card_container-inner">
      {testimonialData.map(({alt,description,name,role,src,id}) => (
        <div className="testimonial__card_wrapper grid_center" key={id}>
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
        <div className="testimonial_buttons">
        <button disabled={testimonialIndex <= 0 ? true :false} onClick={handleUpClick}><MdArrowUpward/></button>
         <button disabled={testimonialIndex >= testimonialData.length ? true :false} onClick={handleDownClick}><MdArrowDownward/></button>
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