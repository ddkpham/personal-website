import React from 'react';

import { Card } from '@material-ui/core';
import ubc from '../../static/ubc-logo.png'
import sfu from '../../static/sfu-logo.png'

import './index.scss'

function MobileEducationView(){
  return(
    <div className="mobile-ed">
      <div className="mobile-ed__header">
       <h1>Education</h1>
      </div>
      <div className="mobile-ed__content">
        <Card className="ed-card">
          <div className="ed-pic">
            <img src={ubc} alt="UBC"></img>
          </div>
          <div className="ed-info">
            <h1>University of British Columbia</h1>
            <h2>Bachelors of Science (2011-2015)</h2>
            <h3>Microbiology and Immunology</h3>
          </div>
        </Card>
        <Card className="ed-card">
          <div className="ed-pic">
            <img src={sfu} alt="UBC"></img>
          </div>
          <div className="ed-info">
            <h1>Simon Fraser University</h1>
            <h2>Bachelors of Applied Science (2017-2020)</h2>
            <h3>Computing Science</h3>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default MobileEducationView;