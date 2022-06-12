import React from 'react'
import Start from './Start/Start.js'
import WhatDoWeDo from "./WhatDoWeDo/WhatDoWeDo.js"
import "./Landingpage.css"
import Services from './Services/Services.js'
import ChooseUs from './ChooseUs/ChooseUs.js'
import Post from './Post/Post.js'
import Testimonials from './Testimonials/Testimonials.js'
import Contact from './Contact/Contact.js'


function Home() {


  return (
    <div className='containerHome' id={"firtsDiv"}  >
      <section className="section" id="start">
        <Start />
      </section >
      <section className="section" id="whatDoWeDo" >
        <WhatDoWeDo />
      </section>
      <section className="section" id="service">
        <Services />
      </section>
      <section className="section" id="post">
        <ChooseUs />
      </section>
      <section className="section" id="chooseUs">
        <Post />
      </section>
      <section className="section" id="testimonials">
        <Testimonials />
      </section>
      <section className="section" id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Home
