import React from "react";
import { Card } from "./Card";
import Trendzy from "../assets/img/projects/TrendzyProject.png";
import Treders from "../assets/img/projects/TredersProject.png";
import CreditFolio from "../assets/img/projects/creditFolio.png"
import "./Project.css";
export const Projects = () => {
  const project = {
    data: [
      
      {
        name: "Man Matters",
        desc: "Your one-stop destination for personalized health consultations with experienced doctors and curated products for skin, hair, and beard care.",
        img: "https://github-production-user-asset-6210df.s3.amazonaws.com/93611786/430722396-d7c47606-00e4-4435-aa7c-1ba91f944e87.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250406%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250406T165749Z&X-Amz-Expires=300&X-Amz-Signature=252708253d47b6f2786f46ed8864fc46fa6047436f24360b9bd9ccdd3752f064&X-Amz-SignedHeaders=host",
        demoLink: "https://man-matters-drab.vercel.app/",
        codeLink: "https://github.com/anshul-010/Man-Matters",
        techstack: [
          "React.js ",
          "Redux ",
          "CSS, ",
          "ChakraUI ",
          "Javascript ",
          "Node.js ",
          "Express ",
          "Mongo DB "

        ],
      },
      {
        name: "Treders",
        desc: "Provides users with real-time cryptocurrency data updates and features such as graphical representation and activity dashboard.",
        img: Treders,
        demoLink: "https://stately-liger-61a99a.netlify.app/",
        codeLink: "https://github.com/anshul-010/gamy-lace-3375/tree/main/my-app",
        techstack: [
         "HTML, ",
          "CSS, ",
          "Javascript, ",
          "React, ",
          "Chakra UI"
        ],
      },
      {
        name: "Trendzy",
        desc: "Clone of meesho.com which is a Fashion based E-commerce Platform",
        img: Trendzy,
        demoLink: "https://66cc670d37ef603b92569f29--magical-centaur-29595a.netlify.app/",
        codeLink: "https://github.com/anshul-010/Trendzy-201",
        techstack: [
          "HTML, ",
          "CSS, ",
          "Javascript",
        ],
      },
      {
        name: "Credit Folio",
        desc: "The CREDIT-FOLIO React App is a modern web application designed to manage credit scores and related data.",
        img: CreditFolio,
        demoLink: "https://jocular-bavarois-89af42.netlify.app/",
        codeLink: "https://github.com/anshul-010/quixotic-snail-9802",
        techstack: [
          "HTML, ",
          "CSS, ",
          "Javascript, ",
          "React, ",
          "Redux, ",
          "Chakra UI, ",
          "Node.js, ",
          "Express.js, ",
          "Mongo DB"
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
