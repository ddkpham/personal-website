import React from 'react'; 


import './index.scss'
import ActionButton from '../../components/Button';
import genePic from '../../static/dna.jpg';
import seriousPepper from '../../static/serious-pepper.jpg';
import runwayPepper from '../../static/pepper-touch.jpg';
import gym from '../../static/gym.jpg';
import productive from '../../static/productive.jpg'
import compress from '../../static/compress.jpg'
function ProjectView(){

  return (
    <>
      <div className="project-view">
        <div className="project-view__header">
          <h3>Professional Cuddler. Software Developer.</h3>
          <h1>Exciting professional, research and academic projects that I am excited to share with the few reading. God bless you supportive folks.</h1>
          <div className="project-view__button">
            <ActionButton label={"IM SO DESPERATE"}/>
          </div>
        </div>
      </div>

      <div className="project-list">
        <div className="project-list__title">
          <h1>Development Projects</h1>
        </div>
        <div className="project-list__content">
          <div className="project-list__project">
            <img src={genePic} alt="DNA" />
            <div className="project-list__overlay">
                <h1>GraphKB</h1>
                <h2>React, ag-Grid, D3, MUI</h2>
                <div className="project-list__button">
                  <ActionButton label={"View Project"}/>
                </div>
            </div>
          </div>
          <div className="project-list__project">
            <img src={seriousPepper} alt="DNA" />
            <div className="project-list__overlay">
                <h1>Telepresence</h1>
                <h2>Python, Dialog, Javascript, Android</h2>
                <div className="project-list__button">
                  <ActionButton label={"View Project"}/>
                </div>
            </div>
          </div>
          <div className="project-list__project">
            <img src={compress} alt="DNA" />
            <div className="project-list__overlay">
                <h1>Compression Visualizer</h1>
                <h2>React, Python, Bootstrap, Flask</h2>
                <div className="project-list__button">
                  <ActionButton label={"View Project"}/>
                </div>
            </div>
          </div>
          <div className="project-list__project">
            <img src={runwayPepper} alt="DNA" />
            <div className="project-list__overlay">
                <h1>Affective Computing</h1>
                <h2>Python, Dialog, Javascript, C++</h2>
                <div className="project-list__button">
                  <ActionButton label={"View Project"}/>
                </div>
            </div>
          </div>
          <div className="project-list__project">
            <img src={gym} alt="DNA" />
            <div className="project-list__overlay">
                <h1>FitTrkr</h1>
                <h2>Python, Flask, SQL, Bootstrap</h2>
                <div className="project-list__button">
                  <ActionButton label={"View Project"}/>
                </div>
            </div>
          </div>
          <div className="project-list__project">
            <img src={productive} alt="DNA" />
            <div className="project-list__overlay">
                <h1>Boost</h1>
                <h2>Python, Tkinter</h2>
                <div className="project-list__button">
                  <ActionButton label={"View Project"}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectView;