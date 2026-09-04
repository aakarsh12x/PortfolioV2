// Portfolio Data - Aakarsh Singh

export const personalInfo = {
    name: "Aakarsh Singh",
    title: "Full Stack Developer",
    tagline: "Building the future with AI & Web Tech",
    description:
        "Information Technology student at IIIT Bhopal, passionate about building innovative web applications and exploring artificial intelligence.",
    location: "Lucknow, Uttar Pradesh, India",
    education: {
        degree: "B.Tech in Information Technology",
        institution: "IIIT Bhopal",
    },
    experience: "2+ years",
    dsaProblems: 400,
    status: "Open to Work",
};

export const socialLinks = {
    github: "https://github.com/aakarsh12x",
    linkedin: "https://www.linkedin.com/in/aakarsh-singh-b27a5228b/",
    email: "singhaakarsh28@gmail.com",
};

export const skills = {
    languages: [
        { name: "Java", icon: "java" },
        { name: "Python", icon: "python" },
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
        { name: "Dart", icon: "dart" },
    ],
    frameworks: [
        { name: "React.js", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "express" },
        { name: "Flutter", icon: "flutter" },
        { name: "scikit-learn", icon: "sklearn" },
    ],
    databases: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "NeonDB", icon: "neon" },
        { name: "Amazon RDS", icon: "aws" },
    ],
    tools: [
        { name: "Git", icon: "git" },
        { name: "VS Code", icon: "vscode" },
        { name: "AWS", icon: "aws" },
        { name: "Postman", icon: "postman" },
        { name: "Jupyter", icon: "jupyter" },
    ],
};

export const experiences = [
    {
        id: 1,
        role: "SDE Intern",
        company: "Faym – India's Largest Influencer Earnings App",
        location: "India (Remote)",
        period: "July 2026 – Present",
        highlights: [
            "Engineered high-throughput backend pipelines for 7.5M+ live users, querying 200M+ MongoDB documents.",
            "Drove backend optimizations with Python, Node.js, and Next.js, achieving up to 4× faster load times.",
            "Architected scalable data ingestion services ensuring high availability and sub-second query performance.",
        ],
    },
    {
        id: 2,
        role: "Founding Engineer",
        company: "Cherry Dating",
        location: "Lucknow, India",
        period: "Jan 2026 – Present",
        highlights: [
            "Built and launched a consumer-facing dating platform from scratch, scaling from 0 to 10,000+ users in 2 months with zero downtime post-launch.",
            "Owned the end-to-end full-stack architecture using Node.js, Next.js, React Native, MongoDB, Redis, and AWS across both frontend and backend systems.",
            "Engineered a backend handling 250,000+ daily requests with sub-200ms response times under concurrent load.",
            "Led product and technical decisions by translating user behavior into scalable features that improved engagement and platform growth.",
        ],
    },
    {
        id: 3,
        role: "Software Developer Intern",
        company: "Aitreya Tech Solutions – Alumns",
        location: "Noida (Remote)",
        period: "Oct – Dec 2025",
        highlights: [
            "Built and shipped end-to-end features for alumns.com using React, Node.js, and MongoDB, delivering high-performance, responsive experiences.",
            "Designed and optimized secure REST APIs for high-concurrency production workloads, improving system reliability and performance.",
            "Built WebSocket-based real-time features for responsive live interactions at scale.",
        ],
    },
    {
        id: 4,
        role: "Full-Stack Developer",
        company: "Wvintech Solution – Péče",
        location: "Malaysia (Remote)",
        period: "Mar 2025 – Aug 2025",
        highlights: [
            "Solo-architected and built 'Péče', an end-to-end ERP school management system, engineering high-performance user interfaces using Flutter, React and Node.js.",
            "Architected and deployed secure, robust backend APIs with Node.js, seamlessly integrating with AWS infrastructure to ensure high system reliability and continuous uptime.",
            "Owned the complete development lifecycle for critical system modules from bridging frontend/backend requirements to cloud deployment and performance tuning.",
        ],
    },
];

export const projects = [
    {
        id: 1,
        title: "FastQ",
        subtitle: "Smart Queue Management System",
        description:
            "A smart queue management platform managing queues across 4+ sectors. Implemented JWT auth, role control, and Socket.IO notifications, reducing wait times by 52%.",
        tech: ["Next.js", "Express", "MongoDB", "Socket.IO"],
        liveUrl: "https://fastq-ichy73kkw-aakarsh12xs-projects.vercel.app/user-dashboard",
        githubUrl: null,
        icon: "queue",
    },
    {
        id: 2,
        title: "MoneyMap",
        subtitle: "Financial Management App",
        description:
            "A comprehensive financial management application for tracking expenses, budgeting, and financial planning with an intuitive dashboard.",
        tech: ["JavaScript", "React", "Node.js"],
        liveUrl: "https://money-map-fnl.vercel.app",
        githubUrl: "https://github.com/aakarsh12x/MoneyMapFnl",
        icon: "chart",
    },
    {
        id: 3,
        title: "Yuno",
        subtitle: "Geospatial Social Media",
        description:
            "A modern geospatial social media platform with real-time chat, location-based discovery, interactive maps, and Socket.IO-powered communication.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.IO"],
        liveUrl: "https://frontend-6sa6005p4-aakarsh12xs-projects.vercel.app/",
        githubUrl: "https://github.com/aakarsh12x/Yuno-GeoSpatial-Social-Media",
        icon: "map",
    },
    {
        id: 4,
        title: "AI Detective",
        subtitle: "Intelligent Investigation System",
        description:
            "An intelligent investigation system powered by AI algorithms for pattern recognition, data analysis, and automated investigation workflows.",
        tech: ["Python", "AI/ML", "TensorFlow"],
        liveUrl: null,
        githubUrl: "https://github.com/aakarsh12x/AI-Detective",
        icon: "brain",
    },
];

export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];
