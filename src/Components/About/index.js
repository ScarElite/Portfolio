import React from 'react';
import logo from '../../assets/images/MA-logo.svg';
import communication from '../../assets/other/communication.svg';
import responsive from '../../assets/other/responsive.svg';
import problemSolver from '../../assets/other/problemSolver.svg';
import timeManagement from '../../assets/other/timeManagement.svg';
import HTML from '../../assets/icons/html5.svg';
import CSS from '../../assets/icons/css.svg';
import TailwindCSS from '../../assets/icons/tailwind-css.svg';
import Bootstrap from '../../assets/icons/bootstrap.svg';
import JavaScript from '../../assets/icons/javascript.svg';
import jQuery from '../../assets/icons/jquery.svg';
import ReactJS from '../../assets/icons/react.svg';
import NodeJS from '../../assets/icons/node-js.svg';
import Python from '../../assets/icons/python.svg';
import MongoDB from '../../assets/icons/mongodb.svg';
import GraphQL from '../../assets/icons/graphql.svg';
import MySQL from '../../assets/icons/mysql.svg';
import NoSQL from '../../assets/icons/nosql.svg';
import HandlebarsJS from '../../assets/icons/handlebars.svg';
import Git from '../../assets/icons/git.svg';
import VSCode from '../../assets/icons/visual-studio-code.svg';
import Heroku from '../../assets/icons/heroku.svg';
import Canva from '../../assets/icons/canva.svg';
import pfp from '../../assets/images/pfp.jpg';
import { Link } from 'react-scroll';

function About() {
  return (
    <section id="About" className="about-section flex flex-col items-center">
      <div className="flex flex-col items-center">
        <header className="about-header text-center">About</header>
        <div className="section-line"></div>
      </div>
      <div className="about-icon-list flex justify-between mt-10">
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
      <div className="flex flex-col items-center about-info mt-10">
        <article className="top-side flex flex-col px-20">
          <div className="">
            <header className="skills-header text-center text-6xl mb-3">
              Skills & Experience
            </header>
            <div className="skills-description-container text-center flex flex-col items-center">
              <h1 className="skills-description-header text-xl">
                I am a Fullstack Web Developer and am comfortable doing either
                front end or back end.
              </h1>
              <p className="skills-description text-md mt-4">
                I use many different languages and tools to help me create
                websites that people will like. I'm constantly improving and
                learning different skills to expand my knowledge and expertise.
                I'm looking to continue my growth and continue to add more
                projects to my portfolio to showcase what I can do. I am a good
                problem solver and am always up for a challenge.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="skills flex flex-wrap justify-center items-center mt-8">
                <div className="skill flex flex-col items-center m-2">
                  <img src={HTML} alt="skill" className="skill-icon" />
                  <p className="text-center">HTML</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={CSS} alt="skill" className="skill-icon" />
                  <p className="text-center">CSS</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={TailwindCSS} alt="skill" className="skill-icon" />
                  <p className="text-center">TailwindCSS</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={Bootstrap} alt="skill" className="skill-icon" />
                  <p className="text-center">Bootstrap</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={JavaScript} alt="skill" className="skill-icon" />
                  <p className="text-center">JavaScript</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={jQuery} alt="skill" className="skill-icon" />
                  <p className="text-center">jQuery</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={ReactJS} alt="skill" className="skill-icon" />
                  <p className="text-center">React</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={NodeJS} alt="skill" className="skill-icon" />
                  <p className="text-center">NodeJS</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={Python} alt="skill" className="skill-icon" />
                  <p className="text-center">Python</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={MongoDB} alt="skill" className="skill-icon" />
                  <p className="text-center">MongoDB</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={GraphQL} alt="skill" className="skill-icon" />
                  <p className="text-center">GraphQL</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={MySQL} alt="skill" className="skill-icon" />
                  <p className="text-center">MySQL</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={NoSQL} alt="skill" className="skill-icon" />
                  <p className="text-center">NoSQL</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={HandlebarsJS} alt="skill" className="skill-icon" />
                  <p className="text-center">HandlebarsJS</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={Git} alt="skill" className="skill-icon" />
                  <p className="text-center">Git</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={VSCode} alt="skill" className="skill-icon" />
                  <p className="text-center">Visual Studio</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={Heroku} alt="skill" className="skill-icon" />
                  <p className="text-center">Heroku</p>
                </div>
                <div className="skill flex flex-col items-center m-2">
                  <img src={Canva} alt="skill" className="skill-icon" />
                  <p className="text-center">Canva</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="bottom-side flex justify-around items-center mt-20">
          <img src={pfp} alt="pfp" className="pfp" />
          <div className="flex flex-col items-center">
            <p className="about-description text-center text-2xl">
              I'm a graduate of the UNC Chapel Hill Coding BootCamp that teaches
              students how to become a Fullstack Web Developer. I absolutely
              love coding and I'm excited for all of the things I will create!
              I've worked with some great web developers during my time in the
              BootCamp and I'm eager to work with other developers outside of
              that!{' '}
            </p>
            <Link to="Contact">
              <span className="about-description-span text-2xl">
                Let's make something awesome!
              </span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
