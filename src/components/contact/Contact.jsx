import React from 'react'
import arrow from "../../assets/img/arrow-1.svg"



const Contact = () => {
  return (
    <section className='contact'>
        <article className="section-title">
          <h2>Kontakt</h2>
          <img src={arrow} alt="arrow" />
        </article>
        <p>Kan du lide hvad du ser? Jeg er altid klar på en god snak over en kop kaffe, eller korrespondance via e-mail.</p>
        <form>
            <input type="text" placeholder='Navn...'/>
            <input type="text" placeholder='E-mail...'/>
            <textarea placeholder='Besked...'/>
        </form>
        <p className="more-button">Send</p>
    </section>
  )
}

export default Contact