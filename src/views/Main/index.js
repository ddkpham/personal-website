import React from 'react';

import MainNav from './MainNav'
import HomeView from '../HomeView';
import AboutView from '../AboutView';
import ProjectView from '../ProjectView'

function Main(){ 
  return (
    <div className="main-view">
    <MainNav />
      <section className="main-view__content">
        <HomeView />
        <AboutView />
        <ProjectView />
      </section>
    </div>
 )
}

export default Main;