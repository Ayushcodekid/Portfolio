import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      {/* Experience Section */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="08/2025 – Present"
          title="Software Engineer"
          subTitle="Gmware"
          des="Built reliable data extraction pipelines by combining web scraping and direct API integration for structured product and pricing data. Improved pipeline stability by identifying internal network APIs via traffic analysis, reducing DOM dependency. Automated data processing and normalization in Python, using LLMs to enhance parsing accuracy and validation."
        />

        <ResumeCard
          badge="03/2024 – 05/2025"
          title="Software Developer"
          subTitle="Space Energy Systems"
          des="Delivered scalable mobile and web applications using React Native and React.js, optimized for performance and user experience. Integrated secure AWS S3 storage and real-time WebSocket communication to support live features. Contributed to building reliable, production-ready systems used in real-world environments."
        />
        {/* <ResumeCard
          badge="03/2024 – 10/2024"
          title="Full Stack Developer Intern"
          subTitle="Space Energy Systems"
          des="Developed a secure web app with authentication and scalable backend. Implemented RBAC, reducing security incidents by 40%, and built a file system using AWS S3 and pre-signed URLs to boost efficiency by 35%."
        /> */}
      </div>

      {/* Vertical Divider */}
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/* Education Section */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2020 – 2024"
          title="Bachelor of Engineering - Computer Science"
          subTitle="MVJ College of Engineering, Bangalore"
          des="GPA: 7.8"
        />
        <ResumeCard
          badge="2018 – 2020"
          title="PUC - PCMB (Physics, Chemistry, Math, Biology)"
          subTitle="Narayana Pre-University, Bangalore"
          des="CGPA: 8.5"
        />
        <ResumeCard
          badge="2017 – 2018"
          title="10th Grade"
          subTitle="Vagdevi Vilas School, Bangalore"
          des="CGPA: 8.2"
        />
      </div>
    </div>
  );
};

export default Education;
