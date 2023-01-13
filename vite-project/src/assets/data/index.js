import service_1 from '../Images/serviceSatelite.png'
import service_2 from '../Images/servicePlane.png'
import service_3 from '../Images/serviceMicrophone.png'
import service_4 from '../Images/serviceGear.png';
import destinationImg_1 from '../Images/Japan.jpg'
import destinationImg_2 from '../Images/NewYork.jpg'
import destinationImg_3 from '../Images/Paris.jpg';
import contentImage_1 from '../Images/bookATripContentImg_1.png'
import contentImage_2 from '../Images/bookATripContentImg_2.png'
import contentImage_3 from '../Images/bookATripContentImg_3.png'
import testimonial__1 from '../Images/ec98824ea2dacb618e95f750be66e52b.png';
import Brand_1 from '../Images/brand_1.png';
import Brand_2 from '../Images/brand_2.png';
import Brand_3 from '../Images/brand_3.png';
import Brand_4 from '../Images/brand_4.png';
import Brand_5 from '../Images/brand_5.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


export const navbarData = [
    {
        label: 'Home',
        id: '#home'
    },
    {
        label: 'Services',
        id: '#services'
    },
    {
        label: 'Destinations',
        id: '#destinations'
    },
    {
        label: 'Testimonial',
        id: '#testimonial'
    },
    {
        label: 'Newsletter',
        id: '#newsletter'
    }
];



export const cardData = [
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



export const destinationData = [
  {
    id:1,
    title: 'Kyoto, Japan',
    price: '$5.42k',
    time:'10 Days Trip',
    img:destinationImg_1,
  },
  {
    id:2,
    title: 'Paris, France',
    price: '$15k',
    time:'14 Days Trip',
    img:destinationImg_2
  },
  {
    id:3,
    title: 'New York, USA',
    price: '$4.2k',
    time:"12 Days Trip",
    img:destinationImg_3
  },
]


export const BookATripContentData = [
    {
        id: 11,
        title: "Make Payment",
        img: contentImage_1
    },
    {
        id: 12,
        title: "Choose Destination",
        img: contentImage_2
    },
    {
        id: 13,
        title: "Reach Airport on Selected Date",
        img: contentImage_3
    }
];

export const testimonialData = [
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

 export const BrandsData = [
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
 export const footerData = [
  {
    id: 1,
    title: 'Company',
    content:['About','Careers','Mobile']
   }, 
  {
    id: 2,
    title: 'Contact',
    content:['Help/FAQ','Press','Affilates']
   },  
  {
    id: 3,
    title: 'More',
    content:['Airlinefees','Airline','Low fare tips']
   }  
]
export const socials = [
  {
    icon: <FaFacebookF />,
    id:1
  },
  {
    icon: <FaInstagram />,
    id:2
  },
  {
    icon: <FaTwitter />,
    id:3
  },
]