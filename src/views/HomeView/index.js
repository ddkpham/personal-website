import React from 'react'; 

import VideoBackground from '../../components/video-background';
import ActionButton from './Button';
import logo from '../../static/Logo.png';
import ubc from '../../static/ubc.jpg';
import sfu from '../../static/sfu.jpg';

import './index.scss'

function Home(){ 
  return(
    <>
      <div className="home-view__header">
      <VideoBackground path="/ink.mp4"/>
      <div className="logo">
        <img src={logo} alt="Logo" width="100px" />
      </div>
      <div className="name-display">
        <h1>David Pham</h1>
        <h1>Developer.</h1>
      </div>
      <div className="action-button">
        <ActionButton />
      </div>
    </div>
    <div className="home-view__content">
      <div className="home-view__content--title">
        <h1>Education</h1>
      </div>
      <div className="home-view__content--info">
        <div className="education-info">
          <div className="education-info__ubc">
            <h1>University of British Columbia</h1>
            <h2>Bachelors of Science (2011-2015)</h2>
            <h3>Microbiology and Immunology</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          </div>
          <div className="education-info__sfu">
            <h1>Simon Fraser University</h1>
            <h2>Bachelors of Computer Science (2017-2020)</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;