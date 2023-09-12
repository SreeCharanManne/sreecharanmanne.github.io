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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  nissan,
  tigeranalytics,
  sastra,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Autonomous Vehicle Researcher",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Cloud Engineer",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "kubernetes",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Research Intern",
    company_name: "Nissan Motor Corporation",
    icon: nissan,
    iconBg: "##E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Migrating and preprocessing 1.2 TB of local Rosbag data that is about 4 hours of driving data to Nissan’s Cloud Database using C++ , SQL . Enhanced map creation speed, achieving a remarkable 30% improvement.",
      "Implementing data caching mechanisms with AV stack to minimize the frequency of database queries, allowing the drive lane detection algorithm with bootstrap maps to operate smoothly even in low network connectivity scenarios, increased 10% better results in remote places; used C++, PostgreSQL, bitbucket, Sqlectron, ROS::RVIZ.",
      "Generated Bootstrap maps by refining scenarios like Lane changes, abnormal driving reducing noise by 58% and 32% increase in accuracy. Code implementation for bump detection of yaw rate to curate the lane changes in over 90+ Rosbags storing around 40771 records of data for a 72km of road in SantaClara, CA.",
    ],
  },
  {
    title: "Software Engineer(Back End Engineer)",
    company_name: "Tiger Analytics",
    icon: tigeranalytics,
    iconBg: "#E6DEDD",
    date: "August 2021 - July 2022",
    points: [
      "Integrated a new SMS provider with the communication service, enabling the Marketing team to run cost-effective SMS campaigns during IPL using Java, SpringBoot, Kafka, MongoDB, and PostgreSQL technologies. Achieved a 25% reduction in campaign costs.",
      "Designed 4 APIs that generate random winning Kabaddi teams based on player selection percentage, playing the style rules (minimum and maximum), and team size , added unit tests using TestNG and Mockito.",
      "Constructed a CI/CD pipeline utilizing Jenkins, Azure DevOps, and GIT to enable the automated deployment of more than 200 scripts whenever code changes occur which led to a noteworthy 20% reduction in deployment time.",
      "Developed a high-performance REST API service utilizing FastAPI, Snowflake, and Redis cache for handling E-commerce data.",
      "Implemented a method for user payment withdrawal request authorization using Spring Boot and Redis.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Tiger Analytics",
    icon: tigeranalytics,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - July 2021",
    points: [
      "Debugged 10+ bugs across server and client pages, enhancing the smooth interaction with backend components.",
      "Backend API’s for social media based applications with Java and MySql and wrote Selenium testcases.",
      "Comprehensive unit testing using JUnit, creating and executing over 20 tests to validate query results from the DB.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "SASTRA University",
    icon: sastra,
    iconBg: "##E6DEDD",
    date: "Jan 2019 - April 2019",
    points: [
      "Privacy Preserving Fingerprint Authentication at the Cloud Server for eHealth Service: Worked on building a steganography algorithm using Matlab which uses SHA-256 for encryption. The objective of this paper is to design a scheme to carry out the fingerprint match at the cloud server that will not compromise the fingerprints. Link to publication: https://eudl.eu/doi/10.4108/eai.13-7-2018.162688",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make optimising the map generation for the autonomous vehiclesbut this guy lead to a remarkable 30% improvement in map creation speed.",
    name: "Christopher Ostafew",
    designation: "Sr. Reasearcher",
    company: "Nissan Motor Corporation",
  },
  {
    testimonial:
      "I've never met a software engineer who truly cares about their clients' success like Charan does.",
    name: "Hsin Min Cheng",
    designation: "Researcher",
    company: "Nissan Motor Corporation",
  },
  {
    testimonial:
      "After Charan optimized and created auto deployment pipelines our website usage was increased by 26%. We can't thank them enough!",
    name: "Senganal Thirunavukkarasu",
    designation: "Director , ML Engineering",
    company: "Tiger Analytics",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
