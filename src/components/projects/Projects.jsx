import React from 'react'
import arrow from "../../assets/img/arrow-1.svg"

const Projects = () => {
  return (
    <section className='projects'>
        <h2 className='section-title'>Projekter</h2>
        <img src={arrow} alt="" />
        <p className="more-button">Se Mere</p>
    </section>
  )
}

export default Projects