import React from "react";
import { Card } from "./Card";
import Trendz from "../assets/img/projects/Trendz.png";
import HolaEx from "../assets/img/projects/HolaEx.png";
import HelthoCart from "../assets/img/projects/HelthoCart.png";
import "./Project.css";
export const Projects = () => {
  const project = {
    data: [
      {
        name: "Trendz",
        desc: "Clone of Koovs.com which is a Fashion based E-commerce Platform",
        img: Trendz,
        demoLink: "https://wondrous-gnome-4959fa.netlify.app/",
        codeLink: "https://github.com/lovkumar120169/pink-purpose-5182",
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
        name: "HelthO Cart",
        desc: "Clone of Helth Kart.com which is an E-commerce website delivering Healthy Products & Supplements",
        img: HelthoCart,
        demoLink: "https://glowing-paletas-0e922db.netlify.app/",
        codeLink: "https://github.com/lovkumar120169/gamy-rate-5438",
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
        name: "Hola-Ex",
        desc: "Clone of Olx.com which is an E-commerce Platform delivering Used Products Platform delivering Used Products",
        img: HolaEx,
        demoLink: "https://verdant-valkyrie-b3f6d0.netlify.app/",
        codeLink: "https://github.com/asadayyubi/absorbed-porter-6072",
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
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <div className="row">
          {project.data.map((elem, index) => {
            return <Card key={index} data={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};
