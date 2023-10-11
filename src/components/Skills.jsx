import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import L_HTML5 from "../assets/img/skills/html-5.svg";
import L_CSS3 from "../assets/img/skills/css3.svg";

import L_REACT from "../assets/img/skills/react.svg";
import L_REDUX from "../assets/img/skills/redux.svg";
import L_REACT_ROUTER from "../assets/img/skills/react-router.svg";
import L_MATERIALUI from "../assets/img/skills/material-ui-1.svg";

import L_NODE_JS from "../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../assets/img/skills/express.svg";
import L_MONGODB from "../assets/img/skills/mongodb.svg";
import L_GIT from "../assets/img/skills/git-icon.svg";
import L_HEROKU from "../assets/img/skills/heroku.svg";
import L_VERCEL from "../assets/img/skills/vercel.svg";
import L_GITHUB_PAGES from "../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../assets/img/skills/javascript.svg";
import L_NETLIFY from "../assets/img/skills/netlify.svg";
import "./Skills.css";

const Skills = () => {
  const skills = {
    frontend: [
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML 5",
        imgSrc: L_HTML5,
        skillName: "HTML5",
      },
      {
        link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
        imgAltText: "CSS 3",
        imgSrc: L_CSS3,
        skillName: "CSS3",
      },
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },
      {
        link: "https://reactjs.org/",
        imgAltText: "React JS",
        imgSrc: L_REACT,
        skillName: "React JS",
      },
      {
        link: "https://redux.js.org/",
        imgAltText: "Redux",
        imgSrc: L_REDUX,
        skillName: "Redux",
      },
      {
        link: "https://reacttraining.com/react-router/",
        imgAltText: "React Router",
        imgSrc: L_REACT_ROUTER,
        skillName: "React Router",
      },
      {
        link: "https://chakra-ui.com/",
        imgAltText: "Chakra-UI",
        imgSrc: "https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg",
        skillName: "Chakra-UI",
      },
    ],

    backend: [
      {
        link: "https://nodejs.org/en/",
        imgAltText: "Node.js",
        imgSrc: L_NODE_JS,
        skillName: "Node.js",
      },
      {
        link: "https://expressjs.com/",
        imgAltText: "Express",
        imgSrc: L_EXPRESS,
        skillName: "Express",
      },
    ],
    hostingPlatforms: [
      {
        link: "https://www.heroku.com/",
        imgAltText: "Vercel",
        imgSrc: L_VERCEL,
        skillName: "Vercel",
      },

      {
        link: "https://pages.github.com/",
        imgAltText: "GitHub Pages",
        imgSrc: L_GITHUB_PAGES,
        skillName: "GitHub Pages",
      },
      {
        link: "https://www.netlify.com/",
        imgAltText: "Netlify",
        imgSrc: L_NETLIFY,
        skillName: "Netlify",
      },
    ],
    programmingLanguages: [
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },
    ],
    databases: [
      {
        link: "https://www.mongodb.com/",
        imgAltText: "MongoDB",
        imgSrc: L_MONGODB,
        skillName: "MongoDB",
      },
    ],
    versionControl: [
      {
        link: "https://git-scm.com/",
        imgAltText: "GIT",
        imgSrc: L_GIT,
        skillName: "GIT",
      },
    ],
  };
  return (
    <div id="skills">
      <div className="pt-3 pb-3 width-container skills-card"  >
        <h1 className="text-center font-details-b pb-4" style={{color:"#323232"}}>TECH SKILLS</h1>
        {/* <CardDeck> */}
        <Row className="d-flex justify-content-around">
          {/* Frontend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="text-center  skills-card-name">
                  Frontend
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column skills-card-img">
                  {skills.frontend.map((skill, index) => (
                    <span className="p-2" style={{margin:"auto"}} key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Backend
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" >
                  {skills.backend.map((skill, index) => (
                    <span className="p-2" style={{margin:"auto"}} key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
              {/* div */}
            {/* Hosting Platforms */}
            <Card className="focus mt-5 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Hosting Platforms
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.hostingPlatforms.map((skill, index) => (
                    <span className="p-2" style={{margin:"auto"}} key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Programming Languages
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.programmingLanguages.map((skill, index) => (
                    <span className="p-2" style={{margin:"auto"}} key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-5 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Database
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.databases.map((skill, index) => (
                    <span className="p-2" style={{margin:"auto"}} key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-4 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Version <br /> Control{" "}
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2" style={{margin:"auto"}}>
                    <a
                      className="text-dark text-decoration-none"
                      href={skills.versionControl[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={skills.versionControl[0].imgSrc}
                        alt={skills.versionControl[0].imgAltText}
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      {skills.versionControl[0].skillName}
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Skills;
