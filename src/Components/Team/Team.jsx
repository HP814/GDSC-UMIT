import React from 'react'
import './Team.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = ({id,theme,setTheme}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className='slider-w' id={id}>
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
    img: `/students/1.png`,
    designation: `Chapter Lead`,
    subpost: ``,
    url: `https://www.linkedin.com/in/mehwishqureshi/`,
  },
  {
    name: `Harshali Patil`,
    img: `/students/2.png`,
    designation: `Secretary`,
    subpost: `Web Developer`,
    url: `https://www.linkedin.com/in/harshalipatil080104/`,
  },
  {
    name: `Preksha Dhar`,
    img: `/students/3.png`,
    designation: `Head of Operation`,
    subpost: ``,
    url: `https://www.linkedin.com/in/preksha-dhar-b21a98200/`,
  },
  {
    name: `Neha Kulkarni`,
    img: `/students/4.png`,
    designation: `UI/UX Lead`,
    subpost:`Web Designer`,
    url:`https://www.linkedin.com/in/nehakulkarni11/`,
  },
  {
    name: `Arjoo Baghele`,
    img: `/students/4.png`,
    designation: `UI/UX Co-Lead`,
    subpost: `Web Developer`,
    url:`https://www.linkedin.com/in/arjoobaghele137/`,
  },
  {
    name: `Ira Mane`,
    img: `/students/11.png`,
    designation: `Content Stratergist`,
    subpost:`Web Developer`,
    url:`https://www.linkedin.com/in/ira-mane/`,
  },
  {
    name: `Avantika Yadav`,
    img: `/students/10.png`,
    designation: `Technical Lead`,
    subpost:`Web Developer`,
    url:`https://www.linkedin.com/in/avantika-yadav-16712b226/`,
  },
  {
    name: `Mansi Awari`,
    img: `/students/9.png`,
    designation: `Technical Co-Lead`,
    subpost: ``,
    url:`https://x.com/awari_mansi?t=eefZpSIQaLg2Oc4_8JqpPw&s=09`,
  },
  {
    name: `Mansi Gawade`,
    img: `/students/5.png`,
    designation: `PR & Marketing Lead`,
    subpost: ``,
    url:`https://www.linkedin.com/in/mansi-gawade-0387b41ba/`,
  },
  {
    name: `Riya Thakur`,
    img: `/students/6.png`,
    designation: `PR & Marketing Co-Lead`,
    subpost: ``,
    url:`https://www.linkedin.com/in/riya-thakur-a73758246/`,
  },
  {
    name: `Saakshi Raut`,
    img: `/students/7.png`,
    designation: `Sponsorship Lead`,
    subpost: ``,
    url:`https://www.linkedin.com/in/rautsaakshi/`,
  },
  {
    name: `Ritika Raut`,
    img: `/students/8.png`,
    designation: `Sponsorship Co-Lead`,
    subpost: ``,
    url:`https://www.linkedin.com/in/reetika-raut-07a55522b/`,
  },
]

export default Team