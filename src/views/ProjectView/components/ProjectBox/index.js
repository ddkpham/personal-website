import React from 'react'; 

import ActionButton from '../../../../components/Button'

function ProjectBox(props){
  const { picture, title, subtitle, link, isMobile} = props; 

  return (
    <div className={`project-list__project${isMobile ? '--mobile' : ''}`}>
      <img src={picture} alt="DNA" />
      <div className="project-list__overlay">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <div className="project-list__button">
            <ActionButton label={"View Project"} link={link} />
          </div>
      </div>
    </div>
  )
}

export default ProjectBox;