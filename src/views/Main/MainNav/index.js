import React from 'react';
import NavItem from './NavItem'
import './index.scss'
const MAIN_SECTIONS = ['Portfolio', 'About', 'Resume', 'Github']

function MainNav(){

  const NavItems = MAIN_SECTIONS.map((section) => <NavItem key={section} title={section} path={section.toLowerCase()}/> )
  return (
    <>
      <div className="main-nav">
        {NavItems}
      </div>
    </>
  )
}

export default MainNav;