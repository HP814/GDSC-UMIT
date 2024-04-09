import React from 'react'
import './Team.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = ({theme,setTheme}) => {
  const toggle_mode = () =>{
    theme=='light' ? setTheme('dark') : setTheme('light');
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className='slider-w'>
        <div className='heading'><h1>Our Team</h1></div>
        <div className='mt'>
        <Slider {...settings}>
          {data.map((d)=>(
              <div className='card-slider'>
                <div className='card-img'>
                  <img src={d.img} alt="" className='image'/>
                </div>
                <div className='desc'>
                  <p className='name'>{<a href={d.url} target='blank'>{d.name}</a>}</p>
                  <p className='designation'>{d.designation}</p>
                  <p className='subpost'>{d.subpost}</p>
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
    subpost: ``,
  },
  {
    name: `Harshali Patil`,
    img: `/students/harshali.jpeg`,
    designation: `Secretary`,
    subpost: `Web Developer`,
    url: `https://www.linkedin.com/in/harshalipatil080104/`,
  },
  {
    name: `Preksha Dhar`,
    img: `/students/harshali.jpeg`,
    designation: `Head of Operation`,
    subpost: ``,
  },
  {
    name: `Neha Kulkarni`,
    img: `/students/harshali.jpeg`,
    designation: `UI/UX Lead`,
    subpost:`Web Designer`,
  },
  {
    name: `Arjoo Baghele`,
    img: `/students/harshali.jpeg`,
    designation: `UI/UX Co-Lead`,
    subpost: `Web Developer`,
  },
  {
    name: `Ira Mane`,
    img: `/students/harshali.jpeg`,
    designation: `Content Stratergist`,
    subpost:`Web Developer`,
  },
  {
    name: `Avantika Yadav`,
    img: `/students/harshali.jpeg`,
    designation: `Technical Lead`,
    subpost:`Web Developer`,
    url:`https://www.linkedin.com/in/avantika-yadav-16712b226/`,
  },
  {
    name: `Mansi Awari`,
    img: `/students/harshali.jpeg`,
    designation: `Technical Co-Lead`,
    subpost: ``,
  },
  {
    name: `Mansi Gawade`,
    img: `/students/harshali.jpeg`,
    designation: `PR & Marketing Lead`,
    subpost: ``,
  },
  {
    name: `Riya Thakur`,
    img: `/students/harshali.jpeg`,
    designation: `PR & Marketing Co-Lead`,
    subpost: ``,
  },
  {
    name: `Saakshi Raut`,
    img: `/students/harshali.jpeg`,
    designation: `Sponsorship Lead`,
    subpost: ``,
  },
  {
    name: `Ritika Raut`,
    img: `/students/harshali.jpeg`,
    designation: `Sponsorship Co-Lead`,
    subpost: ``,
  },
]

export default Team