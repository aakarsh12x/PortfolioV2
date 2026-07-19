"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const CarCard = () => {
    // Mobile tap-to-move state
    const [isAccelerating, setIsAccelerating] = useState(false);

    return (
        <div
            className={`car-card-wrapper ${isAccelerating ? 'is-accelerating' : ''}`}
            onClick={() => setIsAccelerating(prev => !prev)}
        >
            <div className="car-card">
                <div className="car-card__glow" aria-hidden="true" />
                <div className="car-card__content">
                    <span className="car-card__label">Continuous Delivery</span>
                    <h3>Shipped with speed &amp; precision.</h3>
                    <p>
                        From design to deployment, shipping clean code is about keeping momentum. Hover to accelerate the build pipeline.
                    </p>

                    {/* SVG Animated Car Scene */}
                    <div className="car-card__scene">
                        <div className="car-card__road" aria-hidden="true">
                            <div className="car-card__road-line" />
                        </div>

                        {/* Speed lines for hyperspeed effect */}
                        <div className="car-card__speed-lines" aria-hidden="true">
                            <div className="speed-line sl-1" />
                            <div className="speed-line sl-2" />
                            <div className="speed-line sl-3" />
                            <div className="speed-line sl-4" />
                        </div>

                        <svg
                            className="car-card__svg-car"
                            viewBox="0 0 240 85"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Definition for glow filters & beams */}
                            <defs>
                                <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Headlight Beam */}
                            <polygon points="215,48 240,40 240,55 212,50" fill="url(#beamGrad)" />

                            {/* Car Body Group */}
                            <g className="car-card__car-body">
                                {/* Cyberpunk Neon Underglow */}
                                <line x1="40" y1="57" x2="175" y2="57" stroke="var(--accent)" strokeWidth="3" opacity="0.4" />

                                {/* High-Fidelity Hypercar Silhouette */}
                                <path
                                    d="M20,55 L40,55 C40,35 70,35 70,55 L170,55 C170,35 200,35 200,55 L215,55 C222,55 225,50 215,46 L175,37 C155,30 110,18 85,18 C60,18 40,28 30,34 L12,30 L16,39 C16,45 18,50 20,55 Z"
                                    fill="var(--text-primary)"
                                />

                                {/* Sleek Dark Canopy (Windows) */}
                                <path
                                    d="M82,20 C110,20 145,28 165,36 L150,38 L80,38 L65,34 Z"
                                    fill="var(--bg-primary)"
                                    opacity="0.9"
                                />
                                {/* Window Reflection Highlight */}
                                <path d="M85,22 C105,22 135,29 155,35" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

                                {/* Detail Lines (Door, Side Skirt) */}
                                <path d="M75,50 L165,50" fill="none" stroke="var(--bg-primary)" strokeWidth="1" opacity="0.4" />
                                <path d="M120,38 L110,50" fill="none" stroke="var(--bg-primary)" strokeWidth="1" opacity="0.4" />

                                {/* Lighting */}
                                <polygon points="208,46 215,46 212,49 205,49" fill="var(--accent)" />
                                <polygon points="20,42 22,42 22,45 19,45" fill="#ff003c" />
                            </g>

                            {/* Rotating Wheels */}
                            {/* Rear Wheel */}
                            <g transform="translate(55, 55)">
                                {/* Static Brake Caliper */}
                                <path d="M-9,-9 C-13,-5 -13,5 -9,9 L-5,7 C-7,4 -7,-4 -5,-7 Z" fill="#ff003c" />
                                {/* Tire & Rim Border */}
                                <circle cx="0" cy="0" r="14" fill="#090909" stroke="var(--text-dim)" strokeWidth="0.5" />
                                <circle cx="0" cy="0" r="10" fill="transparent" stroke="#333" strokeWidth="1.5" />

                                {/* Rotating Spokes */}
                                <g className="car-card__wheel car-card__wheel--rear">
                                    <path d="M-1.5,-10 L1.5,-10 L2.5,-3 L9,-8 L11,-6 L4,-1 L10,1 L10,4 L3,3 L8,9 L6,11 L1,4 L-1,10 L-4,10 L-3,3 L-9,8 L-11,6 L-4,-1 L-10,-1 L-10,-4 L-3,-3 L-8,-9 L-6,-11 L-1,-4 Z" fill="var(--text-primary)" />
                                    <circle cx="0" cy="0" r="3" fill="var(--accent)" />
                                </g>
                            </g>

                            {/* Front Wheel */}
                            <g transform="translate(185, 55)">
                                {/* Static Brake Caliper */}
                                <path d="M-9,-9 C-13,-5 -13,5 -9,9 L-5,7 C-7,4 -7,-4 -5,-7 Z" fill="#ff003c" />
                                {/* Tire & Rim Border */}
                                <circle cx="0" cy="0" r="14" fill="#090909" stroke="var(--text-dim)" strokeWidth="0.5" />
                                <circle cx="0" cy="0" r="10" fill="transparent" stroke="#333" strokeWidth="1.5" />

                                {/* Rotating Spokes */}
                                <g className="car-card__wheel car-card__wheel--front">
                                    <path d="M-1.5,-10 L1.5,-10 L2.5,-3 L9,-8 L11,-6 L4,-1 L10,1 L10,4 L3,3 L8,9 L6,11 L1,4 L-1,10 L-4,10 L-3,3 L-9,8 L-11,6 L-4,-1 L-10,-1 L-10,-4 L-3,-3 L-8,-9 L-6,-11 L-1,-4 Z" fill="var(--text-primary)" />
                                    <circle cx="0" cy="0" r="3" fill="var(--accent)" />
                                </g>
                            </g>
                        </svg>
                    </div>

                    <div className="car-card__footer">
                        <span>Speed-optimized architecture</span>
                        <ArrowRight className="car-card__arrow" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </div>
    );
};
