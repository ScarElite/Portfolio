import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import NobleOak from '../../assets/images/NOS.svg';
import OurPlace from '../../assets/images/OurPlace.svg';
import AlternativeEndings from '../../assets/images/AE.svg';
import MealMaker from '../../assets/images/MealMaker.svg';
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
import handlebarsJS from '../../assets/other/handlebars.svg';

function Projects() {
  return (
    <section id="Projects" className="projects-section">
      <header className="text-center projects-header">PROJECTS</header>
      <Slider
        className="project-slider"
        dots={true}
        infinite={false}
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
                      href="https://github.com/DavidDowell/noble-oak-solutions"
                      target="blank"
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </div>
                  <div className="mx-2 link-icon" title="Website">
                    <a href="https://noble-oak.com/" target="blank">
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

        <div className="project">
          <div className="project-overview flex flex-col justify-center mt-10">
            <header className="project-type">SOCIAL APPLICATION</header>
            <h1 className="project-title mb-4">Our Place</h1>
            <p className="project-description mb-8">
              OurPlace was developed to be a roommate finder for people that can
              not cover rent and need a way to vet potential roommates.
            </p>
            <p className="project-team">Worked With: </p>
            <div className="mb-6 flex">
              <a
                href="https://github.com/DavidDowell"
                target="blank"
                className="project-team-member mx-4"
              >
                <span title="https://github.com/DavidDowell">David Dowell</span>
              </a>
              <a
                href="https://github.com/pmacdonald07"
                target="blank"
                className="project-team-member mx-4"
              >
                <span title="https://github.com/pmacdonald07">
                  Patrick MacDonald
                </span>
              </a>
              <a
                href="https://github.com/awchen85"
                target="blank"
                className="project-team-member mx-4"
              >
                <span title="https://github.com/awchen85">Alex Chen</span>
              </a>
              <a
                href="https://github.com/hartsfieldt"
                target="blank"
                className="project-team-member mx-4"
              >
                <span title="https://github.com/hartsfieldt">
                  Teresa Hartsfield
                </span>
              </a>
            </div>
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
                <div className="mx-1">
                  <img
                    src={MongoDB}
                    alt="MongoDB Icon"
                    title="MongoDB"
                    className="project-tech-item"
                  />
                </div>
                <div className="mx-1">
                  <img
                    src={GraphQL}
                    alt="GraphQL Icon"
                    title="GraphQL"
                    className="project-tech-item"
                  />
                </div>
                <div className="mx-1">
                  <img
                    src={ExpressJS}
                    alt="ExpressJS Icon"
                    title="ExpressJS"
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
            <a href="https://p3-our-place.herokuapp.com/" target="blank">
              <img src={OurPlace} alt="project" className="project-img" />
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project-overview flex flex-col justify-center mt-10">
            <header className="project-type">SOCIAL APPLICATION</header>
            <h1 className="project-title mb-4">Alternative Endings</h1>
            <p className="project-description mb-8">
              Alternative Endings is a platform for movie buffs to blog their
              alternative ending to a movie. Other users can interact with these
              posts. The application also has info about upcoming movies and
              those already in theaters. Get detailed info about any movie by
              using the search feature.
            </p>
            <p className="project-team">Worked With: </p>
            <div className="mb-6 flex">
              <a
                href="https://github.com/hartsfieldt"
                target="blank"
                className="project-team-member mx-4"
              >
                <span title="https://github.com/hartsfieldt">
                  Teresa Hartsfield
                </span>
              </a>
              <a
                href="https://github.com/taholton748"
                target="blank"
                className="project-team-member mx-4"
              >
                <span title="https://github.com/taholton748">Tyler Holton</span>
              </a>
              <a
                href="https://github.com/ashleymullikin"
                target="blank"
                className="project-team-member mx-4"
              >
                <span title="https://github.com/ashleymullikin">
                  Ashley Mullikin
                </span>
              </a>
            </div>
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
                    src={jQuery}
                    alt="jQuery Icon"
                    title="jQuery"
                    className="project-tech-item"
                  />
                </div>
                <div className="mx-1">
                  <img
                    src={handlebarsJS}
                    alt="handlebarsJS Icon"
                    title="handlebarsJS"
                    className="project-tech-item"
                  />
                </div>
                <div className="mx-1">
                  <img
                    src={Bootstrap}
                    alt="Bootstrap Icon"
                    title="Bootstrap"
                    className="project-tech-item"
                  />
                </div>
                <div className="mx-1">
                  <img
                    src={NodeJS}
                    alt="NodeJS Icon"
                    title="NodeJS"
                    className="project-tech-item"
                  />
                </div>
                <div className="mx-1">
                  <img
                    src={MySQL}
                    alt="MySQL Icon"
                    title="MySQL"
                    className="project-tech-item"
                  />
                </div>
                <div className="mx-1">
                  <img
                    src={ExpressJS}
                    alt="ExpressJS Icon"
                    title="ExpressJS"
                    className="project-tech-item"
                  />
                </div>
              </ul>
              <div className="flex">
                <h2 className="project-links mr-2">Links:</h2>
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
            </div>
          </div>
          <div className="project-preview flex content-center">
            <a href="https://alternative-endings.herokuapp.com/" target="blank">
              <img
                src={AlternativeEndings}
                alt="project"
                className="project-img"
              />
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project-overview flex flex-col justify-center mt-10">
            <header className="project-type">RECIPE APPLICATION</header>
            <h1 className="project-title mb-4">Meal Maker</h1>
            <p className="project-description mb-8">
              Alternative Endings is a platform for movie buffs to blog their
              alternative ending to a movie. Other users can interact with these
              posts. The application also has info about upcoming movies and
              those already in theaters. Get detailed info about any movie by
              using the search feature.
            </p>
            <p className="project-team">Worked With: </p>
            <div className="mb-6 flex">
              <a
                href="https://github.com/DavidDowell"
                target="blank"
                className="project-team-member mx-4"
              >
                <span title="https://github.com/DavidDowell">David Dowell</span>
              </a>
              <a
                href="https://github.com/pmacdonald07"
                target="blank"
                className="project-team-member mx-4"
              >
                <span title="https://github.com/pmacdonald07">
                  Patrick MacDonald
                </span>
              </a>
              <a
                href="https://github.com/awchen85"
                target="blank"
                className="project-team-member mx-4"
              >
                <span title="https://github.com/awchen85">Alex Chen</span>
              </a>
            </div>
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
                    src={jQuery}
                    alt="jQuery Icon"
                    title="jQuery"
                    className="project-tech-item"
                  />
                </div>
              </ul>
              <div className="flex">
                <h2 className="project-links mr-2">Links:</h2>
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
            </div>
          </div>
          <div className="project-preview flex content-center">
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
