import React from 'react'
import Start from './Start/Start.js'
import "./Landingpage.css"


function Home() {


  return (
    <div className='containerHome' >
      <section className="section" id="home">
        <Start />
      </section >
      <section className="section" id="about" >
        <h1>seccion 2</h1>
      </section>
      <section className="section" id="service">
        <h1>seccion 3</h1>
      </section>
      <section className="section" id="testimonio">
        <h1>seccion 4</h1>
      </section>
      <section className="section" id="contact">
        <h1>seccion 5</h1>
      </section>
    </div>
  )
}

export default Home
