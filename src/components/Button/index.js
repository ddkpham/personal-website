import React from 'react';

import Button from '@material-ui/core/Button'
import './index.scss'

function ActionButton(props){ 
  const { label } = props;
  return(
   <div className="button-container">
     <h4>{label}</h4>
   </div>
  )
}

export default ActionButton;