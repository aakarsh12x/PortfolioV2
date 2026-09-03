import {
    Building2, Users, Code2, Zap, Trophy, Star, GraduationCap,
    Megaphone, Heart, Briefcase, Rocket
} from "lucide-react";

export const EXPERIENCE = [
    {
        id: 1,
        role: "SDE Intern",
        company: "Faym",
        url: "https://faym.co",
        location: "India",
        period: "July 2026 – Present",
        current: true,
        description: "Engineered high-throughput backend pipelines for 7.5M+ live users, querying 200M+ MongoDB documents. Drove backend optimizations with Python, Node.js, and Next.js, achieving up to 4× faster load times.",
        metrics: [
            { value: "7.5M+", label: "Live Users" },
            { value: "4x", label: "Loading Speedup" },
            { value: "200M+", label: "MongoDB Documents" },
        ],
        tech: ["Python", "Node.js", "Next.js", "MongoDB", "High-Throughput Systems", "REST APIs"],
    },
    {
        id: 2,
        role: "Founding Engineer",
        company: "Cherry Dating",
        url: "https://cherrydate.in",
        location: "Lucknow, India",
        period: "Jan 2026 – Present",
        current: true,
        description: "Architected mobile backend for 10k+ MAU with sub-200ms latency across 60k+ daily geospatial matches. Implemented an ELO recommendation engine (+35% matches) and reduced AWS costs by 60%.",
        metrics: [
            { value: "10k+", label: "Monthly Active Users" },
            { value: "+35%", label: "Matches per User" },
            { value: "-60%", label: "AWS Bills" },
        ],
        tech: ["React Native", "Node.js", "MongoDB", "Express", "Axios", "Tailwind", "Framer Motion"],
    },
    {
        id: 3,
        role: "SDE Intern",
        company: "Aitreya Tech Solutions",
        url: "https://alumns.com",
        location: "Noida, India",
        period: "Oct – Dec 2025",
        current: false,
        description: "Engineered scalable real-time WebSocket chat system supporting 5,000+ concurrent users. Built 20+ REST APIs reducing response times by 30% and improved Core Web Vitals to cut load times by 25%.",
        metrics: [
            { value: "5k+", label: "Concurrent Chat Users" },
            { value: "-30%", label: "API Response Time" },
            { value: "-25%", label: "Page Load Time" },
        ],
        tech: ["Node.js", "Socket.IO", "MongoDB", "React", "Redux", "AWS"],
    },
    {
        id: 4,
        role: "Full-Stack Developer",
        company: "Wvintech Solution",
        location: "Selangor, Malaysia",
        period: "Mar – Aug 2025",
        current: false,
        description: "Shipped enterprise ERP system securing 15,000+ records with RBAC. Optimized AWS RDS PostgreSQL to reduce latency by 35% and automated serverless CI/CD pipelines with Lambda and GitHub Actions.",
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
        id: "L.01",
        role: "PR Head",
        organization: "Entrepreneurship Cell",
        institution: "IIIT Bhopal",
        period: "2025 – Present",
        current: true,
        description: "Directing corporate outreach, venture partnerships, and institutional communications for flagship startup summits across central India.",
        metrics: [
            { value: "15+", label: "Corporate Partners" },
            { value: "500+", label: "Summit Attendees" }
        ],
        icon: Users
    },
    {
        id: "L.02",
        role: "Social Media Lead",
        organization: "Aarzoo Cultural Club",
        institution: "IIIT Bhopal",
        period: "2024 – 2025",
        current: false,
        description: "Spearheaded digital brand architecture, content production pipelines, and campaign distribution reaching 2,000+ student attendees.",
        metrics: [
            { value: "2k+", label: "Audience Reach" },
            { value: "40+", label: "Campaigns Shipped" }
        ],
        icon: Megaphone
    }
];

export const SKILLS = [
    {
        category: "Languages",
        items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"]
    },
    {
        category: "Frameworks",
        items: ["React", "React Native", "Next.js", "Node.js", "Express.js", "Socket.IO", "Tailwind CSS"]
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MongoDB", "Redis", "Amazon RDS"]
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS (EC2, RDS, S3)", "Docker", "Kubernetes", "Git", "GitHub Actions", "CI/CD"]
    },
    {
        category: "AI",
        items: ["AI Agents", "Retrieval-Augmented Generation (RAG)", "LLM APIs (OpenAI, Gemini, NVIDIA NIM)"]
    },
    {
        category: "Practices",
        items: ["REST APIs", "WebSockets", "Distributed Systems", "Microservices", "Linux", "Agile", "Unit & Integration Testing"]
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
