import { ReactComponent as GithubIcon} from "../../assets/icons/github-icon.svg"
import {ReactComponent as LinkedIcon} from "../../assets/icons/linkedin-icon.svg"
import {ReactComponent as BurgerIcon } from "../../assets/icons/burger-icon.svg"
import {ReactComponent as CancelIcon } from "../../assets/icons/cancel-icon.svg"
import * as Scroll from 'react-scroll';
import { useState } from "react";


const Nav = () => {
  const [showNav, setShowNav] = useState(false)
  let Link = Scroll.Link
  return (
    <nav>
      <section className='mobile-nav'>
        <div className='socials'>
          <a href="https://www.linkedin.com/in/frederik-skrubbeltrang-698b4a1a3/" rel="noreferrer" target="_blank"><LinkedIcon/></a>
          <a href="https://github.com/fredeskrubba" rel="noreferrer" target="_blank"><GithubIcon/></a>
        </div>
        <BurgerIcon onClick={()=>{
          setShowNav(true)
        }}/>
      </section>
        <div className={`${showNav ? "show" : "hide"} mobile-modal`}>
          <CancelIcon onClick={()=>{
          setShowNav(false)
        }}/>
          <section className="mobile-nav-links">
            <Link  smooth={true} to="projects" offset={-60} spy={true} onClick={()=>{setShowNav(false)}}>Projekter</Link>
            <Link  smooth={true} to="projects" offset={460} spy={true} onClick={()=>{setShowNav(false)}}>Om Mig</Link>
            <Link  smooth={true} to="contact" onClick={()=>{setShowNav(false)}}>Kontakt</Link>
          </section>
        </div>
      <section className="desktop-nav">
        <article className="nav-links">
          <Link  smooth={true} to="projects" offset={-25} spy={true}>Projekter</Link>
          <Link  smooth={true} to="about" offset={-25} spy={true}>Om Mig</Link>
          <Link  smooth={true} to="contact">Kontakt</Link>
        </article>
        <article className="socials">
          <a href="https://www.linkedin.com/in/frederik-skrubbeltrang-698b4a1a3/" rel="noreferrer" target="_blank"><LinkedIcon/></a>
          <a href="https://github.com/fredeskrubba" rel="noreferrer" target="_blank"><GithubIcon/></a>
        </article>
      </section>
    </nav>
  )
}

export default Nav