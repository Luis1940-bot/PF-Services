import React from 'react'
import { FaHeartbeat } from "react-icons/fa";
import servicesImg1 from "./imgServices/servicesImg1.png"
import servicesImg2 from "./imgServices/servicesImg2.png"
import servicesImg3 from "./imgServices/servicesImg3.png"
import { Link } from 'react-router-dom';
import "./Services.css"

function Services() {
  return (
    <div className='conteinerSelectonBlok'>
      <div className='containerHorizontal serviceCon'>
        <div className='containerServices oneService '>
          <div className='containerDataServices oneTextService '>
            <i className='iconoLanding'><FaHeartbeat/></i>
            <h3 className='subTitleLanding'>Servicos</h3>
            <h1 className='titlesLandin'><span className='titlesLandingOne'>Encontraras</span> quien se adapte a tus nesecidades  </h1>
          </div>
          <div className='containerImgServicesOne'>
            <img className='servicesImg1' src={servicesImg1} alt='services_img_one' />
          </div>
        </div>
        <div className='containerServices TwoService '>
          <div className='containerDataServices TwoTextService '>
          <p className='parrafoLanding'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div className='containerImgServicesTwo '>
            <img className='servicesImg2' src={servicesImg2} alt='services_img_two' />
          </div>
        </div>
        <div className='containerServices threeService '>
          <div className='containerDataServices TwoTextService '>
          <Link to="/signin">
            <button className='buttonOne serviceBotton'>Registrate</button>
          </Link>  
          </div>
          <div className='containerImgServicesThree'>
            <img className='servicesImg3' src={servicesImg3} alt='services_img_thre' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services
