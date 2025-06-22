import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Developing robust and scalable web applications with modern frameworks, ensuring high performance and security."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Crafting intuitive and aesthetically pleasing UI/UX designs to enhance user engagement and accessibility."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Building cross-platform mobile applications with seamless functionality and user experience."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Software Testing & Automation"
        subTitle="Implementing automated testing strategies to ensure software reliability, efficiency, and bug-free deployments."
      />
    </div>
  );
};

export default MyServices;
