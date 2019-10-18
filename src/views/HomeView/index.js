import React from 'react'; 
import VideoBackground from './video-background'
import ActionButton from './Button'
import logo from '../../static/Logo.png'
import './index.scss'

function Home(){ 
  return(
    <>
      <VideoBackground />
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
    </>
  )
}

export default Home;