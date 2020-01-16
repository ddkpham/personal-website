import React from 'react';

import Button from '@material-ui/core/Button'
import resume from '../../static/resume.pdf';
import './index.scss'

function ActionButton(props){ 
  const { label } = props;
  let { link } = props;
  if(!link){
    link = resume;
  }

  return(
   <div className="button-container">
     <a href={link} alt="link">{label}</a>
   </div>
  )
}

export default ActionButton;