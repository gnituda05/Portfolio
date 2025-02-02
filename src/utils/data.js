import { HiOutlineDatabase, HiOutlineDesktopComputer, HiOutlineServer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Database Engineer",
    projects: 134,
    icon: HiOutlineDatabase,
    bg: "#286F6C",
  },
  {
    name: "RESTful API",
    projects: 26,
    icon: HiOutlineServer,
    bg: "#EEC048",
  },
  {
    name: "Machine Learning NLP",
    projects: 11,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I have experience in backend development, where I've had the opportunity to work on various projects. ",
  "Involving robust server-side solutions, RESTful APIs, and database optimization.",
];

export const workExp = [
  {
    place: "AICCC Conference, OSAKA JAPAN",
    tenure: "Dec 2022",
    role: "Author & Machine Learning Developer",
    detail:
      "BS Computer Science students for successfully presenting their research papers to the 5th Artificial Intelligence and Cloud Computing Conference (AICCC 2022) held in Osaka International Convention Center, Osaka, Japan, from December 17-19,2022.",
  },
  {
    place: "The BoredGuys Corp.",
    tenure: "Feb 2023 - July 2023",
    role: "Back-End Developer",
    detail:
      "I specialize in implementing scalable APIs and routes to drive core functionality based on system request features.",
  },
  {
    place: "Lap IT Solutions INC.",
    tenure: "Dec 2022 - Oct 2024",
    role: "Database Engineer",
    detail:
      "Administer, Test, and Implement computer databases, applying knowledge of database management systems. Coordinate changes to existing client on their system. Identify, investigate, and resolve database performance issues, database capacity, and database scalability.",
  },
];

export const comments = [
  {
    name: "TypeScript",
    comment:
      " A superset of JavaScript that adds optional static typing, interfaces, and other features to the language aims to make the development of large-scale applications more manageable and less error-prone.",
    img: "./Tech1.png",
  },
  {
    name: "Python",
    comment:
      "A high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms and has a vast standard library.",
    img: "./Tech3.png",
  },
  {
    name: "NestJS",
    comment:
      "A progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It uses TypeScript by default and combines elements of OOP, FP, and FRP",
    img: "./Tech4.png",
  },
  {
    name: "JavaScript",
    comment:
      "A high-level, interpreted scripting language primarily used for web development. It allows for the creation of dynamic content on websites and can be run in any modern web browser without the need for compilation.",
    img: "./Tech2.png",
  },
  {
    name: "Java",
    comment:
      "An object-oriented, high-level programming language with platform independence, meaning code written in Java can run on any device that has a Java Virtual Machine (JVM).",
    img: "./Tech5.png",
  },
  {
    name: "Prisma",
    comment:
      "An open-source database toolkit that includes an ORM (Object-Relational Mapping) for Node.js and TypeScript. It provides a type-safe API for querying databases.",
    img: "./Tech6.png",
  },
  {
    name: "PostgreSQL",
    comment:
      "An open-source relational database management system (RDBMS) known for its extensibility, SQL compliance, and emphasis on features, robustness, and performance.",
    img: "./Tech7.png",
  },
  {
    name: "PHP",
    comment:
      "A popular server-side scripting language designed specifically for web development but can also be used for general-purpose programming.",
    img: "./Tech8.png",
  },
  {
    name: "Laravel",
    comment:
      "A free, open-source PHP web framework that provides a clean and elegant syntax, aiming to take the pain out of web development tasks like routing, authentication, and caching.",
    img: "./Tech9.png",
  },
  
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
