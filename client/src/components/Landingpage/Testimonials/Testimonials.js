import React from 'react'
import { BiHealth } from "react-icons/bi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import "./Testimonials.css"

function Testimonials() {
  return (
    <div className='conteinerSelectonBlok'>
      <div className='containerTestimonials'>
        <i className='iconoLanding'><BiHealth/></i>
        <h3 className='subTitleLanding'>Testimonios</h3>
        <h1 className='titlesLandin'><span className='titlesLandingOne'>Tu opinion </span>es importante para nosotros</h1>
        <p className='parrafoLanding'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <div className='containerCardTesti'>
          <div className='cardTestimonials'>
            <i className='quotationMarksOne'><RiDoubleQuotesL/></i>
            <div className='containerTexTestimonial'>
              <h1 className='nameTestimonial'>Jhon Doe</h1>
              <p className='texTestimonial'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <i className='quotationMarksTwo'><RiDoubleQuotesR/></i>
            <div>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStarOutline/></i>
            </div>
          </div>
          <div className='cardTestimonials'>
            <i className='quotationMarksOne'><RiDoubleQuotesL/></i>
            <div className='containerTexTestimonial'>
              <h1 className='nameTestimonial'>Jhon Doe</h1>
              <p className='texTestimonial'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <i className='quotationMarksTwo'><RiDoubleQuotesR/></i>
            <div>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStar/></i>
            </div>
          </div>
          <div className='cardTestimonials'>
            <i className='quotationMarksOne'><RiDoubleQuotesL/></i>
            <div className='containerTexTestimonial'>
              <h1 className='nameTestimonial'>Jhon Doe</h1>
              <p className='texTestimonial'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <i className='quotationMarksTwo'><RiDoubleQuotesR/></i>
            <div>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStarOutline/></i>
              <i className='startTestimonial'><IoMdStarOutline/></i>
            </div>
          </div>
          <div className='cardTestimonials'>
            <i className='quotationMarksOne'><RiDoubleQuotesL/></i>
            <div className='containerTexTestimonial'>
              <h1 className='nameTestimonial'>Jhon Doe</h1>
              <p className='texTestimonial'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <i className='quotationMarksTwo'><RiDoubleQuotesR/></i>
            <div>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStar/></i>
              <i className='startTestimonial'><IoMdStar/></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
