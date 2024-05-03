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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IOT developer",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "web developer",
    
    date: "Hybrid",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mobile Application developer",
    company_name: "React native",

    date: "Freelance",
    points: [
      "Communicated with clients to understand their app requirements, goals, and expectations.",
      "Translated client requirements and wireframes into high-quality user interfaces using React Native components.",
      "Developed cross-platform mobile applications for iOS and Android using React Native, a JavaScript framework.",
      "Integrated backend services and APIs to enable data exchange between the mobile app and server.",
      "Implemented data fetching, storage, and synchronization using technologies such as RESTful APIs, GraphQL, Firebase, or other backend services.",
      "Generated necessary build configurations, signed release builds, and followed submission guidelines for each platform.",
    ],
  },
  {
    title: "Full stack developer",
    company_name: "open source",
    
    date: "Remote",
    points: [

      " Collaborated with designers to translate wireframes and mockups into functional frontend components.",
      "Designed and implemented server-side logic using programming languages such as JavaScript (Node.js), Python, Golang , or others.",
      "Built RESTful APIs to facilitate communication between the frontend and backend systems.",
      "Implemented authentication and authorization mechanisms to ensure data security and user privacy.",
      "Set up and configured development, staging, and production environments for the application."
    ],
  },
  {
    title: "IOT developer",
    company_name: "Embedded systems",

    date: "Hybrid",
    points: [
      "Designed and developed firmware for embedded systems using languages like C, C++, or Assembly.",
      "Worked with microcontrollers or microprocessors to control hardware components and peripherals.",
      "Implemented real-time operating systems (RTOS) or bare-metal programming approaches depending on project requirements.",
      "Implemented IoT communication standards like MQTT, CoAP, or HTTP for data transmission between devices and cloud services.",
      "Interfaced with various sensors and actuators to collect data from the physical environment and control external devices.",
      "Integrated sensors such as temperature sensors, humidity sensors, accelerometers, GPS modules, or environmental sensors depending on project requirements.",
      "Calibrated and tested sensor data to ensure accuracy and reliability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Celestin proved me wrong.",
    name: "Yvette .U",
    designation: "CEO",
    company: "Youth Lady Forum",
    image: "https://drive.google.com/file/d/11kVYLTmScEWKmjtrgWl4fId7lFq9Gq1U/view?usp=drivesdk",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Celestin does.",
    name: "Christian .N",
    designation: "software developer",
    company: "HPIS",
    image:"https://drive.google.com/file/d/11lUj6yGpGyisWmvnSJzzMNmPzUXCWdA2/view?usp=drivesdk",
  },
  {
    testimonial:
      "Absolutely! Celestin is active software developer known for his adaptability to new technologies, and enthusiasm for tackling diverse challenges.",
    name: "Björn Bütter",
    designation: "software developer",
    company: "jungwild.io",
    image: "https://drive.google.com/file/d/11leDkg54GX4Lq0fh9SOttK2ISWj7vqMh/view?usp=drivesdk",
  },
];

const projects = [
  {
    name: "React.js Test ",
    description:
      "Web-based platform that allows junior  javaScript developers to test their skills on React js  as quiz , do retake and learn even if when they fail /got under 50%  from various providers, providing a convenient and efficient solution for developers needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "hooks-api-react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Celestin-Pet/Testapp",
  },
  {
    name: "Crpto Market",
    description:
      "Explore the future of finance with CryptoX! This Project hosts a cutting-edge cryptocurrency project aimed at revolutionizing decentralized finance (DeFi).",
    tags: [
      {
        name: "CyptoCurrency",
        color: "blue-text-gradient",
      },
      {
        name: "web3",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Celestin-Pet/crypto",
  },
  {
    name: "Tourist website",
    description:
      "A comprehensive tourist-travel booking platform that allows users to book and visit Rwanda touristic areas , hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Php - React js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo db",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Celestin-Pet/tourist.rw",
  },
];

export { services, technologies, experiences, testimonials, projects };
