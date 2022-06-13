import React from 'react'
import { BiHealth } from "react-icons/bi";
import { GoCalendar } from "react-icons/go";
import imguser1 from "./imgPost/imguser1.jpg";
import imguser2 from "./imgPost/imguser2.jpg";
import "./Post.css"

function Services() {


  return (
    <div className='conteinerSelectonBlok'>
      <div className='containerPost'>
        <i className='iconoLanding'><BiHealth/></i>
        <h3 className='subTitleLanding'>Ofertas</h3>
        <h1 className='titlesLandin'><span className='titlesLandingOne'>cuentanos</span> como podemos ayudarte </h1>
        <p className='parrafoLanding'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='conatinerCardPost'>
          <div className='containerCardPost'>
           
            <div className='cardPost'>
              <div className='cardPostLeft'>
                <p className='fechaPost'>Fecha: <span>06/11/2022</span> </p>
                <h1 className='namePost'>Jhon Doe</h1>
                <p className='paragraphPost'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... </p>
                <div className='postBottonOne'>
                  <button className='buttonOne Post'>Mas info</button>
                  <p className='typePost'>Tipo de servicio: <br></br><span>Cuidado Adulto Mayor </span> </p>
                </div>
                <div className='postBottonOne'>
                  <p className='datePost'>Dias: <span>Lun a Vie 8:00 - 14:00 </span> </p>
                  <i className='calenderIcon'><GoCalendar/></i>
                </div>
              </div>
              <div className='cardPostRight'>
                <img className='imguserPost' src={imguser1} alt=''/>
                <p className='cityPost'>Capital F.<br></br><span>Buenos Aires </span> </p>
              </div>
            </div>
            <div className='cardPost'>
              <div className='cardPostLeft'>
                <p className='fechaPost'>Fecha: <span>06/11/2022</span> </p>
                <h1 className='namePost'>Jhon Doe</h1>
                <p className='paragraphPost'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... </p>
                <div className='postBottonOne'>
                  <button className='buttonOne Post'>Mas info</button>
                  <p className='typePost'>Tipo de servicio: <br></br><span>Terapia fisica </span> </p>
                </div>
                <div className='postBottonOne'>
                  <p className='datePost'>Dias: <span>Sab 10:00 am </span> </p>
                  <i className='calenderIcon'><GoCalendar/></i>
                </div>
              </div>
              <div className='cardPostRight'>
                <img className='imguserPost' src={imguser2} alt=''/>
                <p className='cityPost'>Cundinamarca<br></br><span>Bogta D.C </span> </p>
              </div>
            </div>
          </div>
          <div className='containerCardPost'>
           
           <div className='cardPost'>
             <div className='cardPostLeft'>
               <p className='fechaPost'>Fecha: <span>06/11/2022</span> </p>
               <h1 className='namePost'>Jhon Doe</h1>
               <p className='paragraphPost'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... </p>
               <div className='postBottonOne'>
                 <button className='buttonOne Post'>Mas info</button>
                 <p className='typePost'>Tipo de servicio: <br></br><span>Cuidado Adulto Mayor </span> </p>
               </div>
               <div className='postBottonOne'>
                 <p className='datePost'>Dias: <span>Lun a Vie 8:00 - 14:00 </span> </p>
                 <i className='calenderIcon'><GoCalendar/></i>
               </div>
             </div>
             <div className='cardPostRight'>
               <img className='imguserPost' src={imguser1} alt=''/>
               <p className='cityPost'>Capital F.<br></br><span>Buenos Aires </span> </p>
             </div>
           </div>
           <div className='cardPost'>
             <div className='cardPostLeft'>
               <p className='fechaPost'>Fecha: <span>06/11/2022</span> </p>
               <h1 className='namePost'>Jhon Doe</h1>
               <p className='paragraphPost'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... </p>
               <div className='postBottonOne'>
                 <button className='buttonOne Post'>Mas info</button>
                 <p className='typePost'>Tipo de servicio: <br></br><span>Terapia fisica </span> </p>
               </div>
               <div className='postBottonOne'>
                 <p className='datePost'>Dias: <span>Sab 10:00 am </span> </p>
                 <i className='calenderIcon'><GoCalendar/></i>
               </div>
             </div>
             <div className='cardPostRight'>
               <img className='imguserPost' src={imguser2} alt=''/>
               <p className='cityPost'>Cundinamarca<br></br><span>Bogta D.C </span> </p>
             </div>
           </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Services
