import React, { useState, useEffect } from 'react';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function Nav() {
  const [activeLink, setActiveLink] = useState('');
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    window.addEventListener('scroll', handleScroll);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    const mainComponentHeight = document.getElementById('Main').offsetHeight;
    const isBelowMainComponent = scrollPosition > mainComponentHeight;

    setIsNavbarVisible(isBelowMainComponent);
  };

  const handleSetActive = (to, from) => {
    setActiveLink(to);
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('animate-border'));
    const activeLink = document.querySelector(`[href="#${to}"]`);
    const navLinksContainer = document.querySelector('.nav-links');
    if (activeLink && navLinksContainer) {
      activeLink.classList.add('animate-border');
      const scrollRatio = activeLink.offsetTop / navLinksContainer.offsetHeight;
      const scrollbarLine = navLinksContainer.querySelector('::after');
      if (scrollbarLine) {
        scrollbarLine.style.height = `${scrollRatio * 100}%`;
        scrollbarLine.style.transform = `scaleY(${scrollRatio})`;
      }
    }
  };

  const handleLinkClick = to => {
    scroll.scrollTo(to, {
      smooth: true,
      duration: 2000,
      offset: 0,
    });
  };

  return (
    <nav
      id="Nav"
      className={`flex justify-end ${isNavbarVisible ? 'visible' : 'hidden'}`}
    >
      <ul className="flex flex-col items-end nav-links">
        {/* <li
          className={`nav-link flex items-center justify-between ${
            activeLink === 'Main' ? 'nav-active' : ''
          }`}
        >
          <Link
            to="Main"
            smooth={true}
            duration={2000}
            className="mr-4"
            spy={true}
            offset={0}
            onSetActive={handleSetActive}
            onClick={() => handleLinkClick('Main')}
          >
            00
          </Link>
        </li> */}
        <li
          className={`nav-link flex items-center justify-between ${
            activeLink === 'About' ? 'nav-active' : ''
          }`}
        >
          <Link
            to="About"
            smooth={true}
            duration={2000}
            className="mr-4"
            spy={true}
            offset={0}
            onSetActive={handleSetActive}
            onClick={() => handleLinkClick('About')}
          >
            01
          </Link>
        </li>
        <li
          className={`nav-link flex items-center justify-between ${
            activeLink === 'Projects' ? 'nav-active' : ''
          }`}
        >
          <Link
            to="Projects"
            smooth={true}
            duration={2000}
            className="mr-4"
            spy={true}
            offset={0}
            onSetActive={handleSetActive}
            onClick={() => handleLinkClick('Projects')}
          >
            02
          </Link>
        </li>
        <li
          className={`nav-link flex items-center justify-between ${
            activeLink === 'OtherProjects' ? 'nav-active' : ''
          }`}
        >
          <Link
            to="OtherProjects"
            smooth={true}
            duration={2000}
            className="mr-4"
            spy={true}
            offset={0}
            onSetActive={handleSetActive}
            onClick={() => handleLinkClick('OtherProjects')}
          >
            03
          </Link>
        </li>
        <li
          className={`nav-link flex items-center justify-between ${
            activeLink === 'Contact' ? 'nav-active' : ''
          }`}
        >
          <Link
            to="Contact"
            smooth={true}
            duration={2000}
            className="mr-4"
            spy={true}
            offset={0}
            onSetActive={handleSetActive}
            onClick={() => handleLinkClick('Contact')}
          >
            04
          </Link>
        </li>
      </ul>
      <div className="scrollbar-line"></div>
      <div className="scrollbar-line"></div>
    </nav>
  );
}

export default Nav;
