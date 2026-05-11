"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { projects } from "@/data/site-config";
import Image from "next/image";

function ArrowIcon({ className = "" }: { className?: string }) {
	return (
		<svg
			className={className}
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M7 17L17 7M17 7H7M17 7v10" />
		</svg>
	);
}

export default function Projects() {
	const featured = projects.filter((p) => p.featured);
	const other = projects.filter((p) => !p.featured);

	return (
		<Section
			id="projects"
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
					Projects
				</motion.span>

				{/* Main Heading */}
				<h2 className="text-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-20 font-serif text-white">
					Selected <span className="italic text-[--color-accent]">work</span>
				</h2>

				{/* Featured projects — Centered Grid */}
				<div className="grid md:grid-cols-2 gap-8 md:gap-12 w-full mb-24">
					{featured.map((project, i) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="group relative bg-[#0A0A0A] border border-[--color-border]/30 rounded-2xl overflow-hidden hover:border-[--color-accent]/50 transition-all duration-500 text-left"
						>
							{/* Image placeholder / Visual Container */}
							<div className="aspect-[16/10] bg-[#111] relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-[--color-accent]/5 to-transparent" />
								<div className="absolute inset-0 flex items-center justify-center">
									<span className="text-display text-7xl font-serif text-[--color-text-muted]/10">
										<Image
											src={project.image || ""}
											alt={`${project.title} Screenshot`}
											fill
											style={{ objectFit: "contain" }}
										/>
									</span>
								</div>

								{/* Hover overlay with Actions */}
								<div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
									{project.liveUrl && (
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="px-6 py-2.5 bg-[--color-accent] text-white text-sm font-bold rounded-full flex items-center gap-1.5 hover:scale-105 transition-all"
										>
											Live Site <ArrowIcon />
										</a>
									)}
								</div>
							</div>

							<div className="p-8">
								<h3 className="text-2xl font-serif mb-3 text-white">
									{project.title}
								</h3>
								<p className="text-[--color-text-secondary] text-base leading-relaxed mb-6 opacity-80">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="text-[10px] tracking-widest uppercase px-3 py-1 border border-[--color-border]/50 text-[--color-text-muted] rounded-full"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Other projects — centered list */}
				<div className="w-full max-w-4xl border-t border-[--color-border]/20 pt-20">
					<h3 className="text-sm tracking-[0.3em] uppercase text-[--color-accent] mb-12 font-medium !pt-10">
						Archive & Other Experiments
					</h3>
					<div className="flex flex-col w-full">
						{other.map((project, i) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.08 }}
								className="group flex items-center justify-between py-8 border-b border-[--color-border]/10 hover:border-[--color-accent]/50 transition-all duration-300 text-left"
							>
								<div className="flex-1">
									<h4 className="text-xl font-serif text-white group-hover:text-[--color-accent] transition-colors duration-300 mb-2">
										{project.title}
									</h4>
									<p className="text-sm text-[--color-text-muted] max-w-xl">
										{project.description}
									</p>
								</div>

								<div className="flex items-center gap-6 ml-4 shrink-0 !py-10">
									<div className="hidden lg:flex gap-3">
										{project.tags.slice(0, 2).map((tag) => (
											<span
												key={tag}
												className="text-[10px] tracking-widest uppercase text-[--color-text-muted] opacity-50"
											>
												{tag}
											</span>
										))}
									</div>
									{project.repoUrl && (
										<a
											href={project.repoUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="w-10 h-10 flex items-center justify-center rounded-full border border-[--color-border]/30 text-[--color-text-muted] hover:border-[--color-accent] hover:text-[--color-accent] transition-all"
										>
											<ArrowIcon className="group-hover:rotate-45 transition-transform" />
										</a>
									)}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
}
