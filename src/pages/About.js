import React from "react";

function About() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">About Me</h2>
      <div className="row">
        <div className="col-md-6">
          <p>
            <strong>Hashim A. Mohamed</strong>
            <br />
            <strong>Address:</strong> 11015 Bren Rd. E. Minnetonka, MN, 55343
            <br />
            <strong>E-mail & Phone:</strong> Hashim6409@gmail.com, 612 267 7463
          </p>

          <h3>Career Objective</h3>
          <p>
            I'm a results-driven full-stack web developer with a strong
            foundation gained from successfully completing a rigorous 6-month
            bootcamp at the University of Minnesota. As a recent graduate, I
            bring a fresh perspective and a passion for creating dynamic and
            user-friendly web applications. My training has equipped me with a
            comprehensive skill set, including proficiency in both front-end and
            back-end technologies. My experience in project-based learning has
            taught me how to efficiently analyze requirements, design elegant
            solutions, and implement features that align with the client's
            vision. I thrive in collaborative environments and enjoy working
            with diverse teams to bring projects to life. My ability to adapt
            quickly, embrace new technologies, and stay updated on industry
            trends allows me to create innovative and efficient solutions.
            During my bootcamp, I honed my problem-solving skills, allowing me
            to overcome challenges and implement best practices in web
            development. I'm enthusiastic about creating seamless user
            experiences, optimizing performance, and continuously improving the
            codebase. I am also experienced in working with databases, APIs, and
            integrating third-party services. My dedication to continuous
            learning drives me to explore new tools and frameworks, keeping me
            at the forefront of modern web development. I am excited to
            contribute to the success of any project I'm involved in, and I'm
            committed to maintaining high standards of code quality, performance,
            and scalability. I look forward to leveraging my education, skills,
            and passion for web development to create valuable and impactful
            solutions for the web.{" "}
          </p>
        </div>
        <div className="col-md-6">
          <h3>Technical Skills</h3>
          <ul>
            <li>
              Front-End Development:
              <ul>
                <li>HTML5, CSS3, JavaScript (ES6+)</li>
                <li>React</li>
                <li>Responsive Design and UI/UX Principles</li>
                <li>Version Control (e.g., Git, GitHub)</li>
              </ul>
            </li>
            <li>
              Back-End Development:
              <ul>
                <li>Node.js, Express.js</li>
                <li>Database Management (SQL, NoSQL)</li>
                <li>Server Management and Deployment (Heroku)</li>
                <li>API Development and Integration</li>
              </ul>
            </li>
            <li>
              Full Stack Proficiency:
              <ul>
                <li>Building RESTful APIs</li>
                <li>Authentication and Authorization</li>
                <li>Testing</li>
                <li>Webpack, Babel, Build Tools</li>
              </ul>
            </li>
          </ul>

          <h3>Education</h3>
          <p>
            <strong>Metropolitan State University</strong> (09/2010-08/2014)
            <br />
            BA Sociology
          </p>
          <p>
            <strong>Normandale Community College</strong> (08/2008-05/2010)
            <br />
            AS Computer Science and Liberal Arts
          </p>

          <h3>Work Experience</h3>
          <p>
            <strong>Delta Airlines</strong> - Ramp Supervisor (10/2015-Present)
            <br />
            (Description of responsibilities and achievements)
          </p>
          <p>
            <strong>
              Confederation of Somali Community in Minnesota
            </strong>{" "}
            - Family and Youth Coordinator (05/2017-12/2022)
            <br />
            (Description of responsibilities and achievements)
          </p>
          <p>
            <strong>Midwest Home Healthcare</strong> - Client Support
            Specialist (07/2012-12/2019)
            <br />
            (Description of responsibilities and achievements)
          </p>
          <p>
            <strong>Target</strong> - Team Lead (2008-2012)
            <br />
            (Description of responsibilities and achievements)
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
