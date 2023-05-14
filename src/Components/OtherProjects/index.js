import React from 'react';
import HTML from '../../assets/other/html5.svg';
import CSS from '../../assets/other/css3.svg';

function OtherProjects() {
  return (
    <section id="OtherProjects" className="other-projects-section pt-16">
      <header className="text-center other-projects-header">
        OTHER PROJECTS
      </header>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        <li className="other-project flex flex-col">
          <header className="other-project-header text-center">
            Run Buddy
          </header>
          <div className="mb-6">
            <p className="other-project-description">
              Run Buddy is a website that offers fitness training services. This
              was the first website I ever created and is created using purely
              HTML and CSS.
            </p>
          </div>
          <ul className="flex mx-2">
            <li className="other-project-tech-list">
              <img src={HTML} alt="HTML icon" />
            </li>
            <li className="other-project-tech-list">
              <img src={CSS} alt="HTML icon" />
            </li>
          </ul>
          <ul className="flex justify-center mb-4">
            <li className="mx-4 link-icon" title="GitHub Repo">
              <a href="https://github.com/ScarElite/run-buddy" target="blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="mx-4 link-icon" title="Website">
              <a href="https://scarelite.github.io/run-buddy/" target="blank">
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </li>
          </ul>
          <div className="flex mx-2">
            <h1 className="other-project-updated-header">Last Updated:</h1>
            <h2 className="other-updated">July 21, 2022</h2>
          </div>
        </li>
        <li className="other-project"></li>
        <li className="other-project"></li>
        <li className="other-project"></li>
        <li className="other-project"></li>
        <li className="other-project"></li>
      </ul>
    </section>
  );
}

export default OtherProjects;
