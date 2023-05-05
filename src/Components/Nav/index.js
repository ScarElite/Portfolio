import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/MA-logo.svg';

function Nav() {
  return (
    <nav className="flex justify-between">
      <div className="flex items-center nav-logo">
        <div className="logo flex justify-center">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <ul className="flex items-center">
        <li className="px-10">
          <Link>Home</Link>
        </li>
        <li className="px-5">
          <Link>Projects</Link>
        </li>
        <li className="px-5">
          <Link>Contact</Link>
        </li>
        <li className="px-5">
          <Link>Other</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
