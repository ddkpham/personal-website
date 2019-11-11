import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'


function NavItem(props){
  const { title, path } = props;
  return (
    <div className="nav-item">
      <div className="border-animation">
        <Link to={`/${path}`}>{title.toUpperCase()}</Link>
      </div>
    </div>
  )
}

export default NavItem;