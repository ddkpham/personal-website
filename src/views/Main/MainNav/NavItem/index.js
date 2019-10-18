import React from 'react';
import './index.scss'


function NavItem(props){
  const { title } = props;
  return (
    <div className="nav-item">
      <div className="border-animation">
        <h5>{title.toUpperCase()}</h5>
      </div>
    </div>
  )
}

export default NavItem;