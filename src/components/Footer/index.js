import React from 'react';
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';

import Navbar from './components/Navbar'
import './index.scss'

const labels = ['home', 'about', 'portfolio', 'resume'];

function Footer() {


  const redirect = (href) => {
    if(window){
      window.open(href)
    }
  }

  return (
    <div className="footer">
      <div className="footer__title">
        <h1>Let's get in touch and share some ideas.</h1>
      </div>
      <div className="footer__navbar">
        <Navbar labels={labels} />
      </div>
      <div className="footer__copyright">
        <p>&copy; 2019 David Pham. All rights reserved. Developer. Friend. Relentless sushi advocate.</p>
      </div>
      <div className="footer__social-media">
        <IconButton size="medium" onClick={() => redirect('https://www.linkedin.com/in/ddkpham/')}>
          <LinkedInIcon fontSize="large"/>
        </IconButton>
        <IconButton size="medium" onClick={()=> redirect('https://twitter.com/ddkpham')}>
          <TwitterIcon fontSize="large"/>
        </IconButton>
        <IconButton size="medium" onClick={() => redirect('https://github.com/ddkpham/')}>
          <GithubIcon fontSize="large"/>
        </IconButton>
      </div>
    </div>
  )
}

export default Footer;