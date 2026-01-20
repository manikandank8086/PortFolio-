import {
  mobile,
  backend,
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
  olx,
  cinemax,
  shoeStruct,
  tracker,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  nextauth,
  socialSphere,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Programmer",
    icon: backend,
  },
  // {
  //   title: "Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  // {
  //   name: "Java",
  //   icon: java,
  // },
  {
    name: "JWT",
    icon: jwt,
  },
  // {
  //   name: "NextAuth",
  //   icon: nextauth,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const projects = [
  {
   name: "ShoeStrut",
description:
  "An e-commerce shoe selling platform built with modern web technologies, featuring secure authentication and online payments.",
features: [
  "Implemented user registration and login with OTP-based email verification for secure access.",
  "Built a complete product browsing and purchasing flow with cart and checkout functionality.",
  "Integrated Razorpay payment gateway for secure and seamless online transactions.",
  "Added star rating and review system to allow users to rate and review products.",
  "Implemented coupon and discount management for promotional offers.",
  "Developed a responsive and user-friendly UI optimized for all devices."
],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",   
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
    ],
    image: shoeStruct,
    source_code_link: "https://github.com/manikandank8086/ShoeStrut.git",
    live_link: "",
  },
  {
  name: "OLX",
  description:
    "A full-stack OLX-like marketplace web application that allows users to list, browse, and manage products with secure authentication.",
  features: [
    "User authentication using Firebase Authentication.",
    "Create, update, and delete product listings.",
    "Browse and explore products posted by other users.",
    "Responsive UI for desktop and mobile devices.",
    "Protected routes for authenticated users.",
    "Real-time data handling with Firebase.",
    "Clean and intuitive marketplace UI.",
  ],
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "firebase",
      color: "orange-text-gradient",
    },
    {
      name: "javascript",
      color: "yellow-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient",
    },
    {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
  ],
  image: olx,
  source_code_link: "https://github.com/manikandank8086/OLX-Clone.git",
  live_link: "",
},

  {
    name: "CineMax",
description: "Built a Netflix-inspired OTT platform (CineMax) with modern UI, dynamic content, and responsive design.",
    features: [
  "Implemented email verification with OTP-based authentication and secure login/signup using JWT.",
  "Enabled users to browse and stream movies, with dynamic content rendering and categorized listings.",
  "Integrated MongoDB to store user data, movie details, watch history, and preferences.",
  "Developed RESTful APIs to ensure seamless communication between frontend and backend services.",
  "Implemented secure authentication and authorization for protected routes.",
  "Built a responsive UI with modern design principles and cross-device compatibility."
],

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
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
       {
      name: "firebase",
      color: "orange-text-gradient",
    },
    ],
    image: cinemax,
    source_code_link: "https://github.com/manikandank8086/NetFlix-Clone.git",
    live_link: "https://netflix-manu.vercel.app/",
  },
  // {
  //   name: "FlipKart Price Tracker",
  //   description:
  //     "Chrome extension to track FlipKart product prices and send an alert to users when prices go below the user-selected price.",
  //   features: [
  //     "Users can add products to the watchlist by clicking on the extension icon on the product page.",
  //     "Users can set a price alert by entering the desired price for the product.",
  //   ],
  //   tags: [
  //     {
  //       name: "JavaScript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Chrome Extension",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "ReactJs",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tracker,
  //   source_code_link: "https://github.com/himanshu8443/FlipKart-Price-Tracker",
  //   live_link:
  //     "https://chromewebstore.google.com/detail/fliptrack-flipkart-price/pekpfcghlbljghaojdlajgpceebobokd?hl=en",
  // },
  // {
  //   name: "Social Sphere",
  //   description:
  //     "A full-stack social media application with user authentication, infinite scroll, and image and video uploads.",
  //   features: [
  //     "User authentication using JWT and OAuth providers.",
  //     "Infinite scroll for posts.",
  //     "Image and video uploads.",
  //     "Like, comment, and share posts.",
  //     "Follow and unfollow users.",
  //     "Dark mode support.",
  //   ],
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Supabase",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "redux",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: socialSphere,
  //   source_code_link: "https://github.com/himanshu8443/SocialSphere",
  //   live_link: "https://socialspherex.vercel.app/",
  // },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

export {
  services,
  technologies,
  //  experiences,
  //  testimonials,
  projects,
};
