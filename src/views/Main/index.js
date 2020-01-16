import React from 'react';

import MainNav from './MainNav'
import HomeView from '../HomeView';
import AboutView from '../AboutView';
import ProjectView from '../ProjectView'
import EducationView from '../EducationView'
import MobileEducationView from '../MobileEducationView'
import Footer from '../../components/Footer'

import './index.scss'
function Main(){ 

  const isMobile = window.innerWidth < 500;

  return (
    <div className="main-view">
    <MainNav isMobile={isMobile} />
    <section className="main-view__content">
      <HomeView isMobile={isMobile} />
      <AboutView isMobile={isMobile} />
      <ProjectView isMobile={isMobile} />
      {isMobile 
        ? <MobileEducationView />
        : <EducationView />
      }
    </section>
    <section className="main-footer">
      <Footer isMobile={isMobile} />
    </section>
    
    </div>
 )
}

export default Main;