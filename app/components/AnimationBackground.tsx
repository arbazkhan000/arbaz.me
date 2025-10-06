"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // ✅ Ensure this runs only in browser
        if (typeof window === "undefined" || !containerRef.current) return;

        const container = containerRef.current;
        const particles: HTMLDivElement[] = [];

        // Clear old children (important when hot-reloading)
        container.innerHTML = "";

        // Create floating particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement("div");
            particle.className = "absolute rounded-full";
            const size = Math.random() * 10 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            const colors = [
                "bg-primary/30",
                "bg-accent/30",
                "bg-primary/20",
                "bg-accent/20",
            ];
            particle.classList.add(
                colors[Math.floor(Math.random() * colors.length)]
            );
            container.appendChild(particle);
            particles.push(particle);

            gsap.to(particle, {
                y: (Math.random() - 0.5) * 400,
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1 + Math.random() * 2,
                },
            });

            const tl = gsap.timeline({ repeat: -1 });
            const duration = 15 + Math.random() * 15;
            const x = (Math.random() - 0.5) * 300;
            const y = (Math.random() - 0.5) * 300;
            tl.to(particle, { x, y, duration, ease: "sine.inOut" }).to(
                particle,
                {
                    x: 0,
                    y: 0,
                    duration,
                    ease: "sine.inOut",
                }
            );

            gsap.to(particle, {
                scale: 1.8,
                opacity: 0.6,
                duration: 4 + Math.random() * 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }

        // ✅ Create geometric shapes safely
        const shapes = ["square", "triangle", "circle", "hexagon"];
        for (let i = 0; i < 8; i++) {
            const shape = document.createElement("div");
            shape.className = "absolute border-2 border-primary/10";
            const size = Math.random() * 120 + 60;
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.left = `${Math.random() * 100}%`;
            shape.style.top = `${Math.random() * 120}%`;

            const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
            if (shapeType === "circle") {
                shape.style.borderRadius = "50%";
            } else if (shapeType === "triangle") {
                shape.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
            } else if (shapeType === "hexagon") {
                shape.style.clipPath =
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
            }

            container.appendChild(shape);

            gsap.to(shape, {
                y: (Math.random() - 0.5) * 600,
                rotation: 180,
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 2,
                },
            });

            gsap.to(shape, {
                rotation: 360,
                duration: 25 + Math.random() * 25,
                repeat: -1,
                ease: "none",
            });

            gsap.to(shape, {
                y: `+=${(Math.random() - 0.5) * 150}`,
                x: `+=${(Math.random() - 0.5) * 150}`,
                duration: 20 + Math.random() * 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }

        // ✅ Add grid overlay
        const gridLines = document.createElement("div");
        gridLines.className = "absolute inset-0 opacity-5";
        gridLines.style.backgroundImage = `
      linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
      linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
    `;
        gridLines.style.backgroundSize = "60px 60px";
        container.appendChild(gridLines);

        gsap.to(gridLines, {
            y: 200,
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
            },
        });

        return () => {
            particles.forEach((p) => p.remove());
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // ✅ Empty stable HTML for SSR (prevents mismatch)
    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none overflow-hidden z-0"
            aria-hidden="true"
        />
    );
};

export default AnimatedBackground;
