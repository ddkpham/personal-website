import React from 'react';

import VideoBackground from '../../components/video-background';
import mountainPic from '../../static/mountain.jpg'
import firePic from '../../static/bonfire.jpg'
import './index.scss'
function About(){ 
  return(
   <>
    <div className="about-view__header">
      <VideoBackground path="/autumn.mp4"/>
      <div className="title-display">
        <h1>David Pham</h1>
        <h1>Sensitive. but in a sexy way.</h1>
      </div>
    </div>

    <section className="about-view__content">
      <div className="about-view__info">
        <div className="about-view__info--picture">
          <img src={mountainPic} alt="cool picture" width="100%" height="100%"/>
        </div>
        <div className="about-view__info--description">
          <div className="subtitle">
              <h1>A few fun facts about me.</h1>
          </div>
          <div className="info">
              <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
          </div>
        </div>
      </div>
      <div className="about-view__info">
          <div className="about-view__info--description">
          <div className="subtitle">
              <h1>A few fun facts about me.</h1>
          </div>
          <div className="info">
              <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
          </div>
          </div>
          <div className="about-view__info--picture">
            <img src={firePic} alt="cool picture" width="100%" height="100%"/>  
          </div>
        </div>
    </section>
   </>
  )
}

export default About;
