import React from 'react'
import './Whatsapp.css'
import whatsappIcon from '../../assets/whatsapp-icon.png'

const Whatsapp = () => {
  return (
    <div className="whatsappicon">
        <a href="https://api.whatsapp.com/send?phone=9653189745" target='/blank'>
             <img src={whatsappIcon} alt="WhatsApp Icon" className='whatsappimg'/>
        </a>
    </div>
  )
}

export default Whatsapp
