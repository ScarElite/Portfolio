import React from 'react';
import logo from '../../assets/images/MA-logo.svg';

function About() {
  return (
    <section id="About" className="flex items-center">
      <article className="left-side flex flex-col">
        <div>
          <header className="about-header text-center">About Me</header>
          <p className="about-description">
            I'm a graduate of the UNC Chapel Hill Coding BootCamp that teaches
            students how to become a Fullstack Web Developer. The beginning of
            my coding journey was an accident. It was a time in my life where
            nothing was going on for me and I was mindlessly scrolling through
            social media. I came across the same ad for a coding course,
            FrontEnd Simplified, many many times. I finally decided to give it a
            try and after a couple of days of coding I was hooked. People in my
            life always told me they could see me becoming a web developer but I
            always thought it wouldn't be something I was interested in and I
            was of course WRONG. I started to look for another way that I could
            continue my journey and that's where I found the Coding BootCamp
            offered by UNC Chapel Hill and I continued my journey in July of
            2022. This program is 6 months long and I graduated in January of
            2023. During the program I learned so much and I'm eager to continue
            learning and become a better Fullstack Web Developer. I absolutely
            love coding and I'm excited for all of the things I will create!
            I've worked with some great web developers during my time in the
            BootCamp and I'm eager to work with other developers outside of that
            ! Let's make something awesome!
          </p>
        </div>
      </article>
      <article className="right-side flex justify-center">
        <img src={logo} alt="logo" />
      </article>
    </section>
  );
}

export default About;
