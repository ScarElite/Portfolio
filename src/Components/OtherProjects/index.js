import React from 'react';

function OtherProjects() {
  return (
    <section id="OtherProjects" className="other-projects-section pt-16">
      <header className="text-center other-projects-header">
        OTHER PROJECTS
      </header>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        <a href="https://hidden-bastion-66681.herokuapp.com/" target="blank">
          <li className="other-project flex flex-col">
            <div className="flex justify-between mb-4">
              <h1 className="other-project-type pt-1">SOLO</h1>
              <ul className="flex">
                <div className="mx-2 other-link-icon" title="GitHub Repo">
                  <a
                    href="https://github.com/ScarElite/Text-Editor-PWA"
                    target="blank"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className="mx-2 other-link-icon" title="Website">
                  <a
                    href="https://hidden-bastion-66681.herokuapp.com/"
                    target="blank"
                  >
                    <i class="fa-solid fa-up-right-from-square"></i>
                  </a>
                </div>
              </ul>
            </div>
            <h1 className="other-project-title mb-4">
              J.A.T.E - Just Another Text Editor
            </h1>
            <p className="other-project-description">
              JATE is a Progressive Web Application (PWA) that gives users a
              text editor in the browser. It persists data that you input and
              you can also click the install button to have it on your computer
              to have access to it anytime you want.
            </p>
            <ul className="other-project-tech-list flex pt-8">
              <li className="other-project-tech mr-2">HTML</li>
              <li className="other-project-tech mx-2">CSS</li>
              <li className="other-project-tech mx-2">JavaScript</li>
              <li className="other-project-tech mx-2">ExpressJS</li>
              <li className="other-project-tech mx-2">Heroku</li>
            </ul>
          </li>
        </a>
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
