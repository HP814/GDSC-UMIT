import React from 'react'
import './Testimonials.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'




const Testimonials = ({id,theme,setTheme}) => {
  
  const element = <FontAwesomeIcon icon={faMinus} className='iconStyle'/>
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  return (
    <div className='slider-w1' id={id}>
        <div className='heading1'>{element}Testimonials</div>
        <div className='mt1'>
        <Slider {...settings}>
          {data.map((d)=>(
              <div className='card-slider1'>
                {/* <div className='card-img1'>
                  <img src={d.img} alt="" className='image1'/>
                </div> */}
                <div className='desc1'>
                  <p className='name1'>{<a href={d.url} target='blank' className='slink' style={{fontFamily:"Sedan"}}>{d.name}</a>}</p>
                  <p className='designation1'>{d.designation}</p>
                  <p className='review'>{d.review}</p>
                </div>  
              </div>
            ))
          }
        </Slider>
        </div>
    </div>
  )
}

const data = [
  {
    name: `Mehwish Qureshi`,
    img: `/students/harshali.jpeg`,
    designation: `Chapter Lead`,
    review: `A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.`,
  },
  {
    name: `Mehwish Qureshi`,
    img: `/students/harshali.jpeg`,
    designation: `Chapter Lead`,
    review: `A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.`,
  },
  {
    name: `Mehwish Qureshi`,
    img: `/students/harshali.jpeg`,
    designation: `Chapter Lead`,
    review: `A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.`,
  },
  {
    name: `Mehwish Qureshi`,
    img: `/students/harshali.jpeg`,
    designation: `Chapter Lead`,
    review: `A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.`,
  },
  {
    name: `Mehwish Qureshi`,
    img: `/students/harshali.jpeg`,
    designation: `Chapter Lead`,
    review: `A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.`,
  },
  {
    name: `Mehwish Qureshi`,
    img: `/students/harshali.jpeg`,
    designation: `Chapter Lead`,
    review: `A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.`,
  },
]

export default Testimonials;