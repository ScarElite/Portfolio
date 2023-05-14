import React from 'react';
import Video from '../../assets/videos/bg-test.mp4';

function Main() {
  return (
    <section id="Main" className="text-center flex justify-center">
      <video autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="flex flex-col main-div">
        <h1 className="main-header">Hello, I'm Mitchell!</h1>
        <h2 className="main-description">I'm a Full Stack Web Developer</h2>
      </div>
    </section>
  );
}

export default Main;
