import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="col-md-6 my-4 text-dark project-card">
      <div className="card border shadow p-3 h-100">
        <img src={data.img} className="img-fluid border project-image" alt="" />
        <h4 className="text-center my-2 font-weight-bold project-title">{data.name}</h4>
        <p className="px-2 text-center project-description">{data.desc}</p>
        <p className="px-2 text-center project-description">Tech Stack: {data.techstack}</p>
        <div className="live-btn">
          <div className="col-md-6">
            <a
              className="btn btn-outline-dark  btn-sm project-deployed-link"
              href={data.demoLink}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
          {/* style={{marginLeft:"170px"}} */}
          <div className="col-md-6">
            <a
              className="btn btn-outline-dark  btn-sm github_btn project-github-link"
              href={data.codeLink}
              target="_blank"
              rel="noreferrer"
            >
              Github Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };

//he 