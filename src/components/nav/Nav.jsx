import githubIcon from "../../assets/icons/github-icon.svg"
import linkedIcon from "../../assets/icons/linkedin-icon.svg"
import burgerIcon from "../../assets/icons/burger-icon.svg"

const Nav = () => {
  return (
    <nav>
      <section className='mobile-nav'>
        <div className='socials'>
          <a href="https://www.linkedin.com/in/frederik-skrubbeltrang-698b4a1a3/" rel="noreferrer" target="_blank"><img src={linkedIcon} alt="linkedin-icon"/></a>
          <a href="https://github.com/fredeskrubba" rel="noreferrer" target="_blank"><img src={githubIcon} alt="github-icon" /></a>
        </div>
        <img src={burgerIcon} alt="menu" />
      </section>
    </nav>
  )
}

export default Nav