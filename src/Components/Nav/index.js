import React from 'react';
import { Link } from 'react-scroll';
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
          <Link to="Main" smooth={true} duration={2000}>
            Home
          </Link>
        </li>
        <li className="px-5">
          <Link to="About" smooth={true} duration={2000}>
            About
          </Link>
        </li>
        <li className="px-5">
          <Link to="Projects" smooth={true} duration={2000}>
            Projects
          </Link>
        </li>
        <li className="px-5">
          <Link>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
