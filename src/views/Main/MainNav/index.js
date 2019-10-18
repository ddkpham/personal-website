import React from 'react';
import NavItem from './NavItem'
import './index.scss'
const MAIN_SECTIONS = ['Portfolio', 'About', 'Resume', 'Blog']

function MainNav(){

  const NavItems = MAIN_SECTIONS.map((sections) => <NavItem title={sections} /> )
  return (
    <>
      <div className="main-nav">
        {NavItems}
      </div>
    </>
  )
}

export default MainNav;