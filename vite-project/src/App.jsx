import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './sections/Header';
import Services from './sections/Services';
import Destinations from './sections/Destinations';
import BookATrip from './sections/BookATrip';
import Testimonial from './sections/Testimonial';
import Brands from './sections/Brands';
import SubscribeNewsletter from './sections/SubscribeNewsletter';
import Footer from './sections/Footer';
const App = () => {
  return (
    <div style={{background:'#fff'}}>
    <div className='header-wrapper'>
    <Navbar />
    <Header />
    </div>
    <Services />
    <Destinations/>
    <BookATrip/>
    <Testimonial/>
    <Brands/>
    <SubscribeNewsletter />
    <Footer/>
    </div>
    )
}

export default App