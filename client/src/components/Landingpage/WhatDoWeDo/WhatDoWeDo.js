import React from 'react'
import nurseHelp from "./imageWhatDoWeDo/nurseHelp.png"
import "./WhatDoWeDo.css"
import { MdHealing } from "react-icons/md";
import { Link } from 'react-router-dom';


function WhatDoWeDo() {
  

  return (
    <div className='conteinerSelectonFlex' id={"containerWhatDoWeDo"} >
      <div className='' id={"containersImgWDWD"}>
          <img className="imgNurseHelp" id={"animatioScrollOne"} src={nurseHelp} alt="imge_start"/>
          <div className='boxBackgroundWhatDoWeDoOne'></div>
          <div className='boxBackgroundWhatDoWeDoTwo'></div>
      </div>
      <div className='containersTextLan'>
        <i className='iconoLanding'><MdHealing/></i>
        <h3 className='subTitleLanding'>Que hacemos</h3>
        <h1 className='titlesLandin'>te ayudamos a encontrar quien atienda <span className='titlesLandingOne'>tus necesidades </span> </h1>
        <p className='parrafoLanding'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <Link to="/about">
          <button className='buttonOne Star'>Mas info</button>
        </Link>
      </div>
    </div>
  )
}

export default WhatDoWeDo
