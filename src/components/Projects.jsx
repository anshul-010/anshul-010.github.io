import React from "react";
import { Card } from "./Card";
import Trendzy from "../assets/img/projects/TrendzyProject.png";
import Treders from "../assets/img/projects/TredersProject.png";
import HealthMart from "../assets/img/projects/healthMartProject.png";
import CreditFolio from "../assets/img/projects/creditFolio.png"
import "./Project.css";
export const Projects = () => {
  const project = {
    data: [
      {
        name: "Trendzy",
        desc: "Clone of meesho.com which is a Fashion based E-commerce Platform",
        img: Trendzy,
        demoLink: "https://ephemeral-parfait-eda1a8.netlify.app/index.html",
        codeLink: "https://github.com/anshul-010/Trendzy-201",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/mongodb.svg",
          "/icons/express.svg",
          "/icons/nodejs-icon.svg",
          "/icons/javascript.svg",
        ],
      },
      {
        name: "Health Mart",
        desc: "Clone of HealthKart.com which is an E-commerce website delivering Healthy Products & Supplements",
        img: HealthMart,
        demoLink: "https://peaceful-blancmange-43db0c.netlify.app/",
        codeLink: "https://github.com/Vikas6865/fond-channel-7524",
        techstack: [
          "/icons/react.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/npm.svg",
          "/icons/bootstrap.svg",
          "/icons/nodejs-icon.svg",
        ],
      },
      {
        name: "Treders",
        desc: "Provides users with real-time cryptocurrency data updates and features such as graphical representation and activity dashboard.",
        img: Treders,
        demoLink: "https://649014389ea33240bcd1a645--frolicking-zuccutto-c2efd2.netlify.app/",
        codeLink: "https://github.com/anshul-010/gamy-lace-3375/tree/main/my-app",
        techstack: [
          "/icons/react.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/npm.svg",
          "/icons/mongodb.svg",
          "/icons/bootstrap.svg",
          "/icons/nodejs-icon.svg",
          "/icons/express.svg",
        ],
      },
      {
        name: "Credit Folio",
        desc: "The CREDIT-FOLIO React App is a modern web application designed to manage credit scores and related data.",
        img: CreditFolio,
        demoLink: "https://creditfolio.netlify.app/",
        codeLink: "https://github.com/anshul-010/quixotic-snail-9802",
        techstack: [
          "/icons/react.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/npm.svg",
          "/icons/mongodb.svg",
          "/icons/bootstrap.svg",
          "/icons/nodejs-icon.svg",
          "/icons/express.svg",
        ],
      }
    ],
  };
  return (
    <div className="project-container">
      <div id="projects" className="container width">
        <h1 className="pt-3 text-center font-details-b pb-3" style={{color:"#323232"}} >PROJECTS</h1>
        <div className="row">
          {project.data.map((elem, index) => {
            return <Card key={index} data={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};
