import { ReactComponent as GithubLogo} from "../../assets/icons/github-icon.svg"
import {ReactComponent as RedirectLogo} from "../../assets/icons/redirect-icon.svg"

const Project = ({title, img, description, techs, alt}) => {
  return (
    <div className='project'>
        <section className="project-header">
            <img src={img} alt={alt} />
            <article className="project-info">
                <h2>{title}</h2>
                <p>{description}</p>
            </article>
        </section>
        
        <article className="bottom-bar">
            <div className='technologies'>
                {
                    techs.map((tech) => <p key={1} className="technology"> {tech}</p>)
                }
            </div>
            <div className="project-buttons">
               <GithubLogo className="project-button"/>
               <RedirectLogo className="project-button"/> 
            </div>
        </article>
    </div>
  )
}

export default Project