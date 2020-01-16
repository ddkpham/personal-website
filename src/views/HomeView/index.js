import React from 'react'; 

import VideoBackground from '../../components/video-background';
import ActionButton from '../../components/Button';
import logo from '../../static/Logo.png';
import './index.scss'

function Home(props){ 

  const { isMobile } = props;
  return(
    <>
      <div className={`home-view__header`} id="home">
      {isMobile 
        ? null
        : <VideoBackground path="/ink.mp4"/>}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="name-display">
        <h1>David Pham</h1>
        <h1>Developer.</h1>
      </div>
      <div className="action-button">
        <ActionButton label={"CHECK OUT MY CV"}/>
      </div>
    </div>
    </>
  )
}

export default Home;