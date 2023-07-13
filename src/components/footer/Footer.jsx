import React from "react";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#212529"}}>
        <div className="wrapper">
          <a
            href="https://www.instagram.com/its_a.n.s.h.u.l/"
            className="icon twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"> </i>
          </a>

          <a
            href="https://www.linkedin.com/in/anshul-kushwah-0245021b8/"
            className="icon linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/anshul-010"
            className="icon github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div style={{color:"white",padding:"10px"}}>
          Created By Anshul Kushwah | © 2023. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export { Footer };
