export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Aakarsh Singh",
        url: "http://aakarshsingh.in",
        image: "http://aakarshsingh.in/image.png",
        sameAs: [
            "https://github.com/aakarsh12x",
            "https://www.linkedin.com/in/aakarsh-singh-b27a5228b/",
            "mailto:singhaakarsh28@gmail.com"
        ],
        jobTitle: "Full Stack Developer",
        worksFor: {
            "@type": "Organization",
            name: "Cherry Dating",
            url: "https://cherrydate.in"
        },
        description: "Aakarsh Singh is a Full Stack Developer & AI Enthusiast specializing in React, Next.js, Node.js, and Cloud Architecture.",
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "IIIT Bhopal"
        },
        knowsAbout: ["Full Stack Development", "AI Engineering", "React", "Next.js", "Node.js", "Cloud Architecture"]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
