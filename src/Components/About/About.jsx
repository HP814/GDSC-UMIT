import React from 'react'
import './About.css'
import about_light from '../../assets/about-day.jpeg'
import about_dark from '../../assets/about-night.jpg'

const About = ({id,theme,setTheme}) => {

  return (
        <div className='abt-c' id={id}>
            <div className='heading2'>About Us</div>
            <div className='about-container'>
            <div className="content-section">
               <p>We're the Google Developer Student Club at Usha Mittal Institute of Technology (UMIT). Our mission is to empower students with Google technologies through workshops, hackathons, and tech talks. Join us to learn, innovate, and connect with like-minded peers in the tech community!</p>
               <a href="https://gdsc.community.dev/usha-mittal-institute-of-technology-mumbai/" target="_blank"><button className='join-btn'>Join us!</button></a>
            </div>
            <div className="image-section">
               <img src={theme=='light' ? about_light : about_dark} alt="About Us" className='abt-image'/>
            </div>
            </div>
        </div>
  )
}

export default About