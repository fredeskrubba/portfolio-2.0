import React from 'react'
import arrow from "../../assets/img/arrow-1.svg"
import picture from "../../assets/img/selfie.jpg"
import Skill from './Skill'
import {ReactComponent as HtmlLogo} from "../../assets/icons/html-icon.svg"
import {ReactComponent as CssLogo} from "../../assets/icons/css-icon.svg"
import {ReactComponent as JsLogo} from "../../assets/icons/js-icon.svg"
import {ReactComponent as ReactLogo} from "../../assets/icons/react-icon.svg"
import {ReactComponent as NodeLogo} from "../../assets/icons/node-icon.svg"
import {ReactComponent as TailwindLogo} from "../../assets/icons/tailwind-icon.svg"
import {ReactComponent as BootstrapLogo} from "../../assets/icons/bootstrap-icon.svg"
import {ReactComponent as NextLogo} from "../../assets/icons/next-icon.svg"
import {ReactComponent as SqlLogo} from "../../assets/icons/sql-icon.svg"
import {ReactComponent as MongodbLogo} from "../../assets/icons/mongodb-icon.svg"
import {ReactComponent as GitLogo} from "../../assets/icons/git-icon.svg"
import { useState } from 'react'

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
        },
        {
            id: 4,
            name: "react",
            logo: <ReactLogo/>
        },
        {
            id: 5,
            name: "Node",
            logo: <NodeLogo/>
        },
        {
            id: 6,
            name: "Tailwind",
            logo: <TailwindLogo/>
        },
        {
            id: 7,
            name: "Bootstrap",
            logo: <BootstrapLogo/>
        },
        {
            id: 8,
            name: "Next",
            logo: <NextLogo/>
        },
        {
            id: 9,
            name: "SQL",
            logo: <SqlLogo/>
        },
        {
            id: 10,
            name: "MongoDB",
            logo: <MongodbLogo/>
        },
        {
            id: 11,
            name: "Git",
            logo: <GitLogo/>
        },
    ]

    const [skillsShown, setSkillsShown] = useState(4)
  return (
    <section className='about'>
        <article className="section-title">
          <h2>Om Mig</h2>
          <img src={arrow} alt="arrow" />
        </article>
        <section className="mobile-about">
            <img src={picture} alt="selfie" className='about-picture'/>
            <article className='about-intro'>
                <h2>Hej! Jeg er Frederik</h2>
                <p>Som passioneret Webudvikler, med flair for design har jeg ikke bare kendskab til diverse frontend-teknologier, men også gå-på-mod til at lære det der skulle mangle. Denne side er foreksempelt designet, kodet og opsat af mig selv. </p>
                <p>Det var lidt om mig, Men hvilke teknologier kan jeg bruge?</p>
            </article>
        </section>
        <section className='desktop-about'>
            <img src={picture} alt="selfie" className='about-picture'/>
            <article className='about-intro-desktop'>
                <h2>Hej! Jeg er Frederik</h2>
                <p>Som passioneret Webudvikler, med flair for design har jeg ikke bare kendskab til diverse frontend-teknologier, men også gå-på-mod til at lære det der skulle mangle. Denne side er foreksempelt designet, kodet og opsat af mig selv. </p>
                <p>Det var lidt om mig, Men hvilke teknologier kan jeg bruge?</p>
            </article>
        </section>
        <figure className='skill-grid'>
            {
                skills.slice(0, skillsShown).map((skill) => <Skill key={skill.id} Logo={skill.logo} name={skill.name}/>)
            }
        </figure>
        <p className="more-button" onClick={()=> setSkillsShown(skillsShown + 4)}>Se Mere</p>
    </section>
  )
}

export default About