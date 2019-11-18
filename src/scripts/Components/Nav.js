import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink to='/'>About</NavLink>
      </li>
      <li>
        <NavLink to='/portfolio'>Portfolio</NavLink>
      </li>
      <li>
        <NavLink to='/experience'>Experience</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
