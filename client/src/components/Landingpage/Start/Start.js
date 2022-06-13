import React from 'react'
import imgStart from "./imgeStart/imgStart.png"
import imgStartOne from "./imgeStart/imgStartOne.png"
import imgStartTwo from "./imgeStart/imgStartTwo.png"
import { GiHealing } from "react-icons/gi";
import "./Start.css"

function Start() {
  return (
    <div className='conteinerSelectonFlex'>
      <div className='lineStart'/>
      <div className='containersTextLan'>
        <i className='iconoLanding'><GiHealing /></i>
        <h1 className='titlesLandin'><span className='titlesLandingOne'>Unidos </span>para cuidar de ti y tú familia</h1>
        <p className='parrafoLanding'>Somos una plataforma que busca conectarte con un profesional de la salud que pueda brindarte los servicios que nesecites sin salir de la comodidad de tu casa.</p>
        <button className='buttonOne Star'>Descarga la App</button>
        <div className='conteinerBottonStartGeneral'>
          <div className='conteinerBottonStart'>
            <img className="imgStartTwo" src={imgStartTwo} alt="img_start_two"/>
            <button className='buttonAppSatartTwo'>Ofertas</button>
          </div>
          <h3 className='textParStart'>Mira todos los servicios</h3>
        </div>
      </div>
      <div className='containersImgLand'>
        <img className="imgStartOne" src={imgStartOne} alt="imge_start_one"/>
        <img className="imgStart" src={imgStart} alt="imge_start"/>
        <div className='conteinerImgStartTwo'>
          
        </div>
      </div>
    </div>
  )
}

export default Start
