import React from 'react'; 


import './index.scss'
import ActionButton from '../../components/Button';
import ProjectBox from './components/ProjectBox';
import projects from './projects'

function ProjectView(props){

  const { isMobile } = props;

  return (
    <>
      <div className="project-view" id="portfolio">
        <div className={`project-view${isMobile ? '--mobile' : ''}__header`}>
          <h3>Software Developer. Problem Solver.</h3>
          <h1>Professional, research and academic projects that I am excited to share with you beautiful folks reading.</h1>
          <div className={`project-view${isMobile ? '--mobile' : ''}__button`}>
            <ActionButton label={"CHECK OUT MY CV"}/>
          </div>
        </div>
      </div>

      <div className={`project-list${isMobile ? '--mobile' : ''}`}>
        <div className="project-list__title">
          <h1>Development Projects</h1>
        </div>
        <div className="project-list__content">
        {projects.map((project) => (
          <ProjectBox
            picture={project.picture}
            title={project.title}
            subtitle={project.subtitle}
            link={project.link}
            isMobile={isMobile}
          />
        ))}
        </div>
      </div>
    </>
  )
}

export default ProjectView;