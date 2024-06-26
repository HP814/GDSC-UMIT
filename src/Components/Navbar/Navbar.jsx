import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-day.png' 
import logo_dark from '../../assets/logo-night.png' 
import toggle_light from '../../assets/night.png' 
import toggle_dark from '../../assets/day.png' 


const Navbar = ({theme,setTheme}) => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const toggle_mode = () =>{
        theme=='light' ? setTheme('dark') : setTheme('light');
    }



    return (
    <div className='navbar'>
        <a href="https://gdsc.community.dev/usha-mittal-institute-of-technology-mumbai/" target="_blank"><img src={theme=='light' ? logo_light : logo_dark} alt="" className='logo'/></a>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li onClick={() => scrollToSection('team')}>Team</li>
            <li>Events</li>
            <li>Resources</li>
            <li onClick={() => scrollToSection('blogs')}>Blogs</li>
            <li onClick={() => scrollToSection('contacts')}>Contacts</li>
        </ul>

        <img onClick={()=>{toggle_mode()}} src={theme=='light' ? toggle_light : toggle_dark} alt="" className='toggle-icon'/>
    </div>
  )
}

export default Navbar