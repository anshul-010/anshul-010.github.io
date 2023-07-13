import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import "./About.css";
// import profile from "../assets/img/profile/profile.png";
const About = () => {
  return (
    <div className="bgi mar-container about-container">
      <Container className="about-container bgi" id="about">
        <Row>
          <Col>
            <h1>ABOUT ME</h1>
          </Col>
        </Row>
      </Container>
      <Container className="bgi">
        <Row className="about-container">
          <Col>
            {/* <Image src={profile} rounded className="profile-image" /> */}
          </Col>
          <Col>
            <div className="aobut-name">
              <h6>Hi there! I am </h6>
              <h3> Kamal Kishor Rajput</h3>
              <br />
              <p>
                I am currently learning full stack web development at Masai
                School. I am passionate about solving real-world problems and
                actively looking for opportunities in the field of web
                development and software engineering.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { About };
