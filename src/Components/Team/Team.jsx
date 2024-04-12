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
        <div className='heading'>Our Team</div>
        <div className='mt'>
        <Slider {...settings}>
          {data.map((d)=>(
              <div className='card-slider'>
                <div className='card-img'>
                  <img src={d.img} alt="" className='image'/>
                </div>
                <div className='desc'>
                  <p className='name'>{<a href={d.url} target='blank' className='tlink'>{d.name}</a>}</p>
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
    url: `https://www.linkedin.com/in/mehwishqureshi/`,
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
    url: `https://www.linkedin.com/in/preksha-dhar-b21a98200/`,
  },
  {
    name: `Neha Kulkarni`,
    img: `/students/harshali.jpeg`,
    designation: `UI/UX Lead`,
    subpost:`Web Designer`,
    url:`https://www.linkedin.com/in/nehakulkarni11/`,
  },
  {
    name: `Arjoo Baghele`,
    img: `/students/harshali.jpeg`,
    designation: `UI/UX Co-Lead`,
    subpost: `Web Developer`,
    url:`https://www.linkedin.com/in/arjoobaghele137/`,
  },
  {
    name: `Ira Mane`,
    img: `/students/harshali.jpeg`,
    designation: `Content Stratergist`,
    subpost:`Web Developer`,
    url:`https://www.linkedin.com/in/ira-mane/`,
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
    url:`https://x.com/awari_mansi?t=eefZpSIQaLg2Oc4_8JqpPw&s=09`,
  },
  {
    name: `Mansi Gawade`,
    img: `/students/harshali.jpeg`,
    designation: `PR & Marketing Lead`,
    subpost: ``,
    url:`https://www.linkedin.com/in/mansi-gawade-0387b41ba/`,
  },
  {
    name: `Riya Thakur`,
    img: `/students/harshali.jpeg`,
    designation: `PR & Marketing Co-Lead`,
    subpost: ``,
    url:`https://www.linkedin.com/in/riya-thakur-a73758246/`,
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