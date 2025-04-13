import { Chaiwala, logo1, admin, collage } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Three js",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "React native",
    type: "mobile appt",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Intern full stack Developer",
    company_name: "Brandzaha Creative Agency ",
    icon: logo1, // You'll need to import/create this
    iconBg: "#6366f1", // indigo-500
    date: "Jan 2023 - Apr 2023",
    points: [
      "Developed an immersive 3D portfolio using Three.js and React Three Fiber to showcase the agency's creative work",
      "Implemented interactive 3D models with smooth animations and transitions",
      "Optimized performance for complex 3D scenes using techniques like instancing and level of detail (LOD)",
      "Integrated with backend APIs to dynamically load 3D content and project data",
      "Collaborated with designers to create visually stunning transitions and effects",
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "Chaiwala App (Project)",
    icon: Chaiwala, // You'll need to import/create this
    iconBg: "#f59e0b", // amber-500
    date: "May 2023 - Aug 2023",
    points: [
      "Built a React Native app for tea vendors with real-time order tracking system",
      "Implemented geolocation features for order tracking using React Native Maps",
      "Developed RESTful APIs with Express.js and MongoDB for order management",
      "Created a responsive UI with Tailwind CSS for consistent cross-platform experience",
      "Integrated payment gateway for seamless in-app transactions",
      "Optimized app performance for low-end devices through code splitting and lazy loading",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "E-Service Management (Project)",
    icon: admin, // You'll need to import/create this
    iconBg: "#10b981", // emerald-500
    date: "Sep 2023 - Dec 2023",
    points: [
      "Developed a comprehensive e-commerce service management platform",
      "Implemented JWT authentication for secure user sessions",
      "Built real-time notification system using WebSockets",
      "Designed MongoDB schemas for efficient data relationships",
      "Created admin dashboard with analytics and reporting features",
      "Optimized API response times through query optimization and caching",
    ],
  },
  {
    title: "BCA Graduate",
    company_name: "Parishkar college of global excellence (autonomous college)",
    icon: collage, // You'll need to import/create this
    iconBg: "#3b82f6", // blue-500
    date: "Graduated 2023",
    points: [
      "Specialized in Web and Mobile Application Development",
      "Completed coursework in Advanced JavaScript, Database Systems, and Cloud Computing",
      "Developed 10+ academic projects demonstrating full stack capabilities",
      "Participated in hackathons and coding competitions",
      "Maintained 3.8 GPA while working on personal projects",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Gajendrakmt9079",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/gajendra-kumawat-157b33263/",
  },
];

export const projects = [
  {
    iconUrl: logo1,
    theme: "btn-back-indigo",
    name: "3D Agency Portfolio",
    description:
      "Immersive portfolio for brandzaha Creative Agency with advanced 3D interactions",
    points: [
      "Built with Three.js, React Three Fiber, and GSAP animations",
      "Implemented 3D model optimization reducing load time by 40%",
      "Created custom shaders for unique visual effects",
      "Developed smooth camera transitions between project showcases",
      "Integrated with Contentful CMS for easy content updates",
    ],
    link: "https://github.com/Gajendrakmt9079",
    tags: ["Three.js", "R3F", "WebGL", "GSAP"],
  },
  {
    iconUrl: Chaiwala,
    theme: "btn-back-amber",
    name: "Chaiwala Delivery App",
    description: "Tea vendor marketplace with real-time order tracking",
    points: [
      "React Native app with Expo for cross-platform deployment",
      "Google Maps integration for live order tracking",
      "Node.js/Express backend with MongoDB Atlas",
      "JWT authentication for vendors and customers",
      "Optimized for low-bandwidth areas with offline-first design",
    ],
    link: "https://github.com/Gajendrakmt9079/Chaiwala-React-native.git",
    tags: ["React Native", "Node.js", "MongoDB", "Geolocation"],
  },
  {
    iconUrl: admin,
    theme: "btn-back-emerald",
    name: "E-Service Management",
    description: "Complete e-commerce service solution",
    points: [
      "Built with MERN stack (MongoDB, Express, React, Node)",
      "Redux Toolkit for state management across 15+ screens",
      "Stripe API integration for secure payments",
      "Admin dashboard with sales analytics",
      "Automated email notifications system",
    ],
    link: "https://github.com/Gajendrakmt9079/React-native-Admin-dashboard.git",
    tags: ["MERN", "Redux", "Tailwind CSS", "REST API"],
  },
  {
    iconUrl: motion,
    theme: "btn-back-purple",
    name: "3D Web Experiments",
    description: "Collection of interactive 3D web experiences",
    points: [
      "Physics simulations using Cannon.js",
      "Custom GLSL shaders for visual effects",
      "Model loading pipelines with draco compression",
      "VR/AR compatibility using WebXR",
      "Performance optimization techniques",
    ],
    link: "https://github.com/Gajendrakmt9079",
    tags: ["Three.js", "WebGL", "GLSL", "Physics"],
  },
  {
    iconUrl: nodejs,
    theme: "btn-back-purple",
    name: "User-authentication-and-authorization-backend",
    description: "User authentication and authorization backend code on industry level and production level code with jwt verify and fully secure",
    points: [
      "Physics simulations using Cannon.js",
      "Custom GLSL shaders for visual effects",
      "Model loading pipelines with draco compression",
      "VR/AR compatibility using WebXR",
      "Performance optimization techniques",
    ],
    link: "https://github.com/Gajendrakmt9079/User-authentication-and-authorization-.git",
    tags: ["Three.js", "WebGL", "GLSL", "Physics"],
  },
];
