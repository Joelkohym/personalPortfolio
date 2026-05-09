"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { skills } from "@/data/site-config";

export default function About() {
	return (
		<Section
			id="about"
			className="py-32 px-6 md:px-12 lg:px-24 w-full bg-black text-center flex flex-col items-center"
		>
			{/* 1. 'text-center' handles the text alignment.
          2. 'items-center' on the Section ensures the content stays in the middle.
      */}

			<div className="w-full max-w-7xl relative z-10 flex flex-col items-center">
				{/* Section Label */}
				<motion.span
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-sm md:text-base tracking-[0.3em] uppercase text-[--color-accent] mb-6 block font-medium"
				></motion.span>

				{/* Main Heading */}
				<h2 className="text-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-12 font-serif text-white">
					A bit about{" "}
					<span className="text-[--color-accent] italic">myself</span>
				</h2>

				{/* Content Grid - Changed to 1 column or centered layout for vertical flow */}
				<div className="flex flex-col items-center gap-16 md:gap-24">
					{/* Bio Paragraphs - Centered and max-width for readability */}
					<div className="space-y-6 text-[--color-text-secondary] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
						<p>
							Results-driven technology consultant and product owner with 9
							years of experience at the intersection of business and
							technology, translating complex operational requirements into
							scalable digital solutions.
						</p>
						<p>
							My work spans full-stack development, computer vision, digital
							twins, process automation, and enterprise system integration —
							with a focus on supply chain, manufacturing, and logistics
							domains.
						</p>
						<p>
							Outside of work I play badminton competitively, pick up the
							guitar, and recharge through photography and travel.
						</p>
					</div>

					{/* Skills Section */}
					<div className="w-full flex flex-col items-center">
						<span className="text-sm tracking-[0.3em] uppercase text-[--color-accent] mb-8 block font-medium">
							Technologies I work with
						</span>

						<div className="flex flex-wrap justify-center gap-3 max-w-4xl">
							{skills.map((skill, i) => (
								<motion.span
									key={skill}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.04 }}
									className="px-5 py-2.5 text-sm md:text-base border border-[--color-border] rounded-full text-[--color-text-secondary] hover:border-[--color-accent] hover:text-[--color-accent] transition-all duration-300 cursor-default bg-white/5 backdrop-blur-sm"
								>
									{skill}
								</motion.span>
							))}
						</div>
					</div>

					{/* Stats - Centered Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-20 pt-16 border-t border-[--color-border]/30 w-full max-w-4xl">
						{[
							{ value: "9+", label: "Years Exp." },
							{ value: "20+", label: "Projects" },
							{ value: "4", label: "Companies" },
						].map((stat, i) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.2 + i * 0.1 }}
								className="flex flex-col items-center"
							>
								<div className="text-5xl md:text-6xl font-light tracking-tighter text-[--color-accent] mb-2 font-serif">
									{stat.value}
								</div>
								<div className="text-xs md:text-sm text-[--color-text-muted] tracking-widest uppercase font-medium">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
}
