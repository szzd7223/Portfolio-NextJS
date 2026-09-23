import { assets } from "@/assets/assets";

export const portfolioData = {
  personalInfo: {
    name: "Saad Shaikh",
    title: "Software Developer",
    tagline:
      "Software Developer, building full-stack web applications, developer tools, and machine learning models.",
    bio: "Software dev, working with Node.js, React.js, Next.js, Python and Java.\nI build whatever I like. It is usually good, I can build whatever you want, definitely.",
    avatar: assets.profile_img,
    resumeLink: "/saad-resume.pdf",
    socials: {
      github: "https://github.com/szzd7223",
      linkedin: "https://www.linkedin.com/in/ssaaaaddshaikh/",
      twitter: "https://x.com/ssaaaadd_sh",
      email: "mailto:mohdsaadshaikh17@gmail.com", // Feel free to update this email if needed
    },
  },
  featuredProjects: [
    {
      id: "crypto-trading-app",
      tag: "Fintech Web App",
      title: "Real-Time Crypto Trading App",
      description:
        "Full-stack trading platform featuring real-time order-book delta synchronization, synthetic market data engine, adaptive WebSocket delivery tiers, and interactive TradingView charting.",
      githubUrl: "https://github.com/szzd7223/crypto-trading-app",
      liveUrl: "https://crypto-trading-app-flame.vercel.app",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "WebSocket",
        "Zustand",
        "Express",
      ],
    },
    {
      id: "identity-graph",
      tag: "AI & Knowledge Graph",
      title: "IdentityGraph",
      description:
        "A unified career profile and AI context substrate transforming developer portfolios into a live web platform and structured Knowledge Graph queryable by AI models via Model Context Protocol (MCP).",
      githubUrl: "https://github.com/szzd7223/identity-graph",
      liveUrl: "https://identity-graph-frontend.vercel.app",
      technologies: [
        "Next.js 15",
        "PostgreSQL",
        "Prisma ORM",
        "Express",
        "MCP",
        "Gemini AI",
      ],
    },
    {
      id: "gym-ai",
      tag: "Full Stack App",
      title: "AI Gym Workout Planner",
      description:
        "Generates personalized workout routines using Gemini 2.5 Flash Lite, Prisma, and Neon Postgres. It bridges user goals, physical stats, and equipment options with real-time AI routines, structured cleanly in a relational database.",
      githubUrl: "https://github.com/szzd7223/gym-ai",
      liveUrl: null,
      technologies: [
        "Next.js",
        "Gemini 3.5 Flash Lite",
        "Prisma ORM",
        "Neon Postgres",
        "Tailwind CSS",
      ],
    },
    {
      id: "music-locker",
      tag: "Media Web App",
      title: "MusicLocker",
      description:
        "A secure music storage and playback system. Allows you to upload, lock, and manage your private audio library in a clean web application.",
      githubUrl: "https://github.com/szzd7223/MusicLocker",
      liveUrl: "https://music-locker-eight.vercel.app/",
      technologies: [
        "Java",
        "Spring Boot",
        "Next.js",
        "Docker",
        "REST APIs",
        "MVC Pattern",
      ],
    },
  ],
  skillsCategories: [
    {
      id: "languages",
      name: "Languages",
      skills: [
        {
          name: "JavaScript",
          usage:
            "Used across all frontend portals, Node.js tools, and browser extensions.",
        },
        {
          name: "TypeScript",
          usage:
            "Integrated in MusicLocker, net-bin, and server-side configurations.",
        },
        {
          name: "Python",
          usage:
            "ML model training and edge robotics inference on NVIDIA Jetson.",
        },
        {
          name: "Java",
          usage:
            "Object-oriented programming, algorithms, and early systems logic.",
        },
        {
          name: "C/C++",
          usage:
            "Low-level system programming, algorithms, and hardware configurations.",
        },
        {
          name: "SQL",
          usage:
            "Schema normalization, complex queries, and index optimization.",
        },
        {
          name: "Bash",
          usage: "Shell scripts for CI/CD pipelines and deployment automation.",
        },
      ],
    },
    {
      id: "frameworks",
      name: "Frameworks & Libraries",
      skills: [
        {
          name: "React",
          usage:
            "Front-end SPA state management in Picky.Editor and VidMetrics.",
        },
        {
          name: "Next.js",
          usage:
            "Used for Gym AI Planner, MusicLocker, and student portals (SSR/ISR).",
        },
        {
          name: "Node.js",
          usage: "Core runtime for backend REST APIs and admin dashboards.",
        },
        {
          name: "Express",
          usage: "Route handling, custom middleware, and validation pipelines.",
        },
        {
          name: "Spring Boot",
          usage:
            "Architected music catalog caching microservices in MusicLocker.",
        },
        {
          name: "FastAPI",
          usage:
            "High-performance Python routers for machine learning integrations.",
        },
        {
          name: "Django",
          usage:
            "Robust backend logic, admin panels, and relational data flows.",
        },
      ],
    },
    {
      id: "databases",
      name: "Databases & ORMs",
      skills: [
        {
          name: "PostgreSQL",
          usage:
            "Primary relational database for Gym AI Planner and MusicLocker.",
        },
        {
          name: "MongoDB",
          usage:
            "NoSQL storage optimized using compound indexes for 25% faster responses.",
        },
        {
          name: "MySQL",
          usage:
            "Relational storage for comment threads and structured analytics.",
        },
        {
          name: "Redis",
          usage: "Session caching and upstream API payload proxy caching.",
        },
        {
          name: "Prisma",
          usage:
            "Database schema migration and queries in Gym AI and backend intern projects.",
        },
        {
          name: "Mongoose",
          usage: "Structured document validation schemas for MongoDB backends.",
        },
      ],
    },
    {
      id: "ai-robotics",
      name: "AI/ML & Robotics",
      skills: [
        {
          name: "ROS2",
          usage:
            "Modular edge middleware for speech-to-intent and action routing.",
        },
        {
          name: "LangChain",
          usage: "Orchestrated LLM prompt sequences for Gym AI workouts.",
        },
        {
          name: "TensorFlow",
          usage: "Neural network prototyping and deep learning model training.",
        },
        {
          name: "PyTorch",
          usage: "Neural network fine-tuning and model execution setups.",
        },
        {
          name: "Scikit-learn",
          usage: "Data scaling, feature selection, and regression pipelines.",
        },
      ],
    },
    {
      id: "cloud-devops",
      name: "Cloud & DevOps",
      skills: [
        {
          name: "Docker",
          usage:
            "Containerized backend endpoints deployed on Render/AWS environments.",
        },
        {
          name: "AWS",
          usage:
            "Setup EC2 instances, S3 buckets, and basic cloud permissions.",
        },
        {
          name: "Google Cloud Platform",
          usage: "Third-party login portals and cloud configurations.",
        },
        {
          name: "Linux",
          usage:
            "Development environment, server configurations, and Jetson scripting.",
        },
        {
          name: "Git",
          usage:
            "Collaborative branch structures and version control workflows.",
        },
        {
          name: "CI/CD",
          usage: "Automated test runs and compilations via GitHub Actions.",
        },
      ],
    },
    {
      id: "core-cs",
      name: "Core CS",
      skills: [
        {
          name: "Data Structures",
          usage: "Selecting and tailoring standard container types for speed.",
        },
        {
          name: "Algorithms",
          usage:
            "Graph traversals, coordinate adjustments, and query sorting logic.",
        },
        {
          name: "Operating Systems (OS)",
          usage:
            "Understanding threading, process execution, and memory layouts.",
        },
        {
          name: "DBMS",
          usage:
            "Relational design, indexing, foreign constraints, and transactions.",
        },
        {
          name: "Computer Networks (CN)",
          usage: "Socket layers, HTTP state layers, and proxy architectures.",
        },
        {
          name: "OOP",
          usage:
            "Modular structures leveraging abstraction and robust class setups.",
        },
      ],
    },
  ],
  experiences: [
    {
      role: "Full Stack Developer",
      company: "I2Global Virtual Learning",
      location: "Bangalore, India",
      period: "December 2025 – February 2026",
      points: [
        "Developed a Next.js student learning portal and Node.js admin dashboards, implementing dynamic page rendering (SSR) to improve load times by 30%.",
        "Optimized MongoDB query performance by designing compound indexes and aggregation pipelines, reducing average database response times by 25%.",
        "Integrated stateless session authentication using custom middleware and configured automated GitHub Actions workflows for continuous integration.",
      ],
    },
    {
      role: "Backend Developer Intern",
      company: "Codtech IT Solutions",
      location: "Remote",
      period: "April 2025 – May 2025",
      points: [
        "Developed high-throughput REST APIs with Node.js and Express, implementing centralized exception handling and custom validation middleware.",
        "Designed normalized database schemas using Mongoose and Prisma, enforcing data integrity constraints to ensure zero-corruption data storage.",
        "Wrote automated unit and integration tests using Jest, achieving over 85% code coverage and preventing regression errors during development.",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Engineering (Electronics and Telecommunication)",
    institute: "MS Ramaiah Institute of Technology",
    year: "Dec 2021 – Jun 2025",
    location: "Bengaluru, Karnataka, India",
  },
  contact: {
    web3FormsAccessKey: "9b1210b0-604f-45a1-8480-3706a65ae9ac",
    headline: "Get in touch",
    subheadline: "Contact with me",
    description:
      "I’m currently open to full-time roles, internships, or freelance opportunities. If you’re hiring or have something exciting in mind, feel free to reach out — I’d love to connect.",
  },
};
