import arrow from "../../assets/img/arrow-1.svg"
import Project from './Project'
import projectImg from "../../assets/img/project-img.jpg"
import { useState } from "react"


const Projects = () => {
  const [projectsShown, setProjectsShown] = useState(1)
  const projects = [
    {
      title: "Projekt 1",
      description: "Her er en kort beskrivelse af projektet, hvilke teknologier der er brugt, og hvad jeg er stolt af",
      img: projectImg,
      techs: ["React", "Node"],
      id: 1
    },
    {
      title: "Projekt 1",
      description: "Her er en kort beskrivelse af projektet, hvilke teknologier der er brugt, og hvad jeg er stolt af",
      img: projectImg,
      techs: ["React", "Node"],
      id: 1
    },
    {
      title: "Projekt 1",
      description: "Her er en kort beskrivelse af projektet, hvilke teknologier der er brugt, og hvad jeg er stolt af",
      img: projectImg,
      techs: ["React", "Node"],
      id: 1
    }
]
  return (
    <section className='projects'>
        <article className="section-title">
          <h2>Projekter</h2>
          <img src={arrow} alt="arrow" className="arrow" />
        </article>
        
        {
          projects.slice(0, projectsShown).map((project) => <Project key={project.id} title={project.title} img={project.img} description={project.description} techs={project.techs}/>)
        }
        <p className="more-button" onClick={(() => setProjectsShown(projectsShown + 1))}>Se Mere</p>
    </section>
  )
}

export default Projects