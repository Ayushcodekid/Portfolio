import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree } from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Insights" subTitle="My Work & Learnings" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
            image={blogImgOne}
            title="Project Spotlight: LinkedIn AI Reply Extension"
            subTitle="A Chrome extension that automates LinkedIn replies using AI."
            category="Projects"
          />
          <BlogCard
            image={blogImgTwo}
            title="How I'm Learning Backend Development"
            subTitle="Exploring Node.js, Express, and MongoDB."
            category="Learning"
          />
        </div>
        <div className="px-6">
          <BlogCard
            image={blogImgThree}
            title="Why I Built a Web Scraper with Python"
            subTitle="A beginner-friendly way to extract data from websites."
            category="Projects"
          />
          <BlogCard
            image={blogImgOne}
            title="Exploring AWS: Hosting Apps with Lambda & S3"
            subTitle="My first steps into cloud computing."
            category="Tech"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;

