import React from 'react'
import './index.css'
import { FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
function Footer() {
  return (
    <div className='footer'>
      <div className='footerDivision'>
        <div className='footerTextHeading'>
          Find Your
          <br />
          Mental
          <br />
          Peace!
        </div>
        <div className='footerTextSubheading'>
          Search • Find • Elevate
        </div>
      </div>
      <div className='footerDivision'>
        <div className='footerTextHeading'>
          Company
        </div>
        <div className='footerTextSubheading'>
          About Us
          <br />
          Terms and Conditions
          <br />
          Privacy Policy
          <br />
          FAQ
        </div>
      </div>
      <div className='footerDivision'>
        <div className='footerTextHeading'>
          Contact Us
        </div>
        <div className='footerTextSubheading'>
          wecare@gmail.com
          <br />
          MIT Manipal
          <br />
          +91 8591235483
        </div>
      </div>
      <div className='footerDivision'>
        <div className='footerTextHeading'>
          Follow Us On
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left'}}>
        <FaTwitterSquare className='footerIcon' size={'2rem'} />
        <FaInstagramSquare className='footerIcon' size={'2rem'} />
        <FaLinkedin className='footerIcon' size={'2rem'} />
        </div>
        
      </div>
    </div>
  )
}
export default Footer