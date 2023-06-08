import React from 'react'
import arrow from "../../assets/img/arrow-1.svg"
import { useState } from 'react'


const Contact = () => {

  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  return (
    <section className='contact'>
        <article className="section-title">
          <h2>Kontakt</h2>
          <img src={arrow} alt="arrow" />
        </article>
        <p>Kan du lide hvad du ser? Jeg er altid klar på en god snak over en kop kaffe, eller korrespondance via e-mail.</p>
        <form>
            <input type="text" placeholder='Navn...' onChange={(e)=> setName(e.target.value)}/>
            <input type="text" placeholder='Emne...' onChange={(e)=> setSubject(e.target.value)}/>
            <textarea placeholder='Besked...' onChange={(e)=> setMessage(e.target.value)}/>
        </form>
        <p className="more-button" onClick={()=> window.open(`mailto:frederikskrubbeltrangbs@gmail.com?subject=${subject}&body=${message}`)}>Send</p>
    </section>
  )
}

export default Contact