import React from 'react';
import NobleOak from '../../assets/images/Noble-Oak-Solutions-Preview.JPG';
import OurPlace from '../../assets/images/OurPlace-preview.JPG';
import AlternativeEndings from '../../assets/images/Alternative-Endings-Preview.JPG';
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
    <section id="Projects">
      <header className="text-center projects-header">PROJECTS</header>
      <ul className="project-list mt-20 flex flex-col justify-center">
        <li className="project flex justify-center mb-40">
          <div className="project-preview">
            <a href="https://noble-oak.com/" target="blank">
              <img src={NobleOak} alt="project" className="project-img" />
            </a>
          </div>
          <div className="project-overview flex flex-col justify-between">
            <div className="mb-4">
              <div className="flex justify-between items-center project-top-info">
                <header className="project-title flex mb-2">
                  Noble Oak Solutions
                </header>
                <span className="project-tag">Most Recent</span>
              </div>
              <p className="project-description">
                Noble Oak Solutions is a real estate company looking to help
                those in NC. They are a brand new company and this is their
                first website. They wanted to keep it simple for now and to give
                potential clients a way to contact them whether it's to ask a
                few questions or get in touch with someone who can help them
                with the services they offer. I worked with{' '}
                <span className="dev-name">
                  <a href="https://github.com/DavidDowell" target="blank">
                    {' '}
                    David Dowell{' '}
                  </a>
                </span>
                and together we created this website and went through a few
                iterations to fit what they wanted until they were happy with
                the end result.
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
                  </ul>
                </div>
                <div className="mb-4 flex flex-col project-links-section">
                  <h1 className="project-links mb-2">Links:</h1>
                  <ul className="flex">
                    <li className="mx-2 link-icon" title="GitHub Repo">
                      <a
                        href="https://github.com/DavidDowell/noble-oak-solutions"
                        target="blank"
                      >
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li className="mx-2 link-icon" title="Website">
                      <a href="https://noble-oak.com/" target="blank">
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project-tech-section flex flex-col">
                <h2 className="project-tech mb-2">Technologies Used:</h2>
                <ul className="project-tech-list flex">
                  <li className="mx-1">
                    <img src={HTML} alt="HTML Icon" title="HTML" />
                  </li>
                  <li className="mx-1">
                    <img src={CSS} alt="CSS Icon" title="CSS" />
                  </li>
                  <li className="mx-1">
                    <img
                      src={JavaScript}
                      alt="JavaScript Icon"
                      title="JavaScript"
                    />
                  </li>
                  <li className="mx-1">
                    <img src={react} alt="React Icon" title="React" />
                  </li>
                  <li className="mx-1">
                    <img
                      src={tailwindcss}
                      alt="TailwindCSS Icon"
                      title="TailwindCSS"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li className="project flex justify-center mb-40">
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
                    <li className="mx-2 link-icon" title="GitHub Repo">
                      <a
                        href="https://github.com/awchen85/project-3"
                        target="blank"
                      >
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li className="mx-2 link-icon" title="Website">
                      <a
                        href="https://p3-our-place.herokuapp.com/"
                        target="blank"
                      >
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project-tech-section flex flex-col">
                <h2 className="project-tech mb-2">Technologies Used:</h2>
                <ul className="project-tech-list flex">
                  <li className="mx-1">
                    <img src={HTML} alt="HTML Icon" title="HTML" />
                  </li>
                  <li className="mx-1">
                    <img src={CSS} alt="CSS Icon" title="CSS" />
                  </li>
                  <li className="mx-1">
                    <img
                      src={JavaScript}
                      alt="JavaScript Icon"
                      title="JavaScript"
                    />
                  </li>
                  <li className="mx-1">
                    <img src={react} alt="React Icon" title="React" />
                  </li>
                  <li className="mx-1">
                    <img
                      src={tailwindcss}
                      alt="TailwindCSS Icon"
                      title="TailwindCSS"
                    />
                  </li>
                  <li className="mx-1">
                    <img src={MongoDB} alt="MongoDB Icon" title="MongoDB" />
                  </li>
                  <li className="mx-1">
                    <img src={GraphQL} alt="GraphQL Icon" title="GraphQL" />
                  </li>
                  <li className="mx-1">
                    <img
                      src={ExpressJS}
                      alt="ExpressJS Icon"
                      title="ExpressJS"
                    />
                  </li>
                  <li className="mx-1">
                    <img src={NodeJS} alt="NodeJS Icon" title="NodeJS" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="project-preview">
            <a href="https://p3-our-place.herokuapp.com/" target="blank">
              <img src={OurPlace} alt="project" className="project-img" />
            </a>
          </div>
        </li>

        <li className="project flex justify-center mb-40">
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
                    <li className="mx-2 link-icon" title="GitHub Repo">
                      <a
                        href="https://github.com/ScarElite/Alternative-Endings"
                        target="blank"
                      >
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li className="mx-2 link-icon" title="Website">
                      <a
                        href="https://alternative-endings.herokuapp.com/"
                        target="blank"
                      >
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project-tech-section flex flex-col">
                <h2 className="project-tech mb-2">Technologies Used:</h2>
                <ul className="project-tech-list flex">
                  <li className="mx-1">
                    <img src={HTML} alt="HTML Icon" title="HTML" />
                  </li>
                  <li className="mx-1">
                    <img src={CSS} alt="CSS Icon" title="CSS" />
                  </li>
                  <li className="mx-1">
                    <img
                      src={JavaScript}
                      alt="JavaScript Icon"
                      title="JavaScript"
                    />
                  </li>
                  <li className="mx-1">
                    <img src={jQuery} alt="jQuery Icon" title="jQuery" />
                  </li>
                  <li className="mx-1">
                    <img
                      src={Bootstrap}
                      alt="Bootstrap Icon"
                      title="Bootstrap"
                    />
                  </li>
                  <li className="mx-1">
                    <img
                      src={ExpressJS}
                      alt="ExpressJS Icon"
                      title="ExpressJS"
                    />
                  </li>
                  <li className="mx-1">
                    <img src={NodeJS} alt="NodeJS Icon" title="NodeJS" />
                  </li>
                  <li className="mx-1">
                    <img src={MySQL} alt="MySQL Icon" title="MySQL" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
