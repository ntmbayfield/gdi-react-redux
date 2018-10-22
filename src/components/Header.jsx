// Exercise 2: Set It Up
  // write a functional component
  // make it a ul with a class name of Header
  // make four li: GDInsta, Home, About, Profile
  // put class name of Logo on the li element with GDInsta
  // export default the component!

// Exercise 7: Routing
  // import Link from react-router-dom
  // use the Link component to link to each route with a 'to' property
  // check that your links work!

import React from 'react';


const Header = () => {
  return (
    <ul className="Header">
      <li className="Logo">GDInsta</li>
      <li>Home</li>
      <li>About</li>
      <li>Profile</li>
    </ul>
  )
}

export default Header;
