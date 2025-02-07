import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "AWS Certified",
    icon: web,
  },
  {
    title: "Microsoft PL-300 Certified",
    icon: mobile,
  },
  {
    title: "MOS Specialist",
    icon: backend,
  },
  {
    title: "UI/UX Certified",
    icon: creator,
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "DEVOPS Engineer",
    company_name: "DWP GLOBAL CORP PVT LTD",
    company_website: "https://dwpglobalcorp.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Jan 2025",
    points: [
      "Configured and managed Amazon EC2 instances for scalable deployment environments. .",
      "Successfully installed and configured Apache server on EC2, optimizing server availability",
      " Deployed and maintained Amazon s3 buckets for secure data storage and retrieval. ",
      "Implemented static website hosting on s3, ensuring efficient content delivery and accessibility. ",
    ],
  },

  {
    title: "Java Developer",
    company_name: "Vashatkaara Company",
    company_website: "",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developed REST APIs:Designed and implemented REST APIs using Spring Boot and Quarkus framework, integrated with PostgreSQL, and managed project dependencies with Maven.",
      "Built secure modules for OTP generation, Aadhaar validation, and PDF encryption, ensuring compliance with application security standards.",
      "Wrote efficient backend code using Spring Tool Suite, enhancing API response time and system performance.",
      "Worked collaboratively with cross-functional teams, contributing to the development lifecycle from coding to testing and deployment of APIs.",
    ],
  },
  
];

const projects = [
  {
    name: "Chatbot",
    description:
      "Developed a chatbot using the ChatGPT API for Q&A with reasoning, providing accurate responses with explanations. Enhances user interactions by delivering insightful, context-aware answers for various queries efficiently.",
    tags: [
      {
        name: "Html/Css",
        color: "blue-text-gradient",
      },
      {
        name: "Open AI",
        color: "green-text-gradient",
      },
      {
        name: "ChatGpt",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "http://127.0.0.1:8000/index.html",
  },
  {
    name: "Weather App",
    description:
      "Developed a weather app using React and a Weather API that allows users to check real-time weather descriptions for any entered city or town, ensuring an interactive and user-friendly experience.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "Weather Api",
        color: "green-text-gradient",
      },
    
    ],
    image: aptihealthApp,
    hosted_link: "https://weather-git-main-rithviks-projects-69a30a1d.vercel.app/",
  },
  {
    name: "Document Translator",
    description:
      "Developed a document translator using React, MongoDB, and Tailwind CSS, allowing users to upload documents and translate them into any language, ensuring a seamless and efficient multilingual experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Node Js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://document-translator-rithviks-projects-69a30a1d.vercel.app/",
  },
  {
    name: "Public Transport",
    description:
      "Designed UI/UX screens for public transport apps, enhancing user experience with improved maps and intuitive login pages, ensuring seamless navigation and accessibility for commuters.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe Workshop",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://www.behance.net/gallery/218561217/Commute-Ease",
  },
];

const personalInfo = {
  name: "Rithvik Varma",
  fullName: "G Janaki Rithvik Varma",
  email: "rithvikbvb@gmail.com",
  role: "Software Developer",
  about: `I am a skilled software developer and DevOps engineer with strong expertise in Python, R, JavaScript. I have hands-on experience with frameworks and technologies like AWS,Azure, and React.js, as well as data visualization tools such as Power BI, Tableau, and Looker Studio. My work combines problem-solving, scalable solutions, and user-friendly designs to deliver impactful results. As a quick learner and collaborative team player, I am committed to addressing real-world challenges with innovative solutions.`,
};

const publicUrls = {
  resume:
    "https://www.icloud.com/iclouddrive/028IRpzrLfWoz4HxNRrjnRfaw#G_Janaki_Rithvik_Varma",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/rithvik-varma-3ba178228",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Grithvik",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
