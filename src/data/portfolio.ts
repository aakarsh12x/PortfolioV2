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
        period: "Dec 2025 – Present",
        current: true,
        description: "Directed end-to-end development of a mobile dating platform using React Native, Node.js, and MongoDB, implementing geospatial indexing for location-based matching within a 5–100 km radius.",
        metrics: [
            { value: "5k+ *Growing Rapidly", label: "Active Users" },
            { value: "<150ms", label: "API Generates Recommendations in" },
            { value: "2M+", label: "User Engagement On Social Media" },
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
        description: "Engineered real-time chat systems supporting 1k+ concurrent users. Elevated search visibility by applying on-page SEO and structured metadata, driving measurable 30% increase in organic impressions.",
        metrics: [
            { value: "2k+", label: "Real-time Users" },
            { value: "+30%", label: "SEO Growth" },
            { value: "-25%", label: "Page Load Time" },
        ],
        tech: ["Node.js", "Socket.IO", "MongoDB", "React", "SEO", "AWS"],
    },
    {
        id: 3,
        role: "Full-Stack Developer",
        company: "Wvintech Solution",
        location: "Selangor, Malaysia",
        period: "Mar – Aug 2025",
        current: false,
        description: "Delivered a school management platform for 15k+ records with secure role-based access. Orchestrated serverless automation using AWS Lambda and API Gateway, cutting release time by 60%.",
        metrics: [
            { value: "15k+", label: "Student Records" },
            { value: "-35%", label: "Query Latency" },
            { value: "-60%", label: "Deploy Time" },
        ],
        tech: ["Flutter", "Node.js", "PostgreSQL", "AWS Lambda", "API Gateway", "Docker"],
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
        title: "Geospatial Social Platform",
        desc: "Crafted proximity-based content discovery enabling real-time user matching within a selected radius, supporting 1k+ location queries/day. Accelerated spatial queries in PostGIS using batching tuning, achieving 48% faster match performance.",
        tech: ["Next.js", "Node.js", "PostgreSQL", "PostGIS", "Socket.IO"],
        url: "https://cherry.date"
    },
    {
        title: "AI Expense Tracker",
        desc: "Improved prefetching in Next.js, lifting load performance by 40%. Integrated the Gemini API for automated expense classification and budgeting across 1000+ financial transactions with verified accuracy.",
        tech: ["Next.js", "Node.js", "PostgreSQL", "Gemini API", "Tailwind"],
        url: "https://money-map-fnl.vercel.app"
    },
    {
        title: "FastQ",
        desc: "Smart queue management system built to optimize service times and customer flow.",
        tech: ["Next.js", "MongoDB", "Node.js", "Tailwind", "Framer Motion"],
        url: "https://fastq-ichy73kkw-aakarsh12xs-projects.vercel.app",
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
        value: "700+",
        desc: "Across LeetCode, CodeChef, and Codeforces",
        icon: Code2
    },
    {
        label: "Startup Growth",
        value: "5k+",
        desc: "Scaled Cherry from 0 to 5,000+ users rapidly",
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
    { icon: Briefcase, value: "1yr+", label: "Industry Exp" },
    { icon: Users, value: "25k+", label: "Users Impacted" },
    { icon: Star, value: "3", label: "Star CodeChef" },
    { icon: Code2, value: "700+", label: "DSA Problems Solved" },
];
