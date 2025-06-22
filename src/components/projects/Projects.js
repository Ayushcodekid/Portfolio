import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";


const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Task Master Appplication"
            category="React.js, Node.js, OAuth"
            link="https://task-master-list.netlify.app/"
            image={workImgOne}
          />
          <ProjectsCard
            title="E-Commerce Website"
            category="React.js, TypeScript"
            link="https://shoppy-e.netlify.app/"
            image={workImgTwo}
          />
          <ProjectsCard
            title="AI Chatbot"
            category="Python, FastAPI, OpenAI"
            link="https://github.com/Ayushcodekid/AI-Model"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Blog Website"
            category="Website"
            link="#"
            image={workImgFour}
          />
          <ProjectsCard
            title="Business Card Design"
            category="Design"
            link="#"
            image={workImgSeven}
          />
          <ProjectsCard
            title="Responsive website"
            category="E-commerce"
            link="#"
            image={workImgSix}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;













