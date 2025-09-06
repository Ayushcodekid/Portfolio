import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { bannerImg } from "../../assets/index";
import Contact from "../contact/Contact"; // Adjust import path as needed

const Left = () => {
  const [text] = useTypewriter({
    words: ["Software Developer", "Mobile App Developer", "Web Developer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  // State to toggle visibility of the Contact Section
  const [showContact, setShowContact] = useState(false);

  // Handle the toggle of the contact section visibility
  const toggleContactSection = () => {
    setShowContact((prevState) => !prevState); // Toggle the state value
  };

  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5 flex justify-center items-center">
        <img
          className="w-11/12 h-6/5 object-cover rounded-2xl mx-auto mt-[35%]"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>

      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">
            Ayush Dhiman
          </h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="https://github.com/Ayushcodekid"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-dhiman-45378424a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:ayush.kumar01012003@gmail.com"
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FiMail />
            </a>
          </div>
        </div>

        <div className="flex h-14">
          <a
            href="/Ayush_Dhiman_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>

          {/* Updated "Contact Me" button with visibility toggle */}
          <button
            onClick={toggleContactSection}
            className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300"
          >
            Contact me <FiSend />
          </button>
        </div>
      </div>

      {/* Conditionally render the Contact Section based on state */}
      {showContact && <Contact />}
    </div>
  );
};

export default Left;
