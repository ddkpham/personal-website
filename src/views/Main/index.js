import React from 'react';
import {
    Route, 
    Switch, 
} from 'react-router-dom';

import HomeView from '../HomeView';
import AboutView from '../AboutView';
import MainNav from './MainNav'

function Main(){ 
  return (
    <div className="main-view">
    <MainNav />
      <section className="main-view__content">
        <HomeView />
        <AboutView />
      </section>
    </div>
 )
}

export default Main;