import React from 'react'
import arrow from "../../assets/img/arrow-1.svg"
import picture from "../../assets/img/selfie.jpg"
import Skill from './Skill'
import {ReactComponent as HtmlLogo} from "../../assets/icons/html-icon.svg"
import {ReactComponent as CssLogo} from "../../assets/icons/css-icon.svg"
import {ReactComponent as JsLogo} from "../../assets/icons/js-icon.svg"

const About = () => {
    const skills = [
        {
            id: 1,
            name: "HTML",
            logo: <HtmlLogo/>
        },
        {
            id: 2,
            name: "CSS",
            logo: <CssLogo/>
        },
        {
            id: 3,
            name: "JS",
            logo: <JsLogo/>
        }
    ]
  return (
    <section className='about'>
        <article className="section-title">
          <h2>Om Mig</h2>
          <img src={arrow} alt="arrow" />
        </article>
        <img src={picture} alt="selfie" className='about-picture'/>
        <article className='about-intro'>
            <h2>Hej! Jeg er Frederik</h2>
            <p>Som passioneret Webudvikler, med flair for design har jeg ikke bare kendskab til diverse frontend-teknologier, men også gå-på-mod til at lære det der skulle mangle. Denne side er foreksempelt designet, kodet og opsat af mig selv. </p>
            <p>Det var lidt om mig, Men hvilke teknologier kan jeg bruge?</p>
        </article>
        <figure className='skill-grid'>
            {
                skills.map((skill) => <Skill key={skill.id} Logo={skill.logo} name={skill.name}/>)
            }
        </figure>
    </section>
  )
}

export default About