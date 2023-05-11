import React from 'react';
import Video from '../../assets/videos/bg-test.mp4';

function Main() {
  return (
    <section id="Main" className="text-center flex justify-center">
      <video autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="flex flex-col main-div">
        <header className="main-header">Hello, I'm Mitchell!</header>
        <p className="main-description">
          Full Stack Web Developer and graduate from UNC Chapel Hill Coding Boot
          Camp
        </p>
      </div>
    </section>
  );
}

export default Main;
