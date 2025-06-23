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
            title="Project Spotlight: AI Chatbot"
            subTitle="A journey into the world of AI-powered chatbots."
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
            title="Why I Built a Task Master App"
            subTitle="A beginner-friendly way to manage tasks."
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

