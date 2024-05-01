import React from 'react';
import './Blogs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import about_light from '../../assets/about-day.jpeg';
import about_dark from '../../assets/about-night.jpg';

const Blogs = ({ id, theme, setTheme }) => {
  const element = <FontAwesomeIcon icon={faMinus} className='iconStyle' />;

  return (
    <div className='abt-c' id={id}>
      <div className='heading2'>{element} Blogs</div>
      <div className='about-container'>
        <div className="left-frame">
          <img src={theme === 'light' ? about_light : about_dark} alt="Blog" className="blog-image" />
        </div>
        <div className="content-section">
          <p style={{ fontFamily: "Sedan", fontWeight: 'bold' }}>Stay connected with the latest in tech and innovation! Dive into GDSC UMIT's monthly blog releases on Medium and explore a world of ideas and insights. Elevate your tech journey and be part of our dynamic community.</p>
          <a href="https://medium.com/dsc-umit" target="_blank"><button className='join-btn'>Read more</button></a>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
