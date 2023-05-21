import React from 'react';
import logo from '../../assets/images/MA-logo.svg';
import communication from '../../assets/other/communication.svg';
import responsive from '../../assets/other/responsive.svg';
import problemSolver from '../../assets/other/problemSolver.svg';
import timeManagement from '../../assets/other/timeManagement.svg';

function About() {
  return (
    <section id="About" className="about-section flex flex-col items-center">
      <div className="flex flex-col items-center">
        <header className="about-header text-center">About</header>
        <div className="section-line"></div>
      </div>
      <div className="about-icon-list flex justify-between">
        <div className="about-icon flex flex-col text-center items-center">
          <img src={communication} alt="icon" className="img-icon" />
          <h1 className="about-icon-header">Communicative</h1>
          <p className="about-icon-description">
            I have plenty of communication and a fast response time.
          </p>
        </div>
        <div className="about-icon flex flex-col text-center items-center">
          <img src={responsive} alt="icon" className="img-icon" />
          <h1 className="about-icon-header">Responsive</h1>
          <p className="about-icon-description">
            I create websites that are responsive and look good on any device.
          </p>
        </div>
        <div className="about-icon flex flex-col text-center items-center">
          <img src={problemSolver} alt="icon" className="img-icon" />
          <h1 className="about-icon-header">Problem Solver</h1>
          <p className="about-icon-description">
            I come up with creative solutions to any problems that arise.
          </p>
        </div>
        <div className="about-icon flex flex-col text-center items-center">
          <img src={timeManagement} alt="icon" className="img-icon" />
          <h1 className="about-icon-header">Time Management</h1>
          <p className="about-icon-description">
            I manage my time wisely create websites in a timely manner.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center about-info">
        <article className="left-side flex flex-col">
          <div className="flex justify-center">
            <p className="about-description">
              I'm a graduate of the UNC Chapel Hill Coding BootCamp that teaches
              students how to become a Fullstack Web Developer. The beginning of
              my coding journey was an accident. It was a time in my life where
              nothing was going on for me and I was mindlessly scrolling through
              social media. I came across the same ad for a coding course,
              FrontEnd Simplified, many many times. I finally decided to give it
              a try and after a couple of days of coding I was hooked. People in
              my life always told me they could see me becoming a web developer
              but I always thought it wouldn't be something I was interested in
              and I was of course WRONG. I started to look for another way that
              I could continue my journey and that's where I found the Coding
              BootCamp offered by UNC Chapel Hill and I continued my journey in
              July of 2022. This program is 6 months long and I graduated in
              January of 2023. During the program I learned so much and I'm
              eager to continue learning and become a better Fullstack Web
              Developer. I absolutely love coding and I'm excited for all of the
              things I will create! I've worked with some great web developers
              during my time in the BootCamp and I'm eager to work with other
              developers outside of that ! Let's make something awesome!
            </p>
          </div>
        </article>
        <article className="right-side flex justify-center">
          <img src={logo} alt="logo" />
        </article>
      </div>
    </section>
  );
}

export default About;
