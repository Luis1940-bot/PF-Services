import React from 'react'
import imgStart from "./imgeStart/imgStart.png"
import imgStartOne from "./imgeStart/imgStartOne.png"
import "./Start.css"

function Start() {
  return (
    <div className='conteinerStart'>
        <div className='conteinerStartOne'>
            <div className='lineStart'>
            
            </div>
            <div className='containerTextStart'>
                <h3 className='textStarOne'>hola</h3>
                <h1>chao</h1>
            </div>
            <div className='containerImageStart'>
                <img className="imgStartOne" src={imgStartOne} alt="imge_start_one"/>
                <img className="imgStart" src={imgStart} alt="imge_start"/>
                <div className='conteinerImgStartTwo'></div>
            </div>
        </div>
    </div>
  )
}

export default Start
