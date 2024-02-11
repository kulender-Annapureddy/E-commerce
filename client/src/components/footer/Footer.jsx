import React from 'react'
import './footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook,FaWhatsapp  } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
     <div className='footer-logo'>
        <h1>JUDE</h1>
        {/* <hr /> */}
     </div>
     <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
     </ul>
     <div className='footer-social'>
        <div className='icon-con'>
            <div className='icons-soc'>
                <FaInstagram />
            </div>
            <div className='icons-soc' >
                <FaFacebook />
            </div>
            <div className='icons-soc'>
                <FaWhatsapp />
            </div>

        </div>
     </div>
     <div className='copy-right'>
        <hr />
        <p>Copy right @2023 - All Rights Reserved </p>
     </div>
    </div>
  )
}

export default Footer
