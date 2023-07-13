import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import { AiFillGithub, AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact-container" style={{width:"100%"}}>
      <Container >
        <Row>
          <Col>
            <h1 className="text-center font-details-b pb-4">Contact</h1>
            <h5 style={{marginTop:"50px"}}>
              Liked my work? Want to get in touch? <br />
              You can reach out to me at-
            </h5>
            <br />
            <h5>
              <a href="mailto:kushwahasg4450@gmail.com" className="contact-me">
                <span>
                  {" "}
                  <i className="fa fa-envelope"></i>
                </span>
                <span>kushwahasg4450@gmail.com</span>
              </a>
            </h5>

            <h5>
              <a href="tel:7906192050" className="contact-me">
                <span>
                  {" "}
                  <i className="fa fa-phone"></i>
                </span>
                <span>7906192050</span>
              </a>
            </h5>
          </Col>
          <div className="home-about-social-links" style={{margin:"5px auto",width:"80%",display:"flex",justifyContent:"space-evenly"}} >
              <div className="social-icons">
                <a
                  href="https://github.com/anshul-010"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  
                >
                  <AiFillGithub  size={"50px"}/>
                </a>
                <p className="home-about-social-text">Github</p>
              </div>
              {/* <div className="social-icons">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook size={"50px"}/>
                </a>
                <p className="home-about-social-text">facebook</p>
              </div> */}
           
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anshul-kushwah-0245021b8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons icon linkedin"
                >
                 <FaLinkedinIn size={"50px"}/>
                </a>
                <p className="home-about-social-text">linkedin</p>
              </div>
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/its_a.n.s.h.u.l/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram size={"50px"}/>
                </a>
                <p className="home-about-social-text">Instagram</p>
              </div>
            </div>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
