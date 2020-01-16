import React from 'react';

import './index.scss'
function Navbar(props){
  const {labels} = props;
  return (
    <div className="navbar">
      {labels.map(label => (
        <a href={`#${label}`} className="navbar__links">{label}</a>
      ))}
    </div>
  )
}

export default Navbar;