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
    whatsapp: "https://wa.me/918739018155",
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
        role: "Software Developer Intern",
        company: "Aitreya Tech Solutions – Alumns",
        location: "Noida (Remote)",
        period: "Oct 2025 – Present",
        highlights: [
            "Built real-time 1:1 and group chat modules using Node.js and Socket.IO with MongoDB, supporting 1000+ live users",
            "Developed scalable message delivery modules on Render, improving reliability and reducing latency by 35%",
            "Optimized React chat interfaces by reducing re-render overhead, improving UI responsiveness by 40%",
        ],
    },
    {
        id: 2,
        role: "Full-Stack Developer",
        company: "P´eˇce - School Management System (Wvintech Solution)",
        location: "Malaysia (Remote)",
        period: "Mar 2025 – Aug 2025",
        highlights: [
            "Delivered full-stack school management system using Flutter and Node.js, handling 15k+ student records",
            "Engineered scalable backend with Amazon RDS, achieving 99% uptime and 35% reduced API latency",
            "Implemented serverless architecture using API Gateway and Lambda, cutting deployment time by 60%",
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
