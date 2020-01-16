import React from 'react';
import './index.scss'
import resume from '../../../../static/resume.pdf'

function NavItem(props){
  const { title, isMobile } = props;

  let { path } = props;
  if(path === 'resume'){
    path = resume
  } else if (path=== 'github'){
    path="https://github.com/ddkpham/"
  } else {
    path = '#' + path; 
  }

  console.log(path)
  
  return (
    <div className='nav-item'>
      <div className="border-animation">
        <a href={path}>{title.toUpperCase()}</a>
      </div>
    </div>
  )
}

export default NavItem;