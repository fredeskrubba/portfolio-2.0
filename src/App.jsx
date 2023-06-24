import Nav from "./components/nav/Nav"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import {ReactComponent as GithubLogo} from "./assets/icons/github-icon.svg"
import {ReactComponent as LinkedinLogo} from "./assets/icons/linkedin-icon.svg"
import * as Scroll from 'react-scroll';

function App() {
  
  let Element = Scroll.Element
  return (
    <>
      <Nav/>
      <Header/>
      <Element name="projects">
        <Projects/>
      </Element>
      <Element name="about">
        <About/>
      </Element>
      <Element name="contact">
        <Contact/>
      </Element>
      <footer className='mobile-footer'>
            <div className="social-container">
                <GithubLogo/>
                <h4>Github/fredeskrubba</h4>
            </div>
            <div className="social-container">
                <LinkedinLogo/>
                <h4>Frederik Skrubbeltrang</h4>
            </div>
        </footer>
    </>
  )
}

export default App
