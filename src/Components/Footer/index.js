import React from 'react';
import arrow from '../../assets/other/up-arrow.svg';

function Footer() {
  const handleTopButtonClick = event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="Footer" className="flex flex-col justify-center">
      <a href="/" onClick={handleTopButtonClick} class="t-top">
        <span class="up-arrow">
          <img src={arrow} alt="up arrow icon" />
        </span>
        {/* Top */}
      </a>
      <div className="icon-container flex justify-center">
        <a href="https://github.com/ScarElite" target="blank">
          <div className="icon flex items-center justify-center">
            <i class="fa-brands fa-github"></i>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/mitchell-armstrong99/"
          target="blank"
        >
          <div className="icon flex items-center justify-center">
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
        </a>
        <a href="https://twitter.com/M__Armstrong" target="blank">
          <div className="icon flex items-center justify-center">
            <i class="fa-brands fa-twitter"></i>
          </div>
        </a>
      </div>
      <header className="text-center pt-4 opacity-50">
        Mitchell Armstrong
      </header>
    </footer>
  );
}

export default Footer;
