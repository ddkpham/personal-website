import React from 'react';
import {
    Route, 
    Redirect, 
    Switch, 
    Link,
} from 'react-router-dom';

import HomeView from '../HomeView';
import AboutView from '../AboutView';
import MainNav from './MainNav'

function Main(){ 
  return (
    <div className="main-view">
    <MainNav />
      <section className="main-view__content">
        <Switch>
          <Route exact path="/about" component={AboutView} />
          <Route path="/" component={HomeView} />
        </Switch>
      </section>
    </div>
 )
}

export default Main;