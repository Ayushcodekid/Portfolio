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
          badge="11/2024 – 05/2025"
          title="Software Developer"
          subTitle="Connect 2 Construct"
          des="Designed and deployed a high-performance cross-platform mobile application using React Native. Developed secure AWS S3 file management and real-time communication via WebSockets."
        />
        <ResumeCard
          badge="03/2024 – 10/2024"
          title="Full Stack Developer Intern"
          subTitle="Space Energy Systems"
          des="Developed a secure web app with authentication and scalable backend. Implemented RBAC, reducing security incidents by 40%, and built a file system using AWS S3 and pre-signed URLs to boost efficiency by 35%."
        />
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
