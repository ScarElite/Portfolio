import React from 'react';
import NobleOak from '../../assets/images/Noble-Oak-Solutions-Preview.JPG';

function Projects() {
  return (
    <section id="Projects">
      <header className="text-center projects-header">PROJECTS</header>
      <ul className="project-list mt-20 flex flex-col justify-center">
        <li className="project flex justify-center">
          <div className="project-preview">
            <img src={NobleOak} alt="project" className="project-img" />
          </div>
          <div className="project-overview">
            <div className="mb-6">
              <header className="project-title mb-2">
                Noble Oak Solutions
              </header>
              <p className="project-description">
                Noble Oak Solutions is a real estate company looking to help
                those in NC. This was the 1st project in the UNC Chapel Hill
                Coding BootCamp and was a collaborative project. I worked on
                this project with 3 other developers who helped create this. We
                all did our fair share of work, had a ton of communication, and
                I loved working with these guys. I worked on both the front end
                and the backend and dealt with most of the API calls and data.
                Overall this was a great experience and I learned a lot about
                working with other developers.
              </p>
            </div>
            <div>
              <h1 className="project-team">Team Size:</h1>
              <h2 className="project-tech">Technologies Used:</h2>
              <ul className="project-tech-list flex">
                <li className="mx-2">HTML</li>
                <li className="mx-2">CSS</li>
                <li className="mx-2">JavaScript</li>
                <li className="mx-2">React</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
