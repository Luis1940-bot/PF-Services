import React from 'react'
import { MdHealthAndSafety } from "react-icons/md";
import imageChoseUs from "./ChooseUsimg/imageChoseUs.png"


function ChooseUs() {
  return (
    <div className='conteinerSelectonFlex'>
        <div className='containersImgLand'>
        <img className="imgNurseHelp" id={"animatioScrollOne"} src={imageChoseUs} alt="image_chose_us"/>
        </div>
        <div className='containersTextLan'>
          <i className='iconoLanding'><MdHealthAndSafety/></i>
          <h3 className='subTitleLanding'>En nuestra App</h3>
          <h1 className='titlesLandin'><span className='titlesLandingOne'>Encontraras</span> quien se adapte a tus nesecidades  </h1>
          <p className='parrafoLanding'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <button className='buttonOne Star'>Mas info</button>
        </div>
    </div>
  )
}

export default ChooseUs
