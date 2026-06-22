import {
    Building2, Users, Code2, Zap, Trophy, Star, GraduationCap,
    Megaphone, Heart, Briefcase, Rocket
} from "lucide-react";

export const EXPERIENCE = [
    {
        id: 1,
        role: "Founding Engineer",
        company: "Cherry Dating",
        url: "https://cherrydate.in",
        location: "Lucknow, India",
        period: "Jan 2026 – Present",
        current: true,
        description: "Architected a scalable mobile platform serving 10k+ monthly active users, sustaining sub-200ms response times handling 60k+ daily geospatial matching requests. Modeled an ELO-based recommendation engine increasing matches per user by 35%, and optimized AWS infrastructure caching to reduce monthly costs by 60%.",
        metrics: [
            { value: "10k+", label: "Monthly Active Users" },
            { value: "+35%", label: "Matches per User" },
            { value: "-60%", label: "AWS Infrastructure Costs" },
        ],
        tech: ["React Native", "Node.js", "MongoDB", "Express", "Axios", "Tailwind", "Framer Motion"],
    },
    {
        id: 2,
        role: "Software Developer Intern",
        company: "Aitreya Tech Solutions",
        url: "https://alumns.com",
        location: "Noida, India",
        period: "Oct – Dec 2025",
        current: false,
        description: "Developed a scalable real-time chat system with WebSocket event-driven queuing to support 5,000+ concurrent users in production. Architected 20+ RESTful APIs optimizing response times by 30%, and refactored React state management to improve Core Web Vitals, decreasing page load times by 25%.",
        metrics: [
            { value: "5k+", label: "Concurrent Chat Users" },
            { value: "-30%", label: "API Response Time" },
            { value: "-25%", label: "Page Load Time" },
        ],
        tech: ["Node.js", "Socket.IO", "MongoDB", "React", "Redux", "AWS"],
    },
    {
        id: 3,
        role: "Full-Stack Developer",
        company: "Wvintech Solution",
        location: "Selangor, Malaysia",
        period: "Mar – Aug 2025",
        current: false,
        description: "Shipped an enterprise full-stack ERP school management system securing 15,000+ records with strict RBAC. Optimized AWS RDS (PostgreSQL) through query indexing and connection pooling to cut API latency by 35%, and automated CI/CD pipelines via GitHub Actions and AWS Lambda.",
        metrics: [
            { value: "15k+", label: "Secured Records" },
            { value: "-35%", label: "API Latency" },
            { value: "-30%", label: "Deployment Cycles" },
        ],
        tech: ["Flutter", "React", "Node.js", "PostgreSQL", "AWS Lambda", "API Gateway", "GitHub Actions"],
    },
];

export const COLLEGE_EXPERIENCE = [
    {
        role: "Social Media Lead",
        organization: "Aarzoo Cultural Club",
        institution: "IIIT Bhopal",
        period: "2024 – 2025",
        icon: Megaphone
    },
    {
        role: "PR Head",
        organization: "Entrepreneurship Cell",
        institution: "IIIT Bhopal",
        period: "2025 – Present",
        icon: Users
    }
];

export const SKILLS = [
    {
        category: "Languages",
        items: ["Java", "Python", "JavaScript", "TypeScript", "Dart", "SQL", "HTML/CSS"]
    },
    {
        category: "Frameworks",
        items: ["React", "React Native", "Next.js", "Node.js", "Express", "Flutter", "Socket.IO"]
    },
    {
        category: "Data & Cloud",
        items: ["MongoDB", "PostgreSQL", "Redis", "AWS (EC2, RDS, Lambda, Cognito)", "Docker"]
    },
    {
        category: "Practices",
        items: ["REST APIs", "WebSockets", "CI/CD", "Testing (Jest)", "System Optimization"]
    }
];

export const PROJECTS = [
    {
        title: "Yuno",
        desc: "Proximity-based discovery app enabling real-time user matching within a selected radius for 1k+ daily location queries. Optimized spatial indexing in PostGIS using batching to achieve 48% faster match performance.",
        tech: ["Next.js", "Node.js", "PostgreSQL", "PostGIS", "Socket.IO"],
        url: "https://frontend-nine-orcin-70.vercel.app/",
        image: "/yuno.png"
    },
    {
        title: "Trace",
        desc: "Engineered a search engine with Puppeteer and FlexSearch, cutting latency from 2.5s to <5ms for 50k+ documents. Integrated LLaMA 3.1 via Vercel AI SDK for real-time synthesized answers, boosting relevance by 40%.",
        tech: ["TypeScript", "Next.js", "Express", "Puppeteer", "FlexSearch"],
        url: "https://trace-search-engine-ku6b.vercel.app/",
        image: "/trace.png"
    },
    {
        title: "Money Map",
        desc: "Optimized Next.js prefetching to lift application load performance by 40%. Integrated Gemini API for automated, high-accuracy expense classification and budgeting across 1000+ financial transactions.",
        tech: ["Next.js", "Node.js", "PostgreSQL", "Gemini API", "Tailwind"],
        url: "https://money-map-fnl.vercel.app",
        image: "/money-map.png"
    }
];

export const ACHIEVEMENTS = [
    {
        label: "Competitive Programming",
        value: "Top 1%",
        desc: "Consistently ranked in top percentile across global contests",
        icon: Trophy
    },
    {
        label: "DSA Problems Solved",
        value: "800+",
        desc: "Across LeetCode, CodeChef, and Codeforces",
        icon: Code2
    },
    {
        label: "Startup Growth",
        value: "10k+",
        desc: "Scaled Cherry from 0 to 10,000+ users rapidly",
        icon: Rocket
    },
    {
        label: "Google Ideathon",
        value: "Runner-Up",
        desc: "1st Runner-Up in university-wide innovation hackathon",
        icon: Zap
    },
];

export const STATS = [
    { icon: Briefcase, value: "1.2yr+", label: "Industry Exp" },
    { icon: Users, value: "25k+", label: "Users Impacted" },
    { icon: Star, value: "3", label: "Star CodeChef" },
    { icon: Code2, value: "800+", label: "DSA Problems Solved" },
];
