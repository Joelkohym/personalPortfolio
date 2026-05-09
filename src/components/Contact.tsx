"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig, navLinks } from "@/data/site-config";

function GithubIcon() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
			<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
		</svg>
	);
}

function LinkedInIcon() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
			<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
		</svg>
	);
}

export default function Contact() {
	return (
		<>
			<Section
				id="contact"
				className="py-32 px-6 md:px-12 lg:px-24 w-full bg-black text-center flex flex-col items-center"
			>
				<div className="w-full max-w-7xl relative z-10 flex flex-col items-center">
					{/* Section Label */}
					<motion.span
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-sm md:text-base tracking-[0.3em] uppercase text-[--color-accent] mb-6 block font-medium"
					>
						Contact
					</motion.span>

					{/* Main Heading */}
					<h2 className="text-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-10 font-serif text-white max-w-4xl">
						Let&apos;s build something{" "}
						<span className="italic text-[--color-accent]">together</span>
					</h2>

					{/* Bio/CTA Text */}
					<p className="text-[--color-text-secondary] text-lg md:text-xl leading-relaxed mb-16 max-w-2xl">
						I&apos;m always open to new opportunities, collaborations, or just a
						friendly conversation about tech. Drop me a line and I&apos;ll get
						back to you as soon as I can.
					</p>

					{/* Email CTA */}
					<motion.a
						href={`mailto:${siteConfig.email}`}
						whileTap={{ scale: 0.95 }}
						whileHover={{
							scale: 1.05,
							boxShadow: "0 0 30px rgba(212, 160, 23, 0.4)",
						}}
						className="inline-flex items-center gap-4 px-10 py-10 bg-[--color-accent] text-white font-bold rounded-full text-lg md:text-xl tracking-tight transition-all"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<rect width="20" height="16" x="2" y="4" rx="2" />
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
						</svg>
						{siteConfig.email}
					</motion.a>

					{/* Section Social Links */}
					<div className="flex justify-center gap-8 mt-16">
						{siteConfig.socialLinks.github && (
							<motion.a
								href={siteConfig.socialLinks.github}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.2, color: "var(--color-accent)" }}
								className="text-[--color-text-muted] transition-colors duration-300"
								aria-label="GitHub"
							>
								<GithubIcon />
							</motion.a>
						)}
						{siteConfig.socialLinks.linkedin && (
							<motion.a
								href={siteConfig.socialLinks.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.2, color: "var(--color-accent)" }}
								className="text-[--color-text-muted] transition-colors duration-300"
								aria-label="LinkedIn"
							>
								<LinkedInIcon />
							</motion.a>
						)}
					</div>
				</div>
			</Section>

			{/* Footer */}
			<footer className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-[--color-border]/10 text-center flex flex-col items-center">
				<div className="w-full max-w-7xl flex flex-col items-center">
					{/* Brand Name */}
					<div className="mb-12">
						<p className="text-3xl md:text-5xl font-serif text-[--color-accent] tracking-tighter">
							{siteConfig.name}
							<span className="text-white">.</span>
						</p>
					</div>

					{/* Navigation Links */}
					<nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
						{navLinks.map(({ href, label }) => (
							<a
								key={href}
								href={href}
								className="text-xs tracking-[0.2em] uppercase text-[--color-text-secondary] hover:text-[--color-accent] transition-colors"
							>
								{label}
							</a>
						))}
					</nav>

					{/* Copyright */}
					<div className="pt-12 border-t border-[--color-border]/10 w-full max-w-md">
						<p className="text-[10px] tracking-widest uppercase text-[--color-text-muted] opacity-60">
							&copy; {new Date().getFullYear()} {siteConfig.name}. All rights
							reserved.
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}
