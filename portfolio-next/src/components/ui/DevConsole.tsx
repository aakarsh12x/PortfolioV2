"use client";

import React, { useState } from "react";
import { FileCode, Check, Copy } from "lucide-react";
import { BorderBeam } from "./BorderBeam";

export const DevConsole = () => {
    const [activeTab, setActiveTab] = useState<"ts" | "json">("ts");
    const [copied, setCopied] = useState(false);

    const tsCode = `import { Engineer } from "aakarsh";

const self = new Engineer({
    name: "Aakarsh Singh",
    role: "Full Stack & AI Engineer",
    location: "IIIT Bhopal",
    focus: ["Web Scalability", "AI Agents"]
});

// Key Metrics
self.experience = "1.2yr+";
self.dsaProblems = "800+ solved";
self.impact = "25k+ users";
self.codechef = "3 Star";`;

    const jsonCode = `{
  "engineer": {
    "name": "Aakarsh Singh",
    "experience": "1.2yr+",
    "dsa_solved": 800,
    "codechef_stars": 3,
    "active_users": "25,000+",
    "open_to_work": true
  }
}`;

    const handleCopy = async () => {
        const text = activeTab === "ts" ? tsCode : jsonCode;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text", err);
        }
    };

    return (
        <div 
            className="w-full max-w-lg rounded-xl border relative overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-300"
            style={{ 
                borderColor: "var(--border)",
                backgroundColor: "rgba(5, 5, 5, 0.65)",
            }}
        >
            <BorderBeam size={220} duration={8} className="opacity-45" />

            {/* Window Header */}
            <div 
                className="flex items-center justify-between px-4 py-3 border-b text-xs select-none"
                style={{ borderColor: "var(--border-subtle)", backgroundColor: "rgba(255, 255, 255, 0.02)" }}
            >
                {/* Mac Dots */}
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-80" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-80" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-80" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setActiveTab("ts")}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer font-mono"
                        style={{
                            color: activeTab === "ts" ? "var(--accent)" : "var(--text-muted)",
                            backgroundColor: activeTab === "ts" ? "var(--surface-2)" : "transparent",
                        }}
                    >
                        <FileCode className="w-3.5 h-3.5" />
                        main.ts
                    </button>
                    <button 
                        onClick={() => setActiveTab("json")}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer font-mono"
                        style={{
                            color: activeTab === "json" ? "var(--accent)" : "var(--text-muted)",
                            backgroundColor: activeTab === "json" ? "var(--surface-2)" : "transparent",
                        }}
                    >
                        <FileCode className="w-3.5 h-3.5" />
                        data.json
                    </button>
                </div>

                {/* Copy Button */}
                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md hover:bg-white/5 transition-colors cursor-pointer text-muted"
                    style={{ color: "var(--text-muted)" }}
                    title="Copy code"
                >
                    {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                    ) : (
                        <Copy className="w-4 h-4" />
                    )}
                </button>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-left select-text">
                {activeTab === "ts" ? (
                    <pre className="text-white/95">
                        <code>
                            <span className="text-orange-500">import</span> {"{"} <span className="text-blue-400">Engineer</span> {"}"} <span className="text-orange-500">from</span> <span className="text-emerald-400">"aakarsh"</span>;<br /><br />
                            <span className="text-orange-500">const</span> <span className="text-blue-300">self</span> = <span className="text-orange-500">new</span> <span className="text-yellow-400">Engineer</span>({"{"}<br />
                            {"    "}<span className="text-blue-200">name</span>: <span className="text-emerald-400">"Aakarsh Singh"</span>,<br />
                            {"    "}<span className="text-blue-200">role</span>: <span className="text-emerald-400">"Full Stack & AI Engineer"</span>,<br />
                            {"    "}<span className="text-blue-200">location</span>: <span className="text-emerald-400">"IIIT Bhopal"</span>,<br />
                            {"    "}<span className="text-blue-200">focus</span>: [<span className="text-emerald-400">"Web Scalability"</span>, <span className="text-emerald-400">"AI Agents"</span>]<br />
                            {"}"});<br /><br />
                            <span className="text-slate-500">// Key Metrics</span><br />
                            <span className="text-blue-300">self</span>.<span className="text-blue-200">experience</span> = <span className="text-emerald-400">"1.2yr+"</span>;<br />
                            <span className="text-blue-300">self</span>.<span className="text-blue-200">dsaProblems</span> = <span className="text-emerald-400">"800+ solved"</span>;<br />
                            <span className="text-blue-300">self</span>.<span className="text-blue-200">impact</span> = <span className="text-emerald-400">"25k+ users"</span>;<br />
                            <span className="text-blue-300">self</span>.<span className="text-blue-200">codechef</span> = <span className="text-emerald-400">"3 Star"</span>;
                        </code>
                    </pre>
                ) : (
                    <pre className="text-white/95">
                        <code>
                            {"{"}<br />
                            {"  "}<span className="text-blue-400">"engineer"</span>: {"{"}<br />
                            {"    "}<span className="text-blue-300">"name"</span>: <span className="text-emerald-400">"Aakarsh Singh"</span>,<br />
                            {"    "}<span className="text-blue-300">"experience"</span>: <span className="text-emerald-400">"1.2yr+"</span>,<br />
                            {"    "}<span className="text-blue-300">"dsa_solved"</span>: <span className="text-yellow-400">800</span>,<br />
                            {"    "}<span className="text-blue-300">"codechef_stars"</span>: <span className="text-yellow-400">3</span>,<br />
                            {"    "}<span className="text-blue-300">"active_users"</span>: <span className="text-emerald-400">"25,000+"</span>,<br />
                            {"    "}<span className="text-blue-300">"open_to_work"</span>: <span className="text-orange-400">true</span><br />
                            {"  }"}<br />
                            {"}"}
                        </code>
                    </pre>
                )}
            </div>

            {/* Micro status indicator */}
            <div 
                className="px-4 py-2 border-t text-[10px] flex items-center justify-between text-muted select-none"
                style={{ borderColor: "var(--border-subtle)", backgroundColor: "rgba(255, 255, 255, 0.01)", color: "var(--text-muted)" }}
            >
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span>Live Console Session</span>
                </div>
                <div>UTF-8</div>
            </div>
        </div>
    );
};
