import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import NobleOak from '../../assets/images/NOS.svg';
import OurPlace from '../../assets/images/OurPlace-preview.JPG';
import AlternativeEndings from '../../assets/images/Alternative-Endings-Preview.JPG';
import MealMaker from '../../assets/images/MealMaker.PNG';
import HTML from '../../assets/other/html5.svg';
import CSS from '../../assets/other/css3.svg';
import JavaScript from '../../assets/other/javascript.svg';
import react from '../../assets/other/react.svg';
import tailwindcss from '../../assets/other/tailwind-css.svg';
import MongoDB from '../../assets/other/mongodb.svg';
import GraphQL from '../../assets/other/graphql.svg';
import ExpressJS from '../../assets/other/express.svg';
import NodeJS from '../../assets/other/node-js.svg';
import Bootstrap from '../../assets/other/bootstrap.svg';
import jQuery from '../../assets/other/jquery.svg';
import MySQL from '../../assets/other/mysql.svg';

function Projects() {
  return (
    <section id="Projects" className="projects-section">
      <header className="text-center projects-header">PROJECTS</header>
      <Slider
        className="project-slider"
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        <div className="project">
          <div className="project-overview flex flex-col justify-center mt-10">
            <header className="project-type">REAL ESTATE APPLICATION</header>
            <h1 className="project-title mb-4">Noble Oak Solutions</h1>
            <p className="project-description mb-8">
              Noble Oak Solutions is a brand new real estate company looking to
              help those in NC.
            </p>
            <p className="project-team mb-6">
              Worked With:{' '}
              <a
                href="https://github.com/DavidDowell"
                target="blank"
                className="project-team-member mx-4"
              >
                <span title="https://github.com/DavidDowell">David Dowell</span>
              </a>
            </p>
            <div className="project-tech-section flex flex-col">
              <h2 className="project-tech mb-2">Built With:</h2>
              <ul className="project-tech-list flex mb-8">
                <div className="mx-1">
                  <img
                    src={HTML}
                    alt="HTML Icon"
                    title="HTML"
                    className="project-tech-item"
                  />
                </div>
                <div className="mx-1">
                  <img
                    src={CSS}
                    alt="CSS Icon"
                    title="CSS"
                    className="project-tech-item"
                  />
                </div>
                <div className="mx-1">
                  <img
                    src={JavaScript}
                    alt="JavaScript Icon"
                    title="JavaScript"
                    className="project-tech-item"
                  />
                </div>
                <div className="mx-1">
                  <img
                    src={react}
                    alt="React Icon"
                    title="React"
                    className="project-tech-item"
                  />
                </div>
                <div className="mx-1">
                  <img
                    src={tailwindcss}
                    alt="TailwindCSS Icon"
                    title="TailwindCSS"
                    className="project-tech-item"
                  />
                </div>
              </ul>
              <div className="flex">
                <h2 className="project-links mr-2">Links:</h2>
                <ul className="flex">
                  <div className="mx-2 link-icon" title="GitHub Repo">
                    <a
                      href="https://github.com/awchen85/project-3"
                      target="blank"
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </div>
                  <div className="mx-2 link-icon" title="Website">
                    <a
                      href="https://p3-our-place.herokuapp.com/"
                      target="blank"
                    >
                      <i class="fa-solid fa-up-right-from-square"></i>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="project-preview flex content-center">
            <a href="https://noble-oak.com/" target="blank">
              <img src={NobleOak} alt="project" className="project-img" />
            </a>
          </div>
        </div>

        <div className="project flex justify-center mb-40">
          <div className="project-overview-reverse flex flex-col justify-between">
            <div className="mb-4">
              <div className="flex justify-between items-center project-top-info">
                <header className="project-title mb-2">Our Place</header>
                <span className="project-tag">Featured</span>
              </div>
              <p className="project-description">
                This was the final project in the UNC Chapel Hill Coding
                BootCamp and was a collaborative project. I worked on this
                project with{' '}
                <span className="dev-name">
                  <a href="https://github.com/DavidDowell" target="blank">
                    David Dowell,
                  </a>
                </span>{' '}
                <span className="dev-name">
                  <a href="https://github.com/pmacdonald07" target="blank">
                    Patrick MacDonald,
                  </a>
                </span>{' '}
                <span className="dev-name">
                  <a href="https://github.com/awchen85" target="blank">
                    Alex Chen,
                  </a>
                </span>{' '}
                and
                <span className="dev-name">
                  <a href="https://github.com/hartsfieldt" target="blank">
                    {' '}
                    Teresa Hartsfield
                  </a>
                </span>
                . OurPlace was developed to be a roommate finder for people that
                can not cover rent and need a way to vet potential roommates.
                Once registered the user can comb through the home page and look
                for potential roommate candidates and can use filters to find
                the perfect match for themselves.
              </p>
            </div>
            <div>
              <div className="flex">
                <div className="mb-4 flex flex-col project-team-section">
                  <h1 className="project-team mb-2">Team Size:</h1>
                  <ul className="flex">
                    <i
                      class="fa-solid fa-user mx-1 user-icon"
                      title="Mitchell Armstrong"
                    ></i>
                    <i
                      class="fa-solid fa-user mx-1 user-icon"
                      title="David Dowell"
                    ></i>
                    <i
                      class="fa-solid fa-user mx-1 user-icon"
                      title="Patrick MacDonald"
                    ></i>
                    <i
                      class="fa-solid fa-user mx-1 user-icon"
                      title="Alex Chen"
                    ></i>
                    <i
                      class="fa-solid fa-user mx-1 user-icon"
                      title="Teresa Hartsfield"
                    ></i>
                  </ul>
                </div>
                <div className="mb-4 flex flex-col project-links-section">
                  <h1 className="project-links mb-2">Links:</h1>
                  <ul className="flex">
                    <div className="mx-2 link-icon" title="GitHub Repo">
                      <a
                        href="https://github.com/awchen85/project-3"
                        target="blank"
                      >
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </div>
                    <div className="mx-2 link-icon" title="Website">
                      <a
                        href="https://p3-our-place.herokuapp.com/"
                        target="blank"
                      >
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                  </ul>
                </div>
                <div className="mb-4 flex flex-col project-updated-section">
                  <h1 className="mb-2 project-updated-header">Last Updated:</h1>
                  <h2 className="updated">March 27, 2023</h2>
                </div>
              </div>
              <div className="project-tech-section flex flex-col">
                <h2 className="project-tech mb-2">Technologies Used:</h2>
                <ul className="project-tech-list flex">
                  <div className="mx-1">
                    <img src={HTML} alt="HTML Icon" title="HTML" />
                  </div>
                  <div className="mx-1">
                    <img src={CSS} alt="CSS Icon" title="CSS" />
                  </div>
                  <div className="mx-1">
                    <img
                      src={JavaScript}
                      alt="JavaScript Icon"
                      title="JavaScript"
                    />
                  </div>
                  <div className="mx-1">
                    <img src={react} alt="React Icon" title="React" />
                  </div>
                  <div className="mx-1">
                    <img
                      src={tailwindcss}
                      alt="TailwindCSS Icon"
                      title="TailwindCSS"
                    />
                  </div>
                  <div className="mx-1">
                    <img src={MongoDB} alt="MongoDB Icon" title="MongoDB" />
                  </div>
                  <div className="mx-1">
                    <img src={GraphQL} alt="GraphQL Icon" title="GraphQL" />
                  </div>
                  <div className="mx-1">
                    <img
                      src={ExpressJS}
                      alt="ExpressJS Icon"
                      title="ExpressJS"
                    />
                  </div>
                  <div className="mx-1">
                    <img src={NodeJS} alt="NodeJS Icon" title="NodeJS" />
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="project-preview">
            <a href="https://p3-our-place.herokuapp.com/" target="blank">
              <img src={OurPlace} alt="project" className="project-img" />
            </a>
          </div>
        </div>

        <div className="project flex justify-center mb-40">
          <div className="project-preview">
            <a href="https://alternative-endings.herokuapp.com/" target="blank">
              <img
                src={AlternativeEndings}
                alt="project"
                className="project-img"
              />
            </a>
          </div>
          <div className="project-overview flex flex-col justify-between">
            <div className="mb-4">
              <div className="flex justify-between items-center project-top-info">
                <header className="project-title flex mb-2">
                  Alternative Endings
                </header>
                <span className="project-tag">Featured</span>
              </div>
              <p className="project-description">
                This was the 2nd project in the UNC Chapel Hill Coding BootCamp
                and was a collaborative project. I worked on this project with{' '}
                <span className="dev-name">
                  <a href="https://github.com/hartsfieldt" target="blank">
                    Teresa Hartsfield,
                  </a>
                </span>{' '}
                <span className="dev-name">
                  <a href="https://github.com/taholton748" target="blank">
                    Tyler Holton,
                  </a>
                </span>{' '}
                and
                <span className="dev-name">
                  <a href="https://github.com/ashleymullikin" target="blank">
                    {' '}
                    Ashley Mullikin
                  </a>
                </span>
                . I primarily worked on the backend and using the API data that
                we called on from "TheMovieDB". This website shows users
                upcoming movies as well as movies already in theaters now. You
                can also sign up and post your alternative ending to a movie and
                see if people agree with you. It's a great way to show your
                creative writing as well!
              </p>
            </div>
            <div>
              <div className="flex">
                <div className="mb-4 flex flex-col project-team-section">
                  <h1 className="project-team mb-2">Team Size:</h1>
                  <ul className="flex">
                    <i
                      class="fa-solid fa-user mx-1 user-icon"
                      title="Mitchell Armstrong"
                    ></i>
                    <i
                      class="fa-solid fa-user mx-1 user-icon"
                      title="Teresa Hartsfield"
                    ></i>
                    <i
                      class="fa-solid fa-user mx-1 user-icon"
                      title="Tyler Holton"
                    ></i>
                    <i
                      class="fa-solid fa-user mx-1 user-icon"
                      title="Ashley Mullikin"
                    ></i>
                  </ul>
                </div>
                <div className="mb-4 flex flex-col project-links-section">
                  <h1 className="project-links mb-2">Links:</h1>
                  <ul className="flex">
                    <div className="mx-2 link-icon" title="GitHub Repo">
                      <a
                        href="https://github.com/ScarElite/Alternative-Endings"
                        target="blank"
                      >
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </div>
                    <div className="mx-2 link-icon" title="Website">
                      <a
                        href="https://alternative-endings.herokuapp.com/"
                        target="blank"
                      >
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                  </ul>
                </div>
                <div className="mb-4 flex flex-col project-updated-section">
                  <h1 className="mb-2 project-updated-header">Last Updated:</h1>
                  <h2 className="updated">Nov. 14, 2022</h2>
                </div>
              </div>
              <div className="project-tech-section flex flex-col">
                <h2 className="project-tech mb-2">Technologies Used:</h2>
                <ul className="project-tech-list flex">
                  <div className="mx-1">
                    <img src={HTML} alt="HTML Icon" title="HTML" />
                  </div>
                  <div className="mx-1">
                    <img src={CSS} alt="CSS Icon" title="CSS" />
                  </div>
                  <div className="mx-1">
                    <img
                      src={JavaScript}
                      alt="JavaScript Icon"
                      title="JavaScript"
                    />
                  </div>
                  <div className="mx-1">
                    <img src={jQuery} alt="jQuery Icon" title="jQuery" />
                  </div>
                  <div className="mx-1">
                    <img
                      src={Bootstrap}
                      alt="Bootstrap Icon"
                      title="Bootstrap"
                    />
                  </div>
                  <div className="mx-1">
                    <img
                      src={ExpressJS}
                      alt="ExpressJS Icon"
                      title="ExpressJS"
                    />
                  </div>
                  <div className="mx-1">
                    <img src={NodeJS} alt="NodeJS Icon" title="NodeJS" />
                  </div>
                  <div className="mx-1">
                    <img src={MySQL} alt="MySQL Icon" title="MySQL" />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="project flex justify-center mb-40">
          <div className="project-overview-reverse flex flex-col justify-between">
            <div className="mb-4">
              <div className="flex justify-between items-center project-top-info">
                <header className="project-title mb-2">Meal Maker</header>
                <span className="project-tag">Featured</span>
              </div>
              <p className="project-description">
                This was the 1st project in the UNC Chapel Hill Coding BootCamp
                and was a collaborative project. I worked on this project with{' '}
                <span className="dev-name">
                  <a href="https://github.com/DavidDowell" target="blank">
                    David Dowell,
                  </a>
                </span>{' '}
                <span className="dev-name">
                  <a href="https://github.com/pmacdonald07" target="blank">
                    Patrick MacDonald,
                  </a>
                </span>{' '}
                and
                <span className="dev-name">
                  <a href="https://github.com/awchen85" target="blank">
                    Alex Chen
                  </a>
                </span>
                . We all did our fair share of work, had a ton of communication,
                and I loved working with these guys. I worked on both the front
                end and the backend and dealt with most of the API calls and
                data. Overall this was a great experience and I learned a lot
                about working with other developers.
              </p>
            </div>
            <div>
              <div className="flex">
                <div className="mb-4 flex flex-col project-team-section">
                  <h1 className="project-team mb-2">Team Size:</h1>
                  <ul className="flex">
                    <i
                      class="fa-solid fa-user mx-1 user-icon"
                      title="Mitchell Armstrong"
                    ></i>
                    <i
                      class="fa-solid fa-user mx-1 user-icon"
                      title="David Dowell"
                    ></i>
                    <i
                      class="fa-solid fa-user mx-1 user-icon"
                      title="Patrick MacDonald"
                    ></i>
                    <i
                      class="fa-solid fa-user mx-1 user-icon"
                      title="Alex Chen"
                    ></i>
                  </ul>
                </div>
                <div className="mb-4 flex flex-col project-links-section">
                  <h1 className="project-links mb-2">Links:</h1>
                  <ul className="flex">
                    <div className="mx-2 link-icon" title="GitHub Repo">
                      <a
                        href="https://github.com/ScarElite/Meal-Maker"
                        target="blank"
                      >
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </div>
                    <div className="mx-2 link-icon" title="Website">
                      <a
                        href="https://pmacdonald07.github.io/Meal-Maker/"
                        target="blank"
                      >
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                  </ul>
                </div>
                <div className="mb-4 flex flex-col project-updated-section">
                  <h1 className="mb-2 project-updated-header">Last Updated:</h1>
                  <h2 className="updated">Sep. 14, 2022</h2>
                </div>
              </div>
              <div className="project-tech-section flex flex-col">
                <h2 className="project-tech mb-2">Technologies Used:</h2>
                <ul className="project-tech-list flex">
                  <div className="mx-1">
                    <img src={HTML} alt="HTML Icon" title="HTML" />
                  </div>
                  <div className="mx-1">
                    <img src={CSS} alt="CSS Icon" title="CSS" />
                  </div>
                  <div className="mx-1">
                    <img
                      src={JavaScript}
                      alt="JavaScript Icon"
                      title="JavaScript"
                    />
                  </div>
                  <div className="mx-1">
                    <img src={jQuery} alt="jQuery Icon" title="jQuery" />
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="project-preview">
            <a href="https://pmacdonald07.github.io/Meal-Maker/" target="blank">
              <img src={MealMaker} alt="project" className="project-img" />
            </a>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Projects;
