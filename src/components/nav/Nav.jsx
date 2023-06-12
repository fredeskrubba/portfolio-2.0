import { ReactComponent as GithubIcon} from "../../assets/icons/github-icon.svg"
import {ReactComponent as LinkedIcon} from "../../assets/icons/linkedin-icon.svg"
import {ReactComponent as BurgerIcon } from "../../assets/icons/burger-icon.svg"

const Nav = () => {
  return (
    <nav>
      <section className='mobile-nav'>
        <div className='socials'>
          <a href="https://www.linkedin.com/in/frederik-skrubbeltrang-698b4a1a3/" rel="noreferrer" target="_blank"><LinkedIcon/></a>
          <a href="https://github.com/fredeskrubba" rel="noreferrer" target="_blank"><GithubIcon/></a>
        </div>
        <BurgerIcon/>
      </section>
      <section className="desktop-nav">
        <article className="nav-links">
          <a href="/">Projekter</a>
          <a href="/">Om Mig</a>
          <a href="/">Kontakt</a>
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