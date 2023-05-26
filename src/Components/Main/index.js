import React from 'react';
// import Video from '../../assets/videos/bg-test.mp4';
// import Video2 from '../../assets/videos/bg-test2.mp4';
import Video3 from '../../assets/videos/bg-test3.mp4';
import { Link } from 'react-scroll';

function Main() {
  return (
    <section id="Main" className="text-center flex justify-center">
      <video autoPlay loop muted>
        <source src={Video3} type="video/mp4" />
      </video>
      <div className="flex flex-col main-div">
        <h1 className="main-header text-9xl mb-8">Hello, I'm Mitchell!</h1>
        <h2 className="main-description text-4xl">
          I'm a Full Stack Web Developer
        </h2>
        <Link
          to="About"
          smooth={true}
          duration={2000}
          offset={50}
          className="main-button mt-8"
        >
          View My Work <i class="fa-solid fa-arrow-right right-arrow ml-2"></i>
        </Link>
      </div>
    </section>
  );
}

export default Main;
