import React from 'react'
import logo from "../../../images/logoClickCareicono2.png";
import { Link } from 'react-router-dom';
import "./Contact.css"

function Contact() {
  return (
    <div className='conteinerContactLand '>
      <div className='containerDataContact'>
      <img className='logoContac' src={logo} alt='logo_ClickCare'/>
        <h3 className='subTitleLanding contact One'>Tienes alguna queja o sugerencia</h3>
        <h1 className='titlesLandin contact'><span className='titlesLandingOne contact'></span>queremos mejorar para ti</h1>
        <p className='parrafoLanding contact' contac>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        <Link to="/about">
          <button className='buttonOne Star contacBotton'>Contactanos</button>
        </Link>
      </div>
    </div>
  )
}

export default Contact
