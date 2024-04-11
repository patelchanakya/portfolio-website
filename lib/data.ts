import React from "react";
import { CgBulb, CgCodeSlash, CgSearch, CgWorkAlt } from "react-icons/cg";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Work",
    hash: "#work",
  },
  {
    name: "Solutions",
    hash: "#solutions",
  },
  {
    name: "Process",
    hash: "#process",
  },
  {
    name: "Connect",
    hash: "#connect",
  },
] as const;

export const experiencesData = [
  {
    title: "Ideation",
    location: "Conceptualizing Success",
    description: "In the Ideation phase, we define the project's scope and goals. Our focus is on creating a strategic plan that aligns with your objectives, ensuring a solid foundation for success. Additionally, we will provide preliminary web designs before finalizing to ensure the project's direction meets your vision.",
    icon: React.createElement(CgBulb, { color: "black" }),
    date: "1-2 Weeks",
  },
  {
    title: "Development",
    location: "Building Your Vision",
    description:
      "During the Development phase, our team transforms your conceptualized ideas into tangible solutions. This stage involves rigorous coding, testing, and iterations to ensure the final product aligns with your vision and objectives.",
    icon: React.createElement(CgCodeSlash, { color: "black" }),
    date: "4-12 Weeks",
  },
  {
    title: "Optimization",
    location: "Refining for Excellence",
    description:
      "During the Optimization phase, we're dedicated to refining and elevating your project with thorough reviews and ongoing enhancements. We recognize that new ideas may emerge, and we're fully prepared to accommodate any changes or additional features you envision.",
    icon: React.createElement(CgSearch, { color: "black" }),
    date: "Up to 1 Year of Service",
  },
] as const;

export const projectsData = [
  {
    title: "Sunshine Dry Cleaners & More",
    description:
      "Total web design and development for Fort McMurray's premier dry cleaners.",
    tags: ["Graphic Design", "Web Development", "Copywriting"],
    imageUrl: corpcommentImg,
  }
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "Graphic Design",
  "Web Development",
  "Search Engine Optimization",
  "Social Media Marketing",
  "Copywriting",
] as const;
