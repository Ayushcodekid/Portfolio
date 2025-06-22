import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog Page</li>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">E-commerce</li>
        <li className="sidenavLi">Chatting Applications</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">Backend Setup</li>
        <li className="sidenavLi">Task Master Application</li>
        <li className="sidenavLi">AI Chatbot</li>
        <li className="sidenavLi">Mobile App Development</li>
      </ul>
      <SidenavTitle title="L" subTitle="atest Work" />
      <ul>
        <li className="sidenavLi">Designed and developed multiple web applications</li>
        <li className="sidenavLi">Created responsive UI/UX for various platforms</li>
        <li className="sidenavLi">Built full-stack applications with modern frameworks</li>
        <li className="sidenavLi">Developed cross-platform mobile apps</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi"> ayush.kumar01012003@gmail.com
        </li>

        <li className="sidenavLi">
          <a href="https://www.linkedin.com/in/ayush-dhiman-45378424a/" target="_blank" className="flex items-center gap-2">
            <FaLinkedin className="text-blue-600" /> LinkedIn
          </a>
        </li>
        <li className="sidenavLi">
          <a href="https://github.com/Ayushcodekid" target="_blank" className="flex items-center gap-2">
            <FaGithub className="text-gray-800" /> GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
