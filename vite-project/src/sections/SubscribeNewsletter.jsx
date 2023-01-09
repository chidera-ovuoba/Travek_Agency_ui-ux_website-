import { IoIosSend } from 'react-icons/io';
import { MdCancel, MdOutlineMailOutline } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';
import '../styles/SubscribeNewsletter.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


const SubscribeNewsletter = () => {

  const formRef = useRef(null);
  const notificationRef = useRef(null);
  const [notificationAnimate,setNotificationAnimate] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    if (formRef.current.email.value) {
      
      emailjs.sendForm('service_hvy0ngs', 'template_k5dcapq', formRef.current, '1O18528ZD7_k18VR-')
      .then((result) => {
        notificationRef.current.classList.add('message_sent');
        setNotificationAnimate(true)
        setTimeout(() => {
          notificationRef.current.classList.remove('message_sent');
          setNotificationAnimate(false)
        }, 3000)
      }, (error) => {
        notificationRef.current.classList.add('message_not_sent');
        setNotificationAnimate(true)
        setTimeout(() => {
          notificationRef.current.classList.remove('message_not_sent');
          setNotificationAnimate(false)
        }, 2000)
      });
    } 
      e.target.reset()
    };


  return (
    <section className='subscribeNewsletter__section'>
      <div className="subscribeNewsletter__container">
        <h4>Subscribe to get information, latest news and other interesting offers about Cobham</h4>
        <form className="input__wrapper" ref={formRef} onSubmit={sendEmail}>
          <div className='input__container'>
            <MdOutlineMailOutline/>
            <input type="email"  placeholder='Your Email' name='email'/>
          </div>
          <button type='submit' disabled={notificationAnimate}>Subscribe</button>
        </form>
        <div className="notification__icon" ref={notificationRef}>
          <IoIosSend />
          <MdCancel/>
          <AiOutlineCheck/>
        </div>
      </div>
    </section>
  )
}

export default SubscribeNewsletter